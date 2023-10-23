let activeFn: Function | null,
  targetMap: WeakMap<object, Map<string, Dep>> = new WeakMap()
class Dep {
  deps: Set<Function>
  constructor() {
    this.deps = new Set()
  }
  subscriber(fn: Function | null) {
    this.deps.add(fn as Function)
    fn = null
  }
  notify() {
    this.deps.forEach((fn) => {
      fn()
    })
  }
}
function getDep(target: object, key: string): Dep {
  let map: Map<string, Dep>
  if (targetMap.has(target)) {
    map = targetMap.get(target)!
  } else {
    targetMap.set(target, new Map())
  }
  map = targetMap.get(target)!
  let dep: Dep
  if (map.has(key)) {
    dep = map.get(key) as Dep
  } else {
    map.set(key, new Dep())
  }
  dep = map.get(key) as Dep
  return dep
}
function reactive(obj: object): any {
  return new Proxy(obj, {
    get(target: object, key: string, context) {
      const dep = getDep(target, key)
      dep.subscriber(activeFn)
      return Reflect.get(target, key, context)
    },
    set(target, key: string, newValue, context) {
      const dep = getDep(target, key)
      const re = Reflect.set(target, key, newValue, context)
      dep.notify()
      return re
    },
  })
}
function watchEffect(fn: Function) {
  activeFn = fn
  fn()
}
// const info = reactive({ counter: 100, name: 'why' })
// const foo = reactive({ height: 1.88 })

// // watchEffect1
// watchEffect(function () {
//   console.log('effect1:', info.counter * 2, info.name)
// })

// // watchEffect2
// watchEffect(function () {
//   console.log('effect2:', info.counter * info.counter)
// })

// // watchEffect3
// watchEffect(function () {
//   console.log('effect3:', info.counter + 10, info.name)
// })

// watchEffect(function () {
//   console.log('effect4:', foo.height)
// })

// info.counter++;

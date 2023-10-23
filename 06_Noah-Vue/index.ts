interface VNode {
  tag: string
  props: null | object
  children: string | VNode[]
  el?: HTMLElement
}
interface Component {
  data: object
  render: () => VNode
}
interface instance {
  mount: (root: string) => any
}
function createApp(App: Component): instance {
  let isMounted = false
  let oldVNode: any = null
  return {
    mount(root) {
      const rootEl = document.querySelector(root)
      watchEffect(() => {
        if (!isMounted) {
          oldVNode = App.render()
          mount(oldVNode, rootEl as HTMLElement)
          isMounted = true
        } else {
          let newVNode = App.render()
          patch(oldVNode, newVNode)
          oldVNode = newVNode
        }
      })
    },
  }
}

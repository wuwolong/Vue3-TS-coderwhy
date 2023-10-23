"use strict";
// const vnode: VNode = h('div', { class: 'why', id: 'aaa' }, [
//   h('h2', null, '当前计数: 100'),
//   h(
//     'button',
//     {
//       onClick: function () {
//         console.log('first')
//       },
//     },
//     '+1'
//   ),
// ])
function h(tag, props, children) {
    return { tag, props, children };
}
// console.log(vnode)
function mount(vnode, contanier) {
    vnode.el = document.createElement(vnode.tag);
    const { el, props, children } = vnode;
    for (const prop in props) {
        if (prop.startsWith('on')) {
            el.addEventListener(prop.slice(2).toLocaleLowerCase(), props[prop]);
        }
        else {
            el.setAttribute(prop, props[prop]);
        }
    }
    if (typeof children === 'string') {
        el.textContent = children;
    }
    else if (Array.isArray(children)) {
        for (const childVNode of children) {
            mount(childVNode, el);
        }
    }
    contanier.appendChild(vnode.el);
}
// const vnode1: VNode = h('div', { class: 'coderwhy', id: 'aaa' }, [
//   h('h2', null, '呵呵呵'),
//   h(
//     'button',
//     {
//       onClick: function () {
//         console.log('second')
//       },
//     },
//     '-1'
//   ),
//   h('h2', null, '当前计数: 100'),
// ])
function patch(oldVNode, newVNode) {
    var _a;
    const parentEl = (_a = oldVNode.el) === null || _a === void 0 ? void 0 : _a.parentElement;
    const { tag: tag1, el: el1, props: props1, children: children1 } = oldVNode;
    newVNode.el = el1;
    const { tag: tag2, props: props2, children: children2 } = newVNode;
    if (tag1 !== tag2) {
        parentEl === null || parentEl === void 0 ? void 0 : parentEl.removeChild(el1);
        mount(newVNode, parentEl);
    }
    else {
        // props
        if (props1 &&
            props2 &&
            typeof props1 === 'object' &&
            typeof props2 === 'object') {
            Object.keys(props2).forEach((prop2) => {
                if (prop2.startsWith('on')) {
                    el1.addEventListener(prop2.slice(2).toLocaleLowerCase(), props2[prop2]);
                    el1.removeEventListener(prop2.slice(2).toLocaleLowerCase(), props1[prop2]);
                }
                else {
                    el1 === null || el1 === void 0 ? void 0 : el1.setAttribute(prop2, props2[prop2]);
                }
            });
            Object.keys(props1).forEach((prop1) => {
                if (!Object.keys(props2).includes(prop1)) {
                    if (prop1.startsWith('on')) {
                        el1.removeEventListener(prop1.slice(2).toLocaleLowerCase(), props1[prop1]);
                    }
                    else {
                        el1 === null || el1 === void 0 ? void 0 : el1.removeAttribute(prop1);
                    }
                }
            });
        }
        else if (!props2 && props1) {
            Object.keys(props1).forEach((prop1) => {
                el1 === null || el1 === void 0 ? void 0 : el1.removeAttribute(prop1);
            });
        }
        else if (!props1 && props2) {
            Object.keys(props2).forEach((prop2) => {
                el1 === null || el1 === void 0 ? void 0 : el1.setAttribute(prop2, props2[prop2]);
            });
        }
        // children
        if (typeof children2 === 'string') {
            // children2 为 string
            el1.innerHTML = children2;
        }
        else {
            if (typeof children1 === 'string') {
                // children1 为 string
                children2.forEach((child2) => {
                    mount(child2, el1);
                });
            }
            else {
                const len1 = children1.length;
                const len2 = children2.length;
                const minLength = Math.min(len1, len2);
                for (let index = 0; index < minLength; index++) {
                    patch(children1[index], children2[index]);
                }
                if (len1 > len2) {
                    children1.slice(minLength).forEach((child1) => {
                        el1 === null || el1 === void 0 ? void 0 : el1.removeChild(child1.el);
                    });
                }
                if (len2 > len1) {
                    children2.slice(minLength).forEach((child2) => {
                        mount(child2, el1);
                    });
                }
            }
        }
    }
}

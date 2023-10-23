"use strict";
function createApp(App) {
    let isMounted = false;
    let oldVNode = null;
    return {
        mount(root) {
            const rootEl = document.querySelector(root);
            watchEffect(() => {
                if (!isMounted) {
                    oldVNode = App.render();
                    mount(oldVNode, rootEl);
                    isMounted = true;
                }
                else {
                    let newVNode = App.render();
                    patch(oldVNode, newVNode);
                    oldVNode = newVNode;
                }
            });
        },
    };
}

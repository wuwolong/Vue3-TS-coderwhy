import '@/style/style.less'
import { createApp } from 'vue'
import App from './App'
import { add } from './utils'
createApp(App).mount('#app')
const message = 'hello world'
console.log(add)
add(222, 222)

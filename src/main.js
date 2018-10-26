import Vue from 'vue'
import Home from './Home.vue'
import VueRouter from 'vue-router'
import hljs from 'highlight.js'

Vue.use(VueRouter)


const routes = [
	{path :'/', component : Home}
]

const router = new VueRouter({
	routes,
	mode: "history"
})

new Vue({
	router,
	components: { 
		"Home" : Home,
	 }
}).$mount("#app")

hljs.initHighlightingOnLoad()

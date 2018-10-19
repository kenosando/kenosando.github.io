import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: App,
		},
	]
})

new Vue({
  el: '#app',
  render: h => h(App)
})

hljs.initHighlightingOnLoad()

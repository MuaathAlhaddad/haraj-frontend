import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import store from './store'
// import Auth from './store/Auth'

import { createProvider } from './vue-apollo'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuelidate)

// Use packages
Vue.use(VueResource);

Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// router.beforeEach((to, from, next) => {
//   let user =null
//   if (to.path === '/login' && user === null) next('/login')
//   // if the user is not authenticated, `next` is called twice
//   next()
// });
router.beforeEach((to, from, next) => {
  let user = localStorage.getItem("user");

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (user) {
      next();
    }
    else {
      next({ path: '/login' });
    }
  }
  next();

})
Vue.config.productionTip = false

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App),
  store,
  router: router,
}).$mount('#app')

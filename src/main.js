import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import store from './store'
// import Auth from './store/Auth'
import VueSocialSharing from 'vue-social-sharing'

///Uploading singular image
// https://github.com/kartoteket/vue-image-upload-resize
import ImageUploader from 'vue-image-upload-resize'
Vue.use(ImageUploader);

import { createProvider } from './vue-apollo'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { faVuejs } from '@fortawesome/free-brands-svg-icons';
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
library.add(faVuejs)

library.add(fas)

// Make BootstrapVue available throughout your project
Vue.use(VueSocialSharing, {
  networks: {
    newNetwork: 'https://newnetwork.com/share?url=@url&title=@title'
  }
})
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

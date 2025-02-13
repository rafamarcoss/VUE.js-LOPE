import Vue from 'vue'
import App from './App.vue'
import Home from './Home'
import VueRouter from 'vue-router'
import Axios from 'axios'
import Lunes from './Lunes'
import Martes from './Martes'
import Miercoles from './Miercoles'
import Jueves from './Jueves'
import Viernes from './Viernes'
import './assets/global.css'


Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/lunes', component: Lunes},
  {path: '/martes', component: Martes},
  {path: '/miercoles', component: Miercoles},
  {path: '/jueves', component: Jueves},
  {path: '/viernes', component: Viernes}
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('home', Home);
Vue.component('lunes', Lunes);
Vue.component('martes', Martes);
Vue.component('miercoles', Miercoles);
Vue.component('jueves', Jueves);
Vue.component('viernes', Viernes);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

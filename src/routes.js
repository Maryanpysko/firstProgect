import VueRouter from 'vue-router'
import Home from './components/Home'
import Cars from './components/Cars'

export default new VueRouter({
  routes:[
    {
      path:'', 
      component: Home
    },
    {
      path:'/cars', // localhost:8080
      component: Cars
    }
  ],
  mode:'history'
})
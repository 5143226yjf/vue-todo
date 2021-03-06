/**
 * Created by lethe on 17-2-1.
 */
import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import AddTodo from '../components/AddTodo.vue'
import TodoList from '../components/TodoList.vue'
import SwiperExample from '../components/swiperExample.vue'
import Transition from '../components/transition.vue'
import ImgEditor from '../components/imgEditor/index.vue'

Vue.use(Router)
export default new Router({
  routes : [
    { path: '/', component: App },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/home/addTodo', component: AddTodo },
    { path: '/home/todoList', component: TodoList },
    { path: '/home/swiper', component: SwiperExample},
    { path: '/home/transition', component: Transition},
    { path: '/img-editor', component: ImgEditor }
    ]
})


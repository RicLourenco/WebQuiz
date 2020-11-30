import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import OngoingQuizzes from '../views/OngoingQuizzes.vue'
import NextQuizzes from '../views/NextQuizzes.vue'
import PreviousQuizzes from '../views/PreviousQuizzes.vue'
import Quiz from '../views/Quiz.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/ongoingquizzes',
    name: 'OngoingQuizzes',
    component: OngoingQuizzes
  },
  {
    path: '/nextquizzes',
    name: 'NextQuizzes',
    component: NextQuizzes
  },
  {
    path: '/previousquizzes',
    name: 'PreviousQuizzes',
    component: PreviousQuizzes
  },
  {
    path: '/quiz/:id',
    name: 'Quiz',
    component: Quiz
  }
]

const router = new VueRouter({
  routes
})

export default router

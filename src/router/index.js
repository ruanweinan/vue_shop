import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login }
]

const router = new VueRouter({
  routes
})
// 设置路由导航守卫
router.beforeEach((to, from, next) => {
  // 如果用户访问登录页面直接放行
  if (to.path === '/login') return next()
  // 从sessionStorage中获取token值
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router

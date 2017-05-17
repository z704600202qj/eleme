import Vue from 'vue'
import Router from 'vue-router'
import goods from '@@/goods/goods.vue'
import seller from '@@/seller/seller.vue'
import ratings from '@@/ratings/ratings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    }, {
      path: '/seller',
      name: seller,
      component: seller
    }, {
      path: '/ratings',
      name: ratings,
      component: ratings
    }, {
      path: '/',
      name: goods,
      component: goods
    }
  ],
  linkActiveClass: 'active'
})

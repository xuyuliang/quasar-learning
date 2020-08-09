const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // },
  {
    path: '/',
    component: () => import('pages/pg0808.vue')
  },
  {
    path: '/pg0806',
    component: () => import('pages/coms0806.vue')
  },
  {
    path: '/mypage',
    component: () => import('pages/mypage.vue')
  },
  // 布局
  {
    path: '/layout',
    component: () => import('pages/myLayout.vue')
  },
  {
    path: '/ava',
    component: () => import('pages/avatar-and-others.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

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
  // Flex 网格
  // {
  //   path: '/',
  //   component: () => import('pages/mypage.vue')
  // },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

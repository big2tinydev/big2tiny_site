
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '/todo', component: () => import('pages/PageTodo.vue')
      },
      {
        path: '/settings', component: () => import('pages/PageSettings.vue')
      },
    ]
  },
  {
    path: '/showcase',
    component: () => import('layouts/LayoutShowcase.vue'),
    children: [
      {
        path: '/', component: () => import('pages/showcase/ShowcaseHome.vue')
      },
      {
        path: '/camera', component: () => import('pages/showcase/ShowcaseCamera.vue')
      },
      {
        path: '/settings', component: () => import('pages/showcase/ShowcaseSettings')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

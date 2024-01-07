
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/about', component: () => import('pages/About/About.vue') }
    ]
  },
  {
    path: '/contacts',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/contacts', component: () => import('pages/ContactUs/ContactUs.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

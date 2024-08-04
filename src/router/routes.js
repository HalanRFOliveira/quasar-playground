const routes = [
  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
    meta: { requiresAuth: false },
    children: [
      {
        path: "",
        name: "login",
        component: () => import("pages/LoginPage.vue"),
      }
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("pages/About/About.vue"),
      },
      {
        path: "/contacts",
        component: () => import("pages/ContactUs/ContactUs.vue"),
        name: "contact"
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

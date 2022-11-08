import { createRouter, createWebHistory } from 'vue-router'


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', 
    component: () => import('../views/Home.vue')},

    {
      path: '/',
      redirect: { name: 'Home' }
    },
    {
      path: '/vue-tailwind-practice/',
      name: 'Home',
      component: () => import('../views/Home.vue') 
    },
    {
      path: '/contact',
      component: () => import('../views/Contact.vue') 
    },
    { path: '/sign-in',
    component: () => import('../views/SignIn.vue') 
    },
    { path: '/sign-up',
     component: () => import('../views/SignUp.vue') },



  // { path: '/about', component: About },


  // { path: '/contact',
  //    component: () => import('../views/Contact.vue') },
  // { path: '/sign-in',
  //    component: () => import('../views/SignIn.vue') },
  // { path: '/sign-up',
  //    component: () => import('../views/SignUp.vue') },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router;

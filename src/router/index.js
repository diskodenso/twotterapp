import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import { users } from "../assets/users";
import Home from '../views/Home.vue'
import UserProfile from "../views/UserProfile";
import Admin from "../views/Admin";
// this constant which is a list (array) of different routing objects
// you'll only need the path (url), name and component
const routes = [
  {
    path: `/`,
    name: "Home",
    component: Home
  },
  // if we use user/:userID - the path is gonna pull the id dynamically
  // the path of the next objects need to start with / as this is the home page url
  {
    path: `/user/:userId`, 
    name: `UserProfile`,
    component: UserProfile
  },
  {
    path: `/admin`,
    name: `Admin`,
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user;

  if (!user) {
    // dispatch is the function you call to run actions
    await store.dispatch(`User/setUser`, users[0])
  }
  const isAdmin = true;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({ name: `Home` });
  // router-check - does the route need an admin and are we not (!) an admin -> we redirect to homepage
  else next();
})

export default router;

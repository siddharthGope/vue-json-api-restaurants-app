import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import SignIn from "./components/SignIn.vue";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignIn",
    component: SignIn,
    path: "/sign-in",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsPage from "../views/NewsPage.vue";
import NewsView from "../views/NewsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/news/:id",
    name: "news_id",
    component: NewsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

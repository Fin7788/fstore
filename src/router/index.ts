import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import Resturant from "@/views/Resturant";
import FoodMenu from "@/views/FoodMenu";
import ResturantTwoColumn from "@/views/ResturantTwoColumn";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Resturant",
      name: "Resturant",
      component: Resturant,
      children: [
        {
          path: "FoodMenu",
          name: "FoodMenu",
          component: FoodMenu,
        },
        {
          path: "ResturantTwoColumn",
          name: "ResturantTwoColumn",
          component: ResturantTwoColumn,
        }
      ],
    },
  ],
});

export default router;
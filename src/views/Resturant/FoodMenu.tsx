import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

import "@/assets/sass/_main.scss";



export default defineComponent({
  name: "FoodMenu",
  
  setup() {
    return (
      <>
        <RouterLink to="/">foom</RouterLink>
      </>
    );
  },
});

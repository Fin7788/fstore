import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

import "@/assets/sass/_main.scss";

export default defineComponent({
  name: "Resturant",

  setup() {
    return () => (
      <>
        <div>Hello World</div>
        <RouterLink to="/"> aaa</RouterLink>
      </>
    )
  },
});
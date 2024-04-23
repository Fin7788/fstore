import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HeaderWhite from "@/components/HeaderWhite";
import "@/assets/sass/_main.scss";

export default defineComponent({
  name: "Resturant",
  components: {
    HeaderWhite,
  },
  setup() {
    return () => (
      <>
        <HeaderWhite />
        <RouterView></RouterView>
      </>
    );
  },
});
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default defineComponent({
  name: "App",
  components: {
    RouterLink,
    RouterView,
  },
  setup() {
    return () => (
      <>
        <RouterView />
      </>
    );
  },
});

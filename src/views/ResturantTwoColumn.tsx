import { defineComponent } from "vue";
import { RouterLink,  } from "vue-router";
import HeaderWhite from "@/components/HeaderWhite";
import "@/assets/sass/_main.scss";

export default defineComponent({
  name: "ResturantTwoColumn",
  components: {
    HeaderWhite,
  },
  setup() {
    return() => (
      <>
        <RouterLink to="/">AAAA</RouterLink>
        <h1>AAAAA</h1>
      </>
    );
  },
});

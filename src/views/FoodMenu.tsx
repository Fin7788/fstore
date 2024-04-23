import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HeaderWhite from "@/components/HeaderWhite";
import "@/assets/sass/_main.scss";

export default defineComponent({
  name: "FoodMenu",
  components: {
    HeaderWhite,
  },
  setup() {
    return() => (
      <>
        <HeaderWhite />
        <h1>AAAAA</h1>
      </>
    );
  },
});

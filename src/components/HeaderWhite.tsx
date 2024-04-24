import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import flogo from "@/assets/images/flogo.png";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "HeaderWhite",
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const onToggleNavbar = () => {
      emit("toggle-navbar");
    };
    const atTop = ref(true);

    const checkScroll = () => {
      window.scrollY > 0 ? (atTop.value = false) : (atTop.value = true);
    };

    onMounted(() => {
      window.addEventListener("scroll", checkScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", checkScroll);
    });

    return () => {
      if (props.show) {
        return (
          <div
            class={{
              "headerWrap headerWrapW": true,
              "not-at-top": !atTop.value,
            }}
          >
            <RouterLink to="/" class="flogo">
              <img src={flogo} alt="" />
            </RouterLink>
            <div class="user">
              <div class="account">
                <i class="fa-regular fa-circle-user"></i>
                <div>ACCOUNT</div>
              </div>
              <div class="cart">
                <i class="fa-solid fa-cart-shopping"></i>{" "}
                <div class="number">( 8 )</div>
              </div>
              <button class="hamburger" onClick={onToggleNavbar}>
                <div class="line lineW"></div>
                <div class="line lineW"></div>
                <div class="line lineW"></div>
              </button>
            </div>
          </div>
        );
      }
    };
  },
});

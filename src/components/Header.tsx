import { defineComponent } from "vue";
import flogo from "@/assets/images/flogo.png";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "Header",
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  setup(_, { emit }) {
    const onToggleNavbar = () => {
      emit("toggle-navbar");
    };

    return () => (
      <div class="headerWrap">
         <RouterLink to="/" class="flogo">
              <img src={flogo} alt="" />
            </RouterLink>
        <div class="user">
          <div class="account">
            <i class="fa-regular fa-circle-user"></i>
            <div>ACCOUNT</div>
          </div>
          <div class="cart">
            <i class="fa-solid fa-cart-shopping"></i>
            <div class="number">( 8 )</div>
          </div>
          <button class="hamburger" onClick={onToggleNavbar}>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </button>
        </div>
      </div>
    );
  },
});

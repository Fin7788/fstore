import { defineComponent } from 'vue';
import flogo from "@/assets/images/flogo.png";

export default defineComponent({
  name: 'HeaderWhite',
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  }, 
  setup(props) {
    return () => (
      props.show && (
        <div class="headerWrap headerWrapW">
          <div class="flogo">
            <img src={flogo} alt="" />
          </div>
          <div class="user">
            <div class="account">
              <i class="fa-regular fa-circle-user"></i>
              <div>ACCOUNT</div>
            </div>
            <div class="cart">
              <i class="fa-solid fa-cart-shopping"></i>{" "}
              <div class="number">( 8 )</div>
            </div>
            <div class="hamburger">
              <div class="line lineW"></div>
              <div class="line lineW"></div>
              <div class="line lineW"></div>
            </div>
          </div>
        </div>
      )
    );
  },
});
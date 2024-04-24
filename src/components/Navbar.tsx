import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "Footer",
  components: {
    RouterLink,
  },
  setup() {
    const navto = [
      { title: "Careers", link: "/Resturant/ResturantTwoColumn" },
      { title: "Our Stores", link: "/" },
      { title: "Our Cares", link: "/" },
      { title: "Terms & Conditions", link: "/" },
      { title: "Privacy Policy", link: "/" },
    ];
    

    return () => (
      <div class="navw">
        <div><h5>Navbar</h5><button><i class="fa-regular fa-circle-xmark"></i></button></div>
      </div>
    );
  },
});

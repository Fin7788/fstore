import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header";
import HeaderWhite from "@/components/HeaderWhite";
import Banner from "@/components/Banner";
import MenuCard from "@/components/MenuCard";
import Collections from "@/components/Collections";
import BBC from "@/components/BBC";
import PNY from "@/components/PNY";
import "@/assets/sass/_main.scss";

import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    RouterLink,
    RouterView,
    Header,
    HeaderWhite,
    Banner,
    Collections,
    BBC,
    PNY,
    HelloWorld,
  },
  setup() {
    const isHeaderVisible = ref(false);

    const checkScroll = () => {
      isHeaderVisible.value = window.scrollY > window.innerHeight / 2;
    };

    onMounted(() => {
      window.addEventListener("scroll", checkScroll);
      checkScroll();
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", checkScroll);
    });

    return {
      isHeaderVisible,
    };
  },
  render() {
    return (
      <>
        <Header />
        <HeaderWhite show={this.isHeaderVisible} />
        <Banner />
        <MenuCard/>
        <Collections/>
        <BBC />
        <PNY />
        {/* <RouterLink to="/Resturant"> aaa</RouterLink> */}
      </>
    );
  },
});

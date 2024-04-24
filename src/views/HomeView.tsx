import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header";
import HeaderWhite from "@/components/HeaderWhite";
import Banner from "@/components/Banner";
import MenuCard from "@/components/MenuCard";
import Collections from "@/components/Collections";
import BBC from "@/components/BBC";
import PNY from "@/components/PNY";
import Mobile from "@/components/Mobile"
import Poploc from "@/components/Poploc"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

// import HelloWorld from "@/components/HelloWorld.vue"
import "@/assets/sass/_main.scss";


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
    Mobile,
    Poploc,
    Footer,
    Navbar,
    // HelloWorld,
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
        <Mobile/>
        <Poploc/>
        <Footer/>
        <Navbar/>
      </>
    );
  },
});

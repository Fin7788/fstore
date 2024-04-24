import FoodMenu from "@/views/FoodMenu";
import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "Navbar",
  components: {
    RouterLink,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    onUpdateIsOpen: Function,
  },

  setup(props,{emit}) {
    const navto = ref([
      {
        title: "Dashboards",
        sub: [
          { name: "Review", link: "/" },
          { name: "Photos", link: "/" },
          { name: "Order List", link: "/" },
          { name: "Order History", link: "/" },
          { name: "Followers", link: "/" },
          { name: "Bookmarks", link: "/" },
        ],
        icon: "fa-solid fa-keyboard",
        open: false,
      },
      {
        title: "Resturant",
        sub: [
          { name: "Food Menu", link: "/" },
          { name: "Resturant Two Column", link: "/" },
          { name: "Search Resturant", link: "/" },
        ],
        icon: "fa-solid fa-utensils",
        open: false,
      },
    ]);
    const openSub = ref(-1);
    const toggle = (index: number) => {
      if (openSub.value === index) {
        openSub.value = -1;
      } else {
        openSub.value = index;
      }
    };
    const isNavbarVisible = ref(true);
    const closeNavbar = () => {
      isNavbarVisible.value = false;
      emit('updateIsOpen', false);
      console.log(isNavbarVisible.value)
    };
    const stopPropagation = (event:any) => {
      event.stopPropagation();
    };
    return {
      navto,
      toggle,
      openSub,
      closeNavbar,
      props,
      isNavbarVisible,
      stopPropagation,
    };
  },
  render() {
    if (!this.props.isOpen) {
      return null;
    }
    if (this.props.isOpen) {
      return (
        <div class={["overlay", { "overlay-show": this.props.isOpen }]} onClick={this.closeNavbar}>
          <div
            class={[
              "navw",
              { "navbar-hidden": !this.props.isOpen },
            ]}
            onClick={this.stopPropagation} 
          >
            <div class="nav">
              <h5>Navbar</h5>
              <button onClick={this.closeNavbar}>
                <i class="fa-solid fa-x"></i>
              </button>
            </div>
            {this.navto.map((menu, index) => (
              <div>
                <button class="varb" onClick={() => this.toggle(index)}>
                  <div class="flex20">
                    <i class={menu.icon}></i>
                  </div>
                  <span class="flex60">{menu.title}</span>
                  <div class="flex20">
                    <i
                      class={[
                        "fa-solid fa-chevron-down",
                        { spin: this.openSub === index },
                      ]}
                    ></i>
                  </div>
                </button>

                <div class={["sub", { open: this.openSub === index }]}>
                  {menu.sub.map((subItem) => (
                    <RouterLink class="sublink" to={subItem.link}>
                      {subItem.name}
                    </RouterLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  },
});

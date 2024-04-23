import { defineComponent } from "vue";

export default defineComponent({
  name: "Banner",
  setup() {
    return () => (
      <div class="bannerWrap">
        <h1>Discover the best food & drinks in <span>New York</span></h1>
        <div>The meals you love, delivered with care</div>
        <div class="searchBar">
          <button>
            <i class="fa-solid fa-location-dot"></i><span>New York</span>
          </button>
          <button class="loc">
            <i class="fa-solid fa-location-crosshairs"></i><span>Locate Me</span>
          </button>
          <input type="text" name="" id="" placeholder="Search for restaurant " />
          <button class="bntR">Search</button>
        </div>
      </div>
    );
  }
});
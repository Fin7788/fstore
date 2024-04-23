import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import Italian from "@/assets/images/area/Italian.png";
import Chinesse from "@/assets/images/area/Chinesse.png";
import Japanese from "@/assets/images/area/Japanesse.png";
import Indian from "@/assets/images/area/Indian.png";
import ThaiFood from "@/assets/images/area/Italian.png";
import Mexican from "@/assets/images/area/Mexican.png";

export default defineComponent({
  name: "BBC",
  components: {
    RouterLink,
  },
  setup() {
    const cuisines = [
      { name: "Italian", image: Italian },
      { name: "Chinese", image: Chinesse },
      { name: "Japanese", image: Japanese },
      { name: "Indian", image: Indian },
      { name: "Thai Food", image: ThaiFood },
      { name: "Mexican", image: Mexican },
    ];

    return () => (
      <div class="bw">
        <h2>Browse By Cuisine</h2>
        <div class="cuisine-container">
          {cuisines.map(cuisine => (
            <RouterLink to="/" class="cuisine-item">
              <div class="image-container">
                <img src={cuisine.image} alt={cuisine.name} class="cuisine-image" />
              </div>
              <h4>{cuisine.name}</h4>
            </RouterLink>
          ))}
        </div>
      </div>
    );
  },
});
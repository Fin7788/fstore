import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import p1 from "@/assets/images/pop/p1.jpg";
import p2 from "@/assets/images/pop/p2.jpg";
import p3 from "@/assets/images/pop/p3.jpg";
import p4 from "@/assets/images/pop/p4.jpg";
import p5 from "@/assets/images/pop/p5.jpg";
import p6 from "@/assets/images/pop/p6.jpg";
import p7 from "@/assets/images/pop/p7.jpg";
import p8 from "@/assets/images/pop/p8.jpg";

export default defineComponent({
  name: "PNY",
  components: {
    RouterLink,
  },
  setup() {
    const loc = [
      { name: "Starbucks", image: p1, stars: 4.5, price: "$20", tag: 1 },
      {
        name: "Mughal Masala Masala Masala",
        image: p2,
        stars: 4,
        price: "$20",
        tag: 0,
      },
      { name: "Woondal", image: p3, stars: 4, price: "$20", tag: 0 },
      { name: "Red Chillies", image: p4, stars: 4, price: "$20", tag: 0 },
      { name: "Starbucks", image: p5, stars: 4.5, price: "$20", tag: 0 },
      { name: "Mughal Masala", image: p6, stars: 4, price: "$20", tag: 0 },
      { name: "Woondal", image: p7, stars: 4, price: "$20", tag: 1 },
      { name: "Red Chillies", image: p8, stars: 4, price: "$20", tag: 1 },
    ];

    return () => (
      <div class="bw">
        <h2>Popular Near You</h2>
        <div class="locCon">
          {loc.map((loc) => (
            <RouterLink to="/" class="locC">
              <div>
                <img src={loc.image} alt={loc.name} class="loc-image" />
              </div>
              <div class="pnyNW">
                <div>{loc.name}</div>
                <div class="rating">
                  <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                  <span>{loc.stars}/5</span>
                </div>
              </div>
              <div class="locInfo">
                <span>{loc.price}</span>
                <span> • Cofee, set menu • 15 - 20 min </span>
              </div>
            </RouterLink>
          ))}
        </div>
      </div>
    );
  },
});

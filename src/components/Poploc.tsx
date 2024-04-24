import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "Poploc",
  components: {
    RouterLink,
  },
  setup() {
    const poploc = [
      { name: "Newport", num: 26 },
      { name: "Brooklyn", num: 14 },
      { name: "Chinatown ", num: 10 },
      { name: "Chelsea", num: 20 },
      { name: "Coney Island", num: 6 },
      { name: "Newport", num: 26 },
      { name: "Brooklyn", num: 14 },
      { name: "Chinatown ", num: 10 },
      { name: "Chelsea", num: 20 },
      { name: "Coney Island", num: 6 },
      { name: "Newport", num: 26 },
      { name: "Brooklyn", num: 14 },
      { name: "Chinatown ", num: 10 },
      { name: "Chelsea", num: 20 },
      { name: "Coney Island", num: 6 },
      { name: "Newport", num: 26 },
      { name: "Brooklyn", num: 14 },
      { name: "Chinatown ", num: 10 },
      { name: "Chelsea", num: 20 },
      { name: "Coney Island", num: 6 },
    ];
    const isFifthElement = (index: any) => {
      const result = (index + 1) % 5 === 0;
      return result;
    };

    return () => (
      <div class="bw">
        <h2>Popular Localities In & Around New York</h2>
        <div class="popLoc">
          {poploc.map((poploc, index) => (
            <RouterLink
              to="/Resturant/ResturantTwoColumn"
              class={{
                plr: true,
                "fifth-plr": isFifthElement(index),
              }}
              key={index}
            >
              <div>
                <span>{poploc.name}</span>
                <span>({poploc.num} places)</span>
              </div>
            </RouterLink>
          ))}
        </div>
      </div>
    );
  },
});

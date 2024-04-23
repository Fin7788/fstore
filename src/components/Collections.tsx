import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import ball from '@/assets/images/good/ball.png';
import steak from '@/assets/images/good/steak.png';
import soup from '@/assets/images/good/soup.png';
import fish from '@/assets/images/good/fish.png';

export default defineComponent({
  name: "Collections",
  components: {
    RouterLink,
  },
  setup() {
    // Bundle images and titles in a single array of objects
    const cards = [
      { image: ball, title: 'Most Searched of 2020' },
      { image: fish, title: 'Best Openings of 2020' },
      { image: soup, title: 'Trending This Week' },
      { image: steak, title: 'Best Of New York' }
    ];

    return () => (
      <div class="collectW">
        <div class="conW">
          <div>
            <h2>Collections</h2>
            <h6>
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              New York, based on trends
            </h6>
          </div>
          <div>
            <RouterLink to="/" style={{ color: "#d23f57", fontSize: "16px" }}>
              View all collections
            </RouterLink>
          </div>
        </div>
        <div class="cardBox">
          {cards.map(card => (
            <RouterLink to="/" class="cCW">
              <div class="collectCard">
                <div>
                  <img
                    src={card.image}
                    alt=""
                    class="cardImg"
                  />
                </div>
                <div class="cardInfo">
                  <h5>{card.title}</h5>
                  <div>
                    <span>30 Places</span>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </RouterLink>
          ))}
        </div>
      </div>
    );
  },
});
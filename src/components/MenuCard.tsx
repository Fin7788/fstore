import { RouterLink } from "vue-router";
import sa from "@/assets/images/good/sa.jpg";
import su from "@/assets/images/good/su.jpg";
import chips from "@/assets/images/good/chips.jpg";
import buger from "@/assets/images/good/buger.jpg";

export default function MenuCard() {
  return (
    <div class="menuW">
      <div class="mCardW">
        <RouterLink to="/Resturant/FoodMenu" class="mCard">
          <div class="imageContainer">
            <img src={sa} alt="" />
          </div>
          <div class="caption">
            <span>Order Food Online</span>
          </div>
        </RouterLink>

        <RouterLink to="/Resturant/FoodMenu" class="mCard">
          <div class="imageContainer">
            <img src={su} alt="" />
          </div>
          <div class="caption">
            <span>Go Out For Meal</span>
          </div>
        </RouterLink>

        <RouterLink to="/Resturant/ResturantTwoColumn" class="mCard">
          <div class="imageContainer">
            <img src={chips} alt="" />
          </div>
          <div class="caption">
            <span>Nightlife & Clubs</span>
          </div>
        </RouterLink>

        <RouterLink to="/Resturant/ResturantTwoColumn" class="mCard">
          <div class="imageContainer">
            <img src={buger} alt="" />
          </div>
          <div class="caption">
            <span>Pro Membership</span>
          </div>
        </RouterLink>
      </div>
    </div>
  );
}

import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import flogo from "@/assets/images/flogo.png";
import m2 from "@/assets/images/mobile/m2.png";
import m3 from "@/assets/images/mobile/m3.png";

export default defineComponent({
  name: "Footer",
  components: {
    RouterLink,
  },
  setup() {
    const aboutUs = [
      { title: "Careers", link: "/Resturant/ResturantTwoColumn" },
      { title: "Our Stores", link: "/" },
      { title: "Our Cares", link: "/" },
      { title: "Terms & Conditions", link: "/" },
      { title: "Privacy Policy", link: "/" },
    ];
    const customerCare = [
      { title: "Help Center", link: "/Resturant/ResturantTwoColumn" },
      { title: "How to Buy", link: "/" },
      { title: "Track Your Order", link: "/" },
      { title: "Corporate & Bulk Purchasing", link: "/" },
      { title: "Returns & Refunds", link: "/" },
    ];

    return () => (
      <div class="grayw">
        <div class="bw fw">
          <div class="fc">
            <RouterLink to="/" class="cr fl">
              <img src={flogo} alt="" class="fl" />
            </RouterLink>
            <div>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                libero id et, in gravida. Sit diam duis mauris nulla cursus.
                Erat et lectus vel ut sollicitudin elit at amet.
              </h5>
              <div class="mi">
                <img src={m2} alt="" />
                <img src={m3} alt="" />
              </div>
            </div>
          </div>
          <div class="fc">
            <h2>About Us</h2>
            {aboutUs.map((item) => (
              <RouterLink class="cr" to={item.link}>
                {item.title}{" "}
              </RouterLink>
            ))}
          </div>
          <div class="fc">
            <h2>Customer Care</h2>
            {customerCare.map((item) => (
              <RouterLink class="cr" to={item.link}>
                {item.title}{" "}
              </RouterLink>
            ))}
          </div>
          <div class="fc">
            <h2>Contact Us</h2>
            <div>
              <p>
                Jalalabad 20/1, Shah Farid Road Sylhet, Bangladesh. Email:
                uilib@gmail.com Phone: +880 1123 456 780
              </p>
              <p>Sylhet, Bangladesh.</p>
              <p>Email: uilib@gmail.com</p>
              <p>Phone: +880 1123 456 780</p>
            </div>
            <div>
              <button>
                <div>
                  <i class="fa-brands fa-facebook"></i>
                </div>
              </button>
              <button>
                <div>
                  <i class="fa-brands fa-twitter"></i>
                </div>
              </button>
              <button>
                <div>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </button>
              <button>
                <div>
                  <i class="fa-brands fa-youtube"></i>
                </div>
              </button>
              <button>
                <div>
                  <i class="fa-brands fa-google"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

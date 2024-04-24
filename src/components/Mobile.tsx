import { defineComponent } from 'vue';
import Options from "@/components/Options";
import m1 from "@/assets/images/mobile/m1.png";
import m2 from "@/assets/images/mobile/m2.png";
import m3 from "@/assets/images/mobile/m3.png";

export default defineComponent({
    components:{
        Options
    },
    setup() {
        return () => (
            <div class="grayw">
                <div class="mw">
                    <div class="moimg">
                        <img src={m1} alt="" />
                    </div>
                    <div class="minfo">
                        <h1>Get the Mobile App</h1>
                        <p>
                            We will send you a link, open it on your phone to download the app.
                        </p>
                        <Options />
                        <div class="emailS">
                            <input type="text" placeholder="Email" />
                            <button>Search</button>
                        </div>
                        <div>
                            <h6>Download App from</h6>
                            <div class="apps">
                                <div>
                                    <img src={m2} alt="" />
                                </div>
                                <div>
                                    <img src={m3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
})
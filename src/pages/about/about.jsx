import { React } from "react";
import './about.css'
import Navbar from "../../components/navbar/navbar";

function About() {
    return(
        <div className="about-div">
          <Navbar />
         <div className="about-info">
         
         <h2>ABOUT US...</h2>
         <div className="about-details">
           
           <p>Remember that feeling of sunshine warming your face and the sweet, juicy explosion of a perfectly ripe fruit? That's the experience we strive to capture at <span className="big-name">BLEND AND MEND</span>. We're a passionate bunch of fruit enthusiasts on a mission to bring vibrant health and deliciousness to your day.</p>
           <p>Our journey began with a simple observation: busy lives often meant sacrificing good nutrition. This has led to reduced intake of essential Vitamins and Minerals that are important for day to day body function as well as improving ones general well being. Thus, we craved to create healthy options that were convenient and, most importantly, tasted amazing. All this, while also delivering the essential nutrients to keep us going with our daily activities. So, we set out to create a haven for fresh fruits, offering smoothies and fruit salads bursting with flavor and packed with the good stuff.</p>
           <p className="obsessed">Here at <span className="big-name">Blend and Mend</span>, we're obsessed with:</p>
           <p className="obsessed"><span>Farm-Fresh Flavor:</span> We believe in the power of real ingredients. That's why we source our fruits locally, building relationships with farmers who share our commitment to quality. This ensures peak ripeness, maximum flavor, and a taste that transports you straight to the orchard.</p>
           <p className="obsessed"><span>Beyond the Basics:</span> Our smoothies aren't just your average fruit puree. We're all about crafting unique flavor profiles that tantalize your taste buds while delivering a boost of vitality for your overall well being.</p>
           <p className="obsessed"><span>Fueling Your Body & Mind:</span> We don't just quench your thirst, we nourish you. Our smoothies are packed with essential vitamins, minerals, and antioxidants to keep you energized throughout your day. Whether you're crushing a workout, looking for healthy alternatives to help manage your weight and detoxify your body, or simply need a midday pick-me-up, our creations will fuel your body and mind.</p>
           <p className="obsessed"><span>Quality You Can Count On:</span> We take pride in using only the finest ingredients. From sourcing to blending, we maintain strict quality control measures to ensure every smoothie, fruit salad, and piece of fruit that leaves our shop is bursting with freshness and flavor.</p>
           <p>But for us, it's about more than just deliciousness. We believe in fostering a healthy and happy community. We use eco-friendly packaging to minimize our environmental impact and support local farmers who share our commitment to sustainable practices.</p>
           <p>So, the next time you're craving a taste of sunshine, a burst of energy, or a delightful fruit platter to share, come visit us at <span className="big-name">BLEND AND MEND!</span> Explore our vibrant selection of smoothies, fruit salads, and fresh fruits. We guarantee an experience that goes beyond the ordinary. Let us fuel your day with a dose of fruity goodness and show you what fresh, healthy living truly tastes like!</p>
         </div>
         </div>
        </div>
    )
}

export default About;
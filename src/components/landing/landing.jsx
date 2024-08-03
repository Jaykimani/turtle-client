import React from "react";
import './landing.css'
import Navbar from '../navbar/navbar';
import Menu from '../menu/menu';
import Custom from '../custom-smoothie/custom';
import CheckOut from "../check-out/check-out";

function Landing() {
    return (
        <>
        <CheckOut />
         <div className='landing-div'>
      <Navbar />
      <div className='landing-png'>
      <svg width="480" height="593" viewBox="0 0 480 593" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
      <pattern id="img1" patternUnits="userSpaceOnUse" width="480" height="593">
    <image href="Assets/itemsbg.jpg" x="0" y="0" width="480" height="693" />
  </pattern>   
    </defs>
    <path id='svg' d="M0 481.5V0.5H479.5V481.5C479.5 481.5 484 730.5 394 481.5C304 232.5 329 740.5 282.5 481.5C236 222.5 217.284 638.639 175.5 481.5C135.283 341.309 100.5 757 72 481.5C43.5 206 19.3225 628.784 0 481.5Z" fill="url(#img1)"/>
</svg>
      </div>

      <div className='landing-content'>
        <p>Healthy Never Tasted So Freakin' Good!!!</p>
      </div>

      <p className='turtle-content'>Hey! Are you looking for healthy alternatives for your breakfast, lunch or supper? Are you looking for healthy options to detoxify your body and help with weight management? or, you are simply looking for a healthier way to improve your vitamin and mineral intake. WE'VE GOT YOU!!. At <span>BLEND AND MEND</span>, we are obsessed with healthy eating.</p>

    </div>
    
    <div className='landing-desktop'>
      <Navbar />
      
      <img className="desktop-img" src='Assets/Vector 49-desk3.png' alt=''/>
      <div className='landing-content-1'>
      <p>Healthy Never Tasted So Freakin' Good!!!</p>
      </div>
      
      <p className='turtle-content-1'>Hey! Are you looking for healthy alternatives for your breakfast, lunch or supper? Are you looking for healthy options to detoxify your body and help with weight management? or, you are simply looking for a healthier way to improve your vitamin and mineral intake. WE'VE GOT YOU!!. At <span>BLEND AND MEND</span>, we are obsessed with healthy eating.</p>
      
    </div>

    
    <Menu /> 
    <Custom />
        </>
    );
}

export default Landing;
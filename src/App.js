import React, { useContext, useEffect } from 'react'; 
import './App.css';
import Navbar from './components/navbar/navbar';
import Menu from './components/menu/menu';
import Custom from './components/custom-smoothie/custom';
import CheckOut from './components/check-out/check-out';
import {axiosInstance} from "../src/config";
import { CountContext } from './context/context';

function App(){
  const {dispatch} = useContext (CountContext);

useEffect(() => {
  async function fetchData(){
  const allSmoothies = await axiosInstance.get("/all");
  const allFruits = await axiosInstance.get("/fruits");
  const allVeggies = await axiosInstance.get("/veggies");
  const allBases = await axiosInstance.get("/bases");
  const allAddins = await axiosInstance.get("/addins");

  dispatch({type: "add-all", payload: allSmoothies.data})
  dispatch({type: "add-fruits", payload: allFruits.data})
  dispatch({type: "add-veggies", payload: allVeggies.data})
  dispatch({type: "add-bases", payload: allBases.data})
  dispatch({type: "add-addins", payload: allAddins.data})
  }
  
  fetchData();

}, [dispatch]);

  return (<div>
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

      <p className='turtle-content'><span>BLEND AND MEND</span> is a wellness and nutrition shop, where we believe in the perfect fusion of health and flavor. Our smoothies are meticulously crafted to not only tantalize your taste buds, but also provide a nourishing blend of essential nutrients. We source the freshest fruits, vegetables, and wholesome ingredients to ensure each sip is a delightful experience for your palate and a boost of vitality for your well-being.</p>

    </div>
    
    <div className='landing-desktop'>
      <Navbar />
      
      <img className="desktop-img" src='Assets/Vector 49-desk3.png' alt=''/>
      <div className='landing-content-1'>
      <p>Healthy Never Tasted So Freakin' Good!!!</p>
      </div>
      
      <p className='turtle-content-1'><span>BLEND AND MEND</span> is a wellness and nutrition shop, where we believe in the perfect fusion of health and flavor. Our smoothies are meticulously crafted to not only tantalize your taste buds, but also provide a nourishing blend of essential nutrients. We source the freshest fruits, vegetables, and wholesome ingredients to ensure each sip is a delightful experience for your palate and a boost of vitality for your well-being.</p>
      
    </div>

    
    <Menu /> 
    <Custom />
  
    </div>
  )  
};

export default App;

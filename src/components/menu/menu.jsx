import React, {useState, useEffect, useContext} from "react";
import "./menu.css";
import Item from "../menu-item/item";
import { CountContext } from "../../context/context";


function Menu (){
  const {state} = useContext(CountContext);
   const [displayContent, setDisplayContent] = useState ([]);
   const [energyClicked, setEnergyClicked] = useState (true);
   const [skinClicked, setSkinClicked] = useState (false);
   const [weightClicked, setWeightClicked] = useState (false);
   const [inflammatoryClicked, setInflammatoryClicked] = useState (false);
   const [postworkoutClicked, setPostworkout]= useState (false);
   const [detoxClicked, setDetoxClicked] = useState (false);
   

   useEffect(() => {

    let energySmoothies = state.all?.filter((item)=>{
       return item.type === 'Energy-boost smoothie';
    });

    setDisplayContent(energySmoothies);
   }, [state]);



   
   const handleEnergyboost = () => {
      setEnergyClicked(true);
      setDetoxClicked(false);
      setSkinClicked(false);
      setWeightClicked(false);
      setInflammatoryClicked(false);
      setPostworkout(false);
    let display = state.all?.filter((item)=>{
      return item.type === 'Energy-boost smoothie';
   });

   setDisplayContent(display);
   };

   const handleDetox =  () => {
    setEnergyClicked(false);
    setDetoxClicked(true);
    setSkinClicked(false);
    setWeightClicked(false);
    setInflammatoryClicked(false);
    setPostworkout(false);

    let display = state.all?.filter((item)=>{
      return item.type === 'Detox smoothies';
   });

   setDisplayContent(display);

   }

   const handleSkincare = () => {
      setEnergyClicked(false);
      setDetoxClicked(false);
      setSkinClicked(true);
      setWeightClicked(false);
      setInflammatoryClicked(false);
      setPostworkout(false);
    let display = state.all?.filter((item)=>{
      return item.type === 'Skin-care smoothie';
   });

   setDisplayContent(display);
   };

   const handleWeightloss = () => {
      setEnergyClicked(false);
      setDetoxClicked(false);
      setSkinClicked(false);
      setWeightClicked(true);
      setInflammatoryClicked(false);
      setPostworkout(false);
    let display = state.all?.filter((item)=>{
      return item.type === 'Weight-loss smoothie';
   });

   setDisplayContent(display);
   }


   const handleAntiinflammatory = () => {
      setEnergyClicked(false);
      setDetoxClicked(false);
      setSkinClicked(false);
      setWeightClicked(false);
      setInflammatoryClicked(true);
      setPostworkout(false);
    let display = state.all?.filter((item)=>{
      return item.type === 'Anti-inflammatory smoothie';
   });

   setDisplayContent(display);
   };

   const handlePostworkout = () => {
      setEnergyClicked(false);
      setDetoxClicked(false);
      setSkinClicked(false);
      setWeightClicked(false);
      setInflammatoryClicked(false);
      setPostworkout(true);
    let display = state.all?.filter((item)=>{
      return item.type === 'Post-Workout smoothie';
   });

   setDisplayContent(display);
   };


  
  return (
    <div className="menu-div">
       <h2>Our Smoothie Menu</h2>
       <div className="menu-options">
          <div onClick={handleEnergyboost}>
        <p className={energyClicked ? "active" : null} style={{width: "100px"}}>Fun Tasty<br></br>Energy</p>
        </div>
        <div onClick={handleDetox}>
        <p className={detoxClicked ? "active" : null}>Detox Cleanse</p>
        </div>
        <div onClick={handleWeightloss}>
        <p className={weightClicked ? "active" : null}>Weight<br></br>Management</p>
        </div>
        <div onClick={handleSkincare}>
        <p className={skinClicked ? "active" : null} style={{padding: "10px 20px"}}>Skin Care</p>
        </div>
        <div onClick={handlePostworkout}>
        <p className={postworkoutClicked ? "active" : null}>Post-Workout</p>
        </div>
        <div id="last-div" onClick={handleAntiinflammatory}>
        <p className={inflammatoryClicked ? "active" : null}>Wellness Shots</p>
        </div>
       </div>
       <div id="allList" className="menu-content">
         {displayContent.map((item)=>{

          return (
            <Item 
               key={item.id}
               id = {item.id}
               name = {item.name}
               color = {item.color}
               font = {item.font}
               ingredients = {item.ingredients}
               type = {item.type}
             />
          )

         })}
        
       </div>
      
    </div>
    
  )
}

export default Menu;
import React, {useEffect, useRef, useState} from "react";
import "./custom.css";
import {CountContext} from "../../context/context"
import { useContext } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AcUnitIcon from '@mui/icons-material/AcUnit';


function Custom(){
  const {state, dispatch} = useContext(CountContext);
  const [customIngredients, setCustomIngredients] = useState([]);
  const [customIsClicked, setCustomIsClicked] = useState(false);
  const [customCheckout, setCustomCheckout] = useState({font : `'Protest Riot', sans-serif`, color: `#15ff00`, name: `${customIngredients?.[0]} SMOOTHIE`, ingredients: customIngredients, size: 0, price: 0, bottles: 0, temperature: '', comments: ''})
  const [halfMl, setHalfMl] = useState(false);
  const [threeQuarterMl, setThreeQuarterMl] = useState(false);
  const [litre, setLitre] = useState (false);
  const [roomTemp, setRoomTemp] = useState (false);
   const [chilledTemp, setChilledTemp] = useState (false);
  const [customBottlesNum, setCustomBottlesNum] = useState(1);
  const [doneBG, setDoneBG] = useState(false);
  const customComment = useRef();

  useEffect(()=>{
    
   setCustomCheckout({...customCheckout, bottles: customBottlesNum})  
  
   }, [customBottlesNum])


const handleCustom = (e) => {
    let clickedItem = e.currentTarget;
    if(clickedItem.style.backgroundColor === "white"){
      clickedItem.style.backgroundColor = "gray";
      let clickedWord = clickedItem.querySelector(".word").innerHTML;
    setCustomIngredients([...customIngredients, clickedWord]);
    }else if(clickedItem.style.backgroundColor === "gray" ){
      clickedItem.style.backgroundColor = "white";
      let clickedWord = clickedItem.querySelector(".word").innerHTML;
      let newArray = customIngredients.filter(item => item !== clickedWord);
      setCustomIngredients([...newArray]);
    }   
  
}

const handleCheckout = () => {
  setCustomIsClicked(true);
  setCustomCheckout({...customCheckout, name: `${customIngredients?.[0]} SMOOTHIE`, ingredients: customIngredients})
}

const handleHalf = (e)=>{
  setHalfMl(true);
    setThreeQuarterMl(false);
    setLitre(false);
    const clickedQuantity = e.currentTarget;
    let clickedPrice = clickedQuantity.querySelector("#price").innerHTML;

    setCustomCheckout({...customCheckout, size: 500, price: clickedPrice})
}

const handleThreeQuarter = (e)=>{
  setHalfMl(false);
    setThreeQuarterMl(true);
    setLitre(false);
    const clickedQuantity = e.currentTarget;
    let clickedPrice = clickedQuantity.querySelector("#price").innerHTML;

    setCustomCheckout({...customCheckout, size: 750, price: clickedPrice})
}

const handleLitre = (e)=>{
  setHalfMl(false);
    setThreeQuarterMl(false);
    setLitre(true);
    const clickedQuantity = e.currentTarget;
    let clickedPrice = clickedQuantity.querySelector("#price").innerHTML;

    setCustomCheckout({...customCheckout, size: 750, price: clickedPrice})
}

const handleCustomRoomTemp = (e)=>{
  setRoomTemp(true);
    setChilledTemp(false);
    const roomTempBtn = e.currentTarget;
    let clickedTemp = roomTempBtn.querySelector('#roomtemp').innerHTML;

    setCustomCheckout({...customCheckout, temperature: clickedTemp})
}

const handleCustomChilledTemp = (e)=>{
  setRoomTemp(false);
  setChilledTemp(true);
  const chillTempBtn = e.currentTarget;
  let clickedTemp = chillTempBtn.querySelector('#chilledtemp').innerHTML;

  setCustomCheckout({...customCheckout, temperature: clickedTemp})
}

const handleCustomComment = (e)=>{
  setCustomCheckout({...customCheckout, comments: e.target.value})
}

const handleCustomReduce = ()=>{
  setCustomBottlesNum(customBottlesNum - 1);
}

const handleCustomIncrease = ()=>{
  setCustomBottlesNum(customBottlesNum + 1);
}

const handleCustomExit = ()=>{
  setCustomIsClicked(false);
  setDoneBG(false);
  setHalfMl(false);
  setThreeQuarterMl(false);
  setLitre(false);
  setRoomTemp(false);
  setChilledTemp(false);
  setCustomBottlesNum(1);
  customCommentClear();
}

const customCommentClear = () => {
  customComment.current.value = '';
}

const handleCustomOrder = (e)=>{
  e.preventDefault();
  setDoneBG(true);
   dispatch({type: "edit-smoothieOrders", payload: customCheckout});
   setTimeout(() => {
   setCustomIngredients([]);
   setCustomIsClicked(false)
   setDoneBG(false);
   setHalfMl(false);
   setThreeQuarterMl(false);
   setLitre(false);
   setRoomTemp(false);
   setChilledTemp(false);
   setCustomBottlesNum(1);
   customCommentClear();
   }, 1000);
   
   let array = []
   const allCustom = document.querySelectorAll(".word");
   array = [...allCustom];
   
   
   const selectedCustom = customIngredients.map((fruit)=>{
     const selectedItem = array.filter((item)=>{
        return item.innerHTML === fruit;
     });

     return [...selectedItem];
   });


   selectedCustom.forEach((item)=>{
      const div = item[0].parentElement;
      div.style.backgroundColor = "white";
   });

}



    return(
        <>
        <div className="custom-div">
        <div className="fruits-div">
        <h2>Build Your Own Smoothie</h2>
         <p className="fruits-heading">Pick your fruits</p>
         <div className="fruits-list">
          {state.fruits.map((item)=>{
            return   <div className="fruit-item" style={{backgroundColor: "white"}} onClick={handleCustom}>
            <p className="word">{item}</p>
          </div>
          })}
          
         </div>
        </div>  
         <div className="veggies-div">
         <p className="fruits-heading">Kick up the nutrition</p>
          <div className="fruits-list">
          {state.veggies.map((item)=>{
            return   <div className="fruit-item" style={{backgroundColor: "white"}} onClick={handleCustom}>
            <p className="word">{item}</p>
          </div>
          })}
          </div>
         </div>
         <div className="base-div">
         <p className="fruits-heading">Add a base</p>
          <div className="fruits-list">
          {state.bases.map((item)=>{
            return   <div className="fruit-item" style={{backgroundColor: "white"}} onClick={handleCustom}>
            <p className="word">{item}</p>
          </div>
          })}
          </div>
         </div>
         <div className="addins-div">
         <p className="fruits-heading">Throw some add ins</p>
          <div className="fruits-list">
          {state.addins.map((item)=>{
            return   <div className="fruit-item" style={{backgroundColor: "white"}} onClick={handleCustom}>
            <p className="word">{item}</p>
          </div>
          })}
          </div>
         </div>

         <button className="checkout" onClick={handleCheckout}>CHECKOUT</button>
        </div>


        <div id="custom-info" style={{display :`${customIsClicked ? `block` : `none`}`}}>
           <div className="custom-info">
           <CancelIcon fontSize="large" className="cancelIcon" onClick={handleCustomExit}/>
           <h1>{customIngredients?.[0]} SMOOTHIE</h1>
            <div className="custom-info-1">
              <div className="custom-content">
                {customIngredients?.map((item) => {
                  return <p>{item}</p>
                })}
                
              </div>
        <div className="custom-info-2">
        <div className="custom-pricing">
        <div style={{backgroundColor: halfMl ? "#CDCDCD" : "#15ff00"}} onClick={handleHalf}>
          <h4><span id="size">500</span>ml</h4>
          <p>Ksh <span id="price">250.00</span></p>
        </div>
        <div style={{backgroundColor: threeQuarterMl ? "#CDCDCD" : "#15ff00"}} onClick={handleThreeQuarter}>
          <h4><span id="size">750</span>ml</h4>
          <p>Ksh <span id="price">350.00</span></p>
        </div>
        <div style={{backgroundColor: litre ? "#CDCDCD" : "#15ff00"}} onClick={handleLitre}>
          <h4><span id="size">1000</span>ml</h4>
          <p>Ksh <span id="price">450.00</span></p>
        </div>
        
       </div>
       <div className="custom-temperature">
      
      <div style={{backgroundColor: roomTemp ? "#CDCDCD" : "#ffff00"}} onClick={handleCustomRoomTemp}>
      <ThermostatIcon  fontSize="large"/>
       <p id="roomtemp">Room Temperature</p>
      </div>
      <div style={{backgroundColor: chilledTemp ? "#CDCDCD" : "#ffff00"}} onClick={handleCustomChilledTemp}>
       <AcUnitIcon  fontSize="large"/>
       <p id="chilledtemp">Chilled</p>
      </div>
    </div>
    <div className="custom-comment">
      <input type="text" name="" id="comment" placeholder="Any instructions or comments?" onChange={handleCustomComment} ref={customComment}/>
     </div>              
     <div className="custom-quantity-form" >
      <div>
         <span onClick={handleCustomReduce}>-</span>
         <span>{customBottlesNum}</span>
         <span onClick={handleCustomIncrease}>+</span>
      </div>
     <button type="submit" style={{backgroundColor: doneBG ? "#CDCDCD" : "#ff0062"}} onClick={handleCustomOrder}>{doneBG ? "DONE!!" : "CHECKOUT"}</button>
      </div> 
      <div className="custom-exit" onClick={handleCustomExit}>
         <p>EXIT</p>
     </div>           
      </div>
      </div>
      </div>

      </div>
    </>
    )
}

export default Custom; 
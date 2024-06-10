import React, {useEffect, useRef, useState} from "react";
import "./item.css";
import {CountContext} from "../../context/context"
import { useContext } from 'react';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CancelIcon from '@mui/icons-material/Cancel';


function Item(props){
   const {state, dispatch} = useContext(CountContext);
   const [clickedItem, setClickedItem] = useState ({});
   const [isClicked, setIsClicked] = useState(false);
   const [bottlesNum, setBottlesNum] = useState (1);
   const [checkoutInfo, setCheckoutInfo] = useState({id: props.id, color : props.color, font: props.font, name: props.name, ingredients: props.ingredients, size: 0, price: 0, bottles: 0, temperature: '', comments: ''});
   const [halfMl, setHalfMl] = useState(false);
   const [threeQuarterMl, setThreeQuarterMl] = useState(false);
   const [litre, setLitre] = useState (false);
   const [roomTemp, setRoomTemp] = useState (false);
   const [chilledTemp, setChilledTemp] = useState (false);
   const [doneBG, setDoneBG] = useState(false);
   const comment = useRef();

   useEffect(()=>{
    setCheckoutInfo({...checkoutInfo, bottles: bottlesNum})

    

   }, [bottlesNum])
  
   
  const handleClick = (e)=>{
    
    let currentItem = e.currentTarget;
    let title = currentItem.querySelector("#title").innerHTML;
    let type = currentItem.querySelector("#invisible-type").innerHTML;
    let currentItemObj = state.all.find((item)=>{
      return item.name === title && item.type === type
    });
  
    setClickedItem({...currentItemObj});
    setIsClicked(true);

  }
  
  const handle500 = (e)=>{
    setHalfMl(true);
    setThreeQuarterMl(false);
    setLitre(false);
    const clickedQuantity = e.currentTarget;
    let clickedPrice = clickedQuantity.querySelector("#price").innerHTML;
    
    setCheckoutInfo({...checkoutInfo, size: 500, price: clickedPrice})
  }

  const handle750 = (e)=>{
    setHalfMl(false);
    setThreeQuarterMl(true);
    setLitre(false);
    const clickedQuantity = e.currentTarget;
    let clickedPrice = clickedQuantity.querySelector("#price").innerHTML;
    
    setCheckoutInfo({...checkoutInfo, size: 750, price: clickedPrice})
  }

  const handle1000 = (e)=>{
    setHalfMl(false);
    setThreeQuarterMl(false);
    setLitre(true);
    const clickedQuantity = e.currentTarget;
    let clickedPrice = clickedQuantity.querySelector("#price").innerHTML;
    
    setCheckoutInfo({...checkoutInfo, size: 1000, price: clickedPrice})
  }

  const handleRoomTemp = (e) => {
    setRoomTemp(true);
    setChilledTemp(false);
    const roomTempBtn = e.currentTarget;
    let clickedTemp = roomTempBtn.querySelector('#roomtemp').innerHTML;
    
    setCheckoutInfo({...checkoutInfo, temperature: clickedTemp});
  }

  const handleChilled = (e) => {
    setRoomTemp(false);
    setChilledTemp(true);
    const chilledTempBtn = e.currentTarget;
    let clickedTemp = chilledTempBtn.querySelector('#chilledtemp').innerHTML;
    
    setCheckoutInfo({...checkoutInfo, temperature: clickedTemp});
  }

  const handleComment= (e) => {
    setCheckoutInfo({...checkoutInfo, comments: e.target.value});
  }
  
 const commentClear = () => {
    comment.current.value = '';
 }

  const handleReduce = ()=>{
    setBottlesNum(bottlesNum - 1);
  }
  const handleIncrease = ()=>{
    setBottlesNum(bottlesNum + 1);

  }

  const handleOrderCount = (e) => {
    e.preventDefault();
    setDoneBG(true);
     dispatch({type: "edit-smoothieOrders", payload: checkoutInfo});
     e.currentTarget.innerHTML = "DONE!!";
     setTimeout(() => {
     setIsClicked(false)
     setDoneBG(false);
     setHalfMl(false);
     setThreeQuarterMl(false);
     setLitre(false);
     setRoomTemp(false);
     setChilledTemp(false);
     setBottlesNum(1);
     commentClear();
     }, 500);
   
}


  const handleExit = () => {
    setIsClicked(false);
    setDoneBG(false);
     setHalfMl(false);
     setThreeQuarterMl(false);
     setLitre(false);
     setRoomTemp(false);
     setChilledTemp(false);
     setBottlesNum(1)
     commentClear();
  }

   return (
    <>
    <div className="item" onClick={handleClick}>
          <h3 id="title" style={{color: `${props.color}`, fontFamily: `${props.font}`}}>{props.name}</h3>
          <p id="invisible-type">{props.type}</p>
          <div className="item-list">
          {props.ingredients.map((item)=>{
            return <p>{item}</p>
          })}
          </div>

    </div>
    <div id="item-container" style={{display :`${isClicked ? `block` : `none`}`}}>
    <CancelIcon fontSize="large" className="cancelIcon" onClick={handleExit}/>
     <div className="item-info" >
     
     <h1 style={{color: `${clickedItem.color}`, fontFamily: `${clickedItem.font}`}}>{clickedItem.name}</h1>
     <div className="item-info-1">

     <div className="content">
         <p>{clickedItem.description}</p>
     </div>
     <div className="item-info-2">
     <div className="pricing">
     <div style={{backgroundColor: halfMl ? "#CDCDCD" : `${clickedItem.color}`}} onClick={handle500}>
          <h4><span id="size">500</span>ml</h4>
          <p>Ksh <span id="price">{clickedItem.half_litre}</span></p>
      </div>
      <div style={{backgroundColor: threeQuarterMl ? "#CDCDCD" : `${clickedItem.color}`}} onClick={handle750}>
          <h4><span id="size">750</span>ml</h4>
          <p>Ksh <span id="price">{clickedItem.three_quarter}</span></p>
      </div>
      <div style={{backgroundColor: litre ? "#CDCDCD" : `${clickedItem.color}`}} onClick={handle1000}>
          <h4><span id="size">1000</span>ml</h4>
          <p>Ksh <span id="price">{clickedItem.one_litre}</span></p>
      </div>
        
     </div>

     <div className="temperature">
      
       <div style={{backgroundColor: roomTemp ? "#CDCDCD" : `${clickedItem.color}`}} onClick={handleRoomTemp}>
       <ThermostatIcon  fontSize="large"/>
        <p id="roomtemp">Room Temperature</p>
       </div>
       <div style={{backgroundColor: chilledTemp ? "#CDCDCD" : `${clickedItem.color}`}} onClick={handleChilled}>
        <AcUnitIcon  fontSize="large"/>
        <p id="chilledtemp">Chilled</p>
       </div>
     </div>

     <div className="comment">
      <input style={{border: `2px solid ${clickedItem.color}`}} type="text" name="" id="comment" placeholder="Any instructions or comments?" onChange={handleComment} ref={comment}/>
     </div>

      <div className="quantity-form" >
      <div>
         <span onClick={handleReduce}>-</span>
         <span>{bottlesNum}</span>
         <span onClick={handleIncrease}>+</span>
      </div>
     <button type="submit" style={{backgroundColor: doneBG ? "#CDCDCD" : `${clickedItem.color}`}} onClick={handleOrderCount}>{doneBG ? "DONE!!" : "ADD TO CART"}</button>
      </div>
     
     
     <div className="exit" style={{backgroundColor: `${clickedItem.color}`}} onClick={handleExit}>
         <p>EXIT</p>
     </div>
     </div>
     </div>
    </div>
 </div>
 
 </>      
   )
};

export default Item;
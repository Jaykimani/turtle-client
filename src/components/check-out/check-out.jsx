import React, {useState, useEffect, useRef } from "react";
import "./check-out.css";
import {CountContext} from "../../context/context"
import { useContext } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import {axiosInstance} from "../../config";

function CheckOut(){
   const {state, dispatch} = useContext(CountContext);
   const [totalPrice, setTotalPrice] = useState(0);
   const [date, setDate] = useState("");
   const [time, setTime] = useState("");
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [delivery, setDelivery] = useState("");

   const username = useRef();
   const phoneNumber = useRef();
   const location = useRef();
   
   useEffect(()=>{
    
    let totalPrice = state.smoothieOrders.reduce((acc, item)=> acc + (item.price* item.bottles) , 0)
    setTotalPrice(totalPrice);

    const getDayTime = () =>{
      const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      
      const now = new Date();
      let date = now.getDate();
      let day = now.getDay();
      let month= now.getMonth();
      let year = now.getFullYear();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();
  
      let todayDate = days[day] + ", " + date + " " + months[month] + " " + year;
      let todayTime = hour + ":" + minute + ":" + second;
      
      setDate(todayDate);
      setTime(todayTime);
  
     }

     getDayTime();
   }, [state]);
 
   const handleName = (e) => {
    setName(e.target.value);
   }
   const handlePhone = (e) => {
    setPhone(e.target.value);
   }
   const handleLocation = (e) => {
    setDelivery(e.target.value);
   }

   const handleClear = ()=> {
    dispatch({type: "close-checkout"});
   }
   
   const handleDeleteOrder = (e)=> {
    let clickedOrder = e.currentTarget.parentElement;
    let clickedName = clickedOrder.querySelector("#nameId").innerHTML;
    
    let newOrderList = state.smoothieOrders.filter(item => {
        return item.name !== clickedName
    });

    dispatch({type : "edit-checkout", payload : newOrderList});
   }

   
   const handlePlaceOrder = async() => {

     const fullOrderObj = {
          name: name,
          phone_no: phone,
          location: delivery,
          order_types: state.orderType,
          smoothie_orders: state.smoothieOrders,
          total_cost: totalPrice,
          order_date: date,
          order_time: time
     };
   
     
     try {
      await axiosInstance.post("/orders", fullOrderObj);
     } catch (error) {
      console.log(error);
     }
     
   }

   const handleClearAll = () => {
    dispatch({type : "clear-checkout"})
    username.current.value = '';
    phoneNumber.current.value = '';
    location.current.value = '';
    setName('');
    setPhone('');
    setDelivery('');
   }



    return (
        <div className="check-out" style={{display: state.openCheckout ? "block" : "none"}}>
          <div className="checkout-header">
          <h2>CHECKOUT</h2>
          <ClearIcon fontSize="large" onClick={handleClear}/>
          </div>
        
         
        {state.smoothieOrders.map((item)=>{
          return (
            <div className="order-item" id={item.id}>
            <div className="order-info">
              <h4 style={{color: `${item.color}`, fontFamily: `${item.font}`}} id="nameId">{item.name}</h4>
              <div className="order-detail">
                <div className="detail">
                    <p>SIZE</p>
                    <p>{item.size}ml</p>
                </div>
                <span></span>
                <div className="detail">
                    <p>BOTTLES</p>
                    <p>{item.bottles}</p>
                </div>
                <span></span>
                <div className="detail">
                    <p>PRICE</p>
                    <p>{item.price}</p>
                </div>
              </div>
            </div>
            <div className="price">
              <p>Ksh {item.price * item.bottles}.00/=</p>
            </div>
            <div className="delete" onClick={handleDeleteOrder}>
               <p>-</p>
            </div>
         </div>
          )
        })}
       
        
         <div className="total-price">
           <p>TOTAL: {totalPrice}.00/=</p>
         </div>
         <div className="person-info">
          <input type="text" name="" id="" placeholder="Name" ref={username} onChange={handleName}/>
          <input type="text" name="" id="" placeholder="Phone number" ref={phoneNumber} onChange={handlePhone}/>
          <input type="text" name="" id="" placeholder="Delivery location" ref={location} onChange={handleLocation}/>

         </div>
         <button className="place-order" onClick={handlePlaceOrder}>PLACE ORDER</button>
         <button className="clear-all" onClick={handleClearAll}>CLEAR ALL</button>
        </div>
    )
}

export default CheckOut;
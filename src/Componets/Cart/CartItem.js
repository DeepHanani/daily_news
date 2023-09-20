import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CartItem.css'


export default function CartItem(){

   

   const cartItem =  useSelector(y=>y.product.cart);

   console.log(cartItem ,"hhhhhh");

   const dispatch = useDispatch();

  


   

  return (
    <>
    <div className='privat'>
    <div className='cartContainer'>
    {
        cartItem.map((value)=>{

            return(
                <div className='miniContainer'>
                <div className='cartImgDiv'>
                <img src={value.item.image}/>
                </div>
                <div className='contantDiv'>

                <div className='titleDiv'>
                <h3>{value.item.title}</h3>
                </div>
                <div className='btnContainer'>
                <button className='decBtn'>-</button>
                <span>{value.count}</span>
                <button  className='plusBtn'>+</button>
                <button className='removeBtn' >Remove</button>
                
                </div>
                <div>
                <h3>Price : {value.count * value.item.price} Rs</h3>
                </div>
      
                </div>
                </div>
                
            )

        })
    }

    </div>

   
    </div>
   
    
    </>
  )
}

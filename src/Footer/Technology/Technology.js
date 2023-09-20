import React, { useEffect } from 'react'
import { techno } from '../../Componets/action/ProductAction';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './Technology.css'

export default function Technology(){

    const tech = useSelector(y=>y.product.technologie)

    console.log(tech,"jjjjj");

    const dispatch = useDispatch();

    useEffect(()=>{

        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=71c888fd23b84806b9185a13fd651512",{
        method: "GET",
    })
      .then((response) => {
    
        dispatch(techno(response))
        console.log(response,"deep");
      })
    },[]);
    
  return (
  <>
           { tech.data?.articles.map((value)=>{
            return(
           <div>
           </div>
            )
         })     
}

  </>
  )
}

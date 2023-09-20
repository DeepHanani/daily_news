import React, { useEffect, useState } from 'react'
import './Services.css'
import { useDispatch, useSelector } from 'react-redux';
import { bussines } from '../action/ProductAction';
import axios from 'axios';
import Header from '../Header/Header';
import Background from '../Background/Background';
import { useCollapse } from 'react-collapsed'

export default function ServicesPage(){

  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  const bus = useSelector(y=>y.product);
  console.log(bus,"darsh2")
    
  const dispatch =  useDispatch();

  useEffect(()=>{ 

    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=71c888fd23b84806b9185a13fd651512",{
    method: "GET",
})
  .then((response) => {

    dispatch(bussines(response))
    console.log(response,"darsh1");
  })
   
 },[])
  return (
    <>
    <Background/>
    <Header/>
    <div className='protect'>

    
  
      <div className='main'>
  
      {
        bus.bussness?.data?.articles?.map((value)=>{
              return(
                  <div className="post-1"  >
                  <img src={value.urlToImage} alt="" />
                  <div className="part-1">
                    <div className="desc">
                      <p className="name">{value.title.slice(0,20)}<span {...getCollapseProps()}>{value.title.slice(20,60)}</span>  <a
                      {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                      })}
                    >
                      {isExpanded ? 'readless' : 'readmore....'}
                    </a></p>
                    </div>
  
                  </div>
                  <div className="part-2">
                  <div className="pricies">
                      
                    </div>
                    <div className="categorys">
                      {/* <p className="category">{value.category}</p> */}
                      {/* <button className='addtocartBtn'>Add to cart</button> */}
                    </div>
                    
                  </div>
             
                  <div className='last'>
                  
  
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

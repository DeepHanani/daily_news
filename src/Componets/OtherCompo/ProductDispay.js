import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {  getData } from '../action/ProductAction';
import axios from 'axios'
import './Products.css'
import Header from '../Header/Header';
import Background from '../Background/Background';
import Footer from '../../Footer/Footer';
import Technology from '../../Footer/Technology/Technology';
import { useCollapse } from 'react-collapsed'

export default function ProductDispay(){  

  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })


    const prodData = useSelector(y=>y.product);
    

    console.log(prodData,"lllll")

   const dispatch =  useDispatch();

     useEffect(()=>{

        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=71c888fd23b84806b9185a13fd651512",{
        method: "GET",
    })
      .then((response)=>{

        dispatch(getData(response))
        console.log(response.data,"kkk");
      })

     },[])
 
   return (
    <>

    <Background/>
    <Header/>
 

  <div className='protect'>



    <div className='main'>

    {
        prodData.data?.data?.articles?.map((value)=>{
            return(
                <div className="post-1" >
                <img src={value.urlToImage} alt="" />
             
                <div className="part-1">
                  <div className="desc">
                    <p className="name">{value.title.slice(0,40)}<span {...getCollapseProps()}>{value.title.slice(40,60)}</span>  <a
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

    <div className='videoTag'>
    <iframe width="1900" height="615" src="https://www.youtube.com/embed/Nq2wYlWFucg?si=RahtXC-Z-ZuAvhNL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <h1>Live news : -</h1>
    </div>
   
  
<Technology/>
    <Footer/>

    </>
  )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { movies } from '../action/ProductAction';
import Background from '../Background/Background';
import Header from '../Header/Header';
import './MoviePage.css';
import { useState } from 'react';
import { useCollapse } from 'react-collapsed'

export default function MoviePage() {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  
    const movieNews = useSelector(y=>y.product.movies);
    console.log(movieNews,"ffffff")

    const dispatch = useDispatch();

    useEffect(()=>{

        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=71c888fd23b84806b9185a13fd651512",{
        method: "GET",
    })
      .then((response) => {
    
        dispatch(movies(response))
        console.log(response,"deep");
      })
    
     },[])



  return (
    <>
    <Background/>
    <Header/>
    <div className='protect'>
    <div className='main'>

    {
        movieNews.data?.articles?.map((value)=>{
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
                    </a>
                   </p>
                      
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

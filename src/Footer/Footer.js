import React from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom'
import { FcSportsMode } from 'react-icons/fc'

export default function Footer() {
  return (
    <div class="footer">
      <div class="div-1">
        <div class="imp">
          <div class="brand">
           <FcSportsMode className='icons'/>
          </div>
          <div class="cakes">
            <p class="cake">Zee News</p>
           {/* <p class="uix">UIX designer</p> */}
          </div>
        </div>
        <p class="advise">
        News is something somebody doesn't want printed; all else is advertising
        </p>
      </div>
      <div class="div-2">
        <div class="home">
          <p>Quick Links</p>
          <ul>
            <li><Link  to = "/" className='homeLink'>General</Link></li>
            <li><Link  to = "/about" className='homeLink'>Sports</Link></li>
            <li><Link  to = "/services" className='homeLink' >Business</Link></li>
            <li><Link to= "/movies" className='homeLink'>Movies</Link></li>
            <li><Link to= "/contact" className='homeLink'>Contact Us</Link></li>
          </ul>
        </div>
        <div class="quality">
          <p>opning</p>
          <ul>
            <li>Monday</li>
            <li>thuesday</li>
            <li>Wenseday</li>
            <li>thasday</li>
            <li>Friday</li>
            <li>Sturday</li>
            <li>Sunday</li>
          </ul>
        </div>
      </div>
      <div class="div-3">
        <p class="contactus">Contact Us</p>
        <p class="adress">709 , Dvij Infotech Ahmedabad</p>
        <p class="number">NO-9824391440</p>
      </div>
    </div>
  )
}
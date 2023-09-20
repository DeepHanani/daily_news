import { useDispatch, useSelector } from 'react-redux';
import './Header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FcSportsMode } from "react-icons/fc";

export default function Header() {

  const prod = useSelector(y=>y.product);

  // const navigate =useNavigate()


  // const addItem = ()=>{
  //      navigate("/cartitem")
  // }



  return (

    <div className="header">
      <div className="logo">
        
      </div>

      <div className="navbar">
        <ul className='menu'>
          <li><NavLink to = "/" className='contact'>General</NavLink></li>
          <li><NavLink to = "/about" className='contact'>Sports</NavLink></li>
          <li><NavLink to="/services" className='contact'>Business </NavLink></li>
          <li><NavLink to= "/movies" className='contact'>Movies</NavLink></li>
          <li><NavLink to="/contact" className='contact'>Contact</NavLink></li>
          <div>
          
          </div>
          
        </ul>
      </div>
    </div>
  )
}
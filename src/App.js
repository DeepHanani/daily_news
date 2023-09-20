import { Route, Routes } from "react-router-dom";
import ProductDispay from "./Componets/OtherCompo/ProductDispay";
import ContactPage from "./Componets/contactPage/ContactPage";
import AboutPage from "./Componets/aboutPage/AboutPage";
import ServicesPage from "./Componets/services/ServicesPage";
import CartItem from "./Componets/Cart/CartItem";
import Registration from "./Componets/Registration/Registration";
import Login from "./Componets/Login/Login";
import MoviePage from "./Componets/Movie/MoviePage";
import Technology from "./Footer/Technology/Technology";



 function App() {
  return (
<div>
 
<Routes>

<Route path="/" element = {<ProductDispay/>}></Route>
<Route path="/about" element = {<AboutPage/>}></Route>
<Route path="/contact" element = {<ContactPage/>}></Route>
<Route path="/services" element = {<ServicesPage/>}></Route>
<Route path="/cartitem" element = {<CartItem/>}></Route>
<Route path="/movies" element = {<MoviePage/>}></Route>

</Routes>


</div> 
  );
}

export default App;

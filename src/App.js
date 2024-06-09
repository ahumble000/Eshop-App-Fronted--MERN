import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


//IMPORTING COMPONENTS
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


//IMPORTING PAGES
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import SignIn from './Pages/SignIn';
import Product from './Pages/Product';

//IMPORTING BANNER IMAGES
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';


function App() {
  return (  
      <Router>  
              
          <Navbar/>
   
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory banner = {men_banner} category="men"/>}/>
            <Route path='/womens' element={<ShopCategory banner = {women_banner} category="women"/>}/>
            <Route path='/kids' element={<ShopCategory banner = {kid_banner} category="children"/>}/>          
            <Route path='/cart' element={<Cart/>}/>          
            <Route path='/signin' element={<SignIn/>}/>          
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>          
            </Route>
          </Routes>

          <Footer/>

      </Router>
    );
}

export default App;
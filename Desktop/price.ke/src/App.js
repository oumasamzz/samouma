import  {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './/components/navbar/NavBar';
import Intro from './/components/intro/Intro';
import Info from './/components/info/Info';
import Featured from './/components/featured/Featured';
import Testimonials from './/components/testimonials/Testimonials';
import Footer from './/components/footer/Footer';
import SideBar from './components/sidebar/SideBar';
import Categories from './/components/categories/Categories';

function App() {
  return (
    <div className="App">
     <NavBar/>
    <Intro/>
    <Categories />
  
     <Info/>
     <Featured/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}

export default App;

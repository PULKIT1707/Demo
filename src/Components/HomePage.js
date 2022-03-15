import React from 'react'
import Login from './Login';
import Footer from './Footer';
import Reward from './Reward';
import Work from './Work';
import Banner from './Banner';
import ProductsPanel from './ProductsPanel';
import Navbar from './Navbar';
import Menu from './Menu';
import Deals from './Deals';
import offerBnner from "../images/Welcome_Banner.png"

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Menu/>
      <Banner/>
      <Reward/>
      <Work/>
      <Deals/>
      <ProductsPanel type="display" title="Explore Categories"/>
      <div className="bannerContainer">
        <img src={offerBnner} alt="Snow" style={{"width":"100%"}} />
        <button className="btn">Button</button>
      </div>
      <ProductsPanel type="fav" title="Explore Products from these Brands"/>
      <ProductsPanel type="fav" title="Explore Brands"/>
      <Footer/>
    </>
  )
}

export default HomePage

import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'

import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import './home.css'

const Home = () => {
  return (
    <div>
    <Navbar />
    <Header />
    <div class="homeContainer">
      <Featured />
      <h1 class="homeTitle">Browse by property type</h1> 
      <PropertyList />
      <h1 class="homeTitle">Homes guests love</h1> 
      <FeaturedProperties />
      <MailList />
      <Footer />
    </div>
    </div>
    
  )
}

export default Home
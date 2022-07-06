import React from 'react'
import About from '../components/About'
import CardsRow from '../components/CardsRow'
import Layout from '../components/Layout'
import Shots from '../components/Shots'
import Video from '../components/Video'
import Info from '../components/Info'
import products from './dummyData'
const Home = () => {
 
  return (
    <div>
        <Layout/>
        <CardsRow title="Products" products={products.slice(0,4)}/>
        <About/>
        <Video/>
        <Info />
        <Shots/>
    </div>
  )
}

export default Home
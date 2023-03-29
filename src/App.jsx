import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componets/Header/Header'
import SideCard from './componets/SideCard/SideCard'
import Card from './componets/Card/Card'
import RightSiteCard from './componets/RightSiteCard/RightSiteCard'

function App() {

  return (
    <div className="App">
      <Header></Header>
      {/* <SideCard></SideCard> */}
      <div className="flex lg:flex-col-2 lg:mx-10">
        <div className="bg-orange-300 w-[60%]" >
          <Card></Card>
        </div>
        <div className="bg-lime-200 w-[40%] h-96 ">
          <RightSiteCard></RightSiteCard>
        </div>
      </div>
    </div>
  )
}

export default App

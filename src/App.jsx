import React from 'react'
import Navbar from "./components/navbar/index"
import Homepage from "./components/homepage/index"

const App = () => {
  return (
    <div className='bg-[#FEF9F6]'>
      <Navbar/>
      <Homepage/>
    </div>
  )
}

export default App
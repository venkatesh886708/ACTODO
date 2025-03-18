import { useState } from 'react'

import './App.css'
import Header from './Header'
import Card from './Card'
import TodoContainer from './TodoContainer'

function App() {
  

  
  return (
 <div className='bg-black p-16 min-w-screen '>
    <div className='bg-white p-10 rounded-md'>
      
      <Header/>
      <div className='flex justify-between gap-7 my-5 flex-wrap'>
      <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chenai"}/>
       <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:03:34"}/>
       <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
       </div>
       <TodoContainer/>
       




    </div>
    </div>   
  )
}

export default App

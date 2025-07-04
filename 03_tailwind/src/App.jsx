import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={ 
    name : "meet",
    age:20
  }
  let newArr=[1,3,5,8]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'
      > Vite with Tailwind</h1>
     <Card username="meet"  myArr={newArr}/>  
     <Card username="vedant"  myArr={newArr}/>  
     <Card username="meet"  myArr={newArr}/>  
     <Card/>
    </>
  )
}

export default App
// username="meet" this is a prop short of properties
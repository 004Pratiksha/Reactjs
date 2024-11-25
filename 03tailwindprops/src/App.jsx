import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "prii",
    age: 21
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md' >Tailwind</h1>
      <card username="prii" myArr={newArr} />
      <card />
    </>
  )
}

export default App

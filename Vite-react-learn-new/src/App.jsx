
import './App.css'
import ProfileCard from './ProfileCard'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);


  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  
    <ProfileCard name="Vaithee" />
     <h1>Hello Vite + React!</h1>
    </>
  )
}

export default App

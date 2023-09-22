import { useState } from 'react'
import './App.css'
import MyHeadComponent from './assets/components/MyHeadComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyHeadComponent/>
    </>
  )
}

export default App

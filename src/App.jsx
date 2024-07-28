import { useState } from 'react'
import './App.css'
import NavigationBar from '../components/NavigationBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar />

      <h1>Pankaj ki maa ka ghumta hua BHOSDA</h1>
    </>
  )
}

export default App

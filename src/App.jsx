import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  
  function handleChange(e){
   setName(e.target.value);
  }
  function handleClick(){
    // console.log(name);
    setText(name);
  }
  return (
    <>
  <input placeholder='Input Name' onChange={handleChange} type="text" name="" id="" />
    <br />
    <button>Click{handleClick}</button>
    <p>Hello: {name}</p>
    </>
  )
}

export default App

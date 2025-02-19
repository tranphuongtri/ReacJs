import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [soA,setA] = useState("");
  const [soB,setB] = useState("");
  const [result,setResult] = useState(null);

  function handleChangeA(){
    setA(e.target.value)
  }
  function handleChangeB(){
    setB(e.target.value)
  }
  function handleClickAdd(){
    setResult(parseInt(a)+parseInt(b));
  }
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
    <input placeholder='Input A' onChange={handleChangeA} type="text" name="" id="" />
    <br />
    <input placeholder='Input B' onChange={handleChangeB} type="text" name="" id="" />
    <br />
    <button>Sum{handleClickAdd}</button>
    <p>{result}</p>
    </>
  )
}

export default App

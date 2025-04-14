import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Test'
import Timer from './components/useEffectTime'
import TodoList from './components/ToDoList'
function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [soA, setA] = useState("");
  const [soB, setB] = useState("");
  const [result, setResult] = useState(null);

  function handleChangeA(e) {
    setA(e.target.value)
  }
  function handleChangeB(e) {
    setB(e.target.value)
  }
  function handleClickAdd() {
    setResult(parseInt(soA) + parseInt(soB));
  }
  function handleClickSubtraction() {
    setResult(parseInt(soA) - parseInt(soB));
  }
  function handleClickMul() {
    setResult(parseInt(soA) * parseInt(soB));
  }
  function handleClickDivision() {
    setResult(parseInt(soA) / parseInt(soB));
  }
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleClick() {
    // console.log(name);
    setText(name);
  }
  return (
    <>
      <Hello></Hello>
      <Timer></Timer>
      <input placeholder='Input Name' onChange={handleChange} type="text" name="" id="" />
      <br />
      <button onClick={handleClick}>Click</button>
      <p></p>
      <p>Click: {text}</p>
      <p>Onchange: {name}</p>
      <input placeholder='Input A' onChange={handleChangeA} type="text" name="" id="" />
      <br />
      <input placeholder='Input B' onChange={handleChangeB} type="text" name="" id="" />
      <br />
      <button onClick={handleClickAdd}>Sum</button>
      <button onClick={handleClickSubtraction}>Subtraction</button>
      <button onClick={handleClickMul}>Mul</button>
      <button onClick={handleClickDivision}>Division</button>
      <p>{result}</p>
      <TodoList></TodoList>
    </>
  )
}

export default App
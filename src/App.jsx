import { useState } from 'react'
import './App.css'
import Button from './components/Button.jsx'
import InputComponent from "./components/Input.jsx";

function App() {
    const [text, setText] = useState('')
  return (
    <>
        <div>
            <InputComponent value={text} onChange={setText}/>
            <p>Text from input:{text}</p>
        </div>
      <div>
        <Button start = {1} textButton ='number is'></Button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.jsx'
import InputComponent from "./components/Input.jsx";

function App() {
  return (
    <>
        <div>
            <InputComponent/>
            <p className='inputText'>Text from input:</p>
        </div>
      <div>
        <Button start = {1} text ='number is'></Button>
      </div>
    </>
  )
}

export default App

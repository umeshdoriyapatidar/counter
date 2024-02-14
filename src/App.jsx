import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15
  const addValue = () => {
   if(counter == 20) {
    return alert(`You Reach the maximum value ${counter}`)
   }
    setCounter(counter + 1)
    // console.log("Clicked ", counter);
  }

  const removeValue = () => {
    if (counter == 0) {
      return alert("Sorry you Can't go down to 0")
    }
    setCounter(counter - 1)
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}> Add value </button>
     <br />
     <button onClick={removeValue}> Remove Value </button>
     <p>Limit the minimum Value can be 0 and You can Maximum upto 20</p>
    </>
  )
}

export default App

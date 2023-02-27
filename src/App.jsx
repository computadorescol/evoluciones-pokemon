import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(11)
console.log(count)
function increaseNumber(){
      setCount(count + 1)
      console.log(count)                
}
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React is carlos julio</h1>
      <div className="card">
        <button onClick={() => increaseNumber((count) => count + 1)}>
          count is     {count}<br/>
          la cuenta es {count}
        </button>
        <>
          Edit <code>src/App.jsx</code> and save to test HMR
          <h4>Bienvenido a React !</h4>
          <h4>Congratulations for  React !</h4>
          <h4>Iniciamos tutorial de React !</h4>
          <h4>Primer course </h4>
        </>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more 
      </p>
    </div>
  )
}

export default App

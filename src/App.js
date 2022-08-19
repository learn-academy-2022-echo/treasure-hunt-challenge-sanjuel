import React, { useState } from 'react'
import './App.css'
import Square from './components/Square'
const App = () => {

  const [board, setBoard] = useState(["?", "?", "?", "?", "?", "?", "?", "?", "?"]
  )
  
  const handleGamePlay = () => {
    
  }

  
    return(
      <>
        <h1>Treasure Hunt Game</h1>
       <div className = "boardgame">
        {board.map((value, index) => {
          return (
            <Square value={value} index = {index} />
            )
          })}
          </div>
      </>
    )
  }

export default App

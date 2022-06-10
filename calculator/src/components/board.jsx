import React from 'react'
import Button from './button'

function Board() {

  const buttonsData = [
    { color: "", dato: "/" },
    { color: "", dato: "1" },
    { color: "", dato: "2" },
    { color: "", dato: "3" },
    { color: "", dato: "DEL" },
    { color: "", dato: "X" },
    { color: "", dato: "4" },
    { color: "", dato: "5" },
    { color: "", dato: "6" },
    { color: "", dato: "C" },
    { color: "", dato: "-" },
    { color: "", dato: "7" },
    { color: "", dato: "8" },
    { color: "", dato: "9" },
    { color: "", dato: "=" },
    { color: "", dato: "+" },
    { color: "", dato: "CAL" },
    { color: "", dato: "0" },
    { color: "", dato: "." }
  ]


  return (
    <div>
      {buttonsData.map( (buttonData, index) => (
        <Button key={index} dato={buttonData.dato} />
      ) )}
      
    </div>
  )
}

export default Board
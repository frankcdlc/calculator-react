import styled from "@emotion/styled"
import React from 'react'
import Button from './button'

function Board() {

  const StyledBoard = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(5, 100px) ;
  grid-template-rows: repeat(4, 100px);
  `
  const cart = <i class="ri-check-line"></i>
  const calend = <i class="ri-calendar-event-fill"></i>
  const del = <i class="ri-delete-back-2-fill"></i>
  const divide = <i class="ri-divide-line"></i>

  const buttonsData = [
    { color: "gray", type: "operator", dato: divide },
    { color: "white", type: "number", dato: "1" },
    { color: "white", type: "number", dato: "2" },
    { color: "white", type: "number", dato: "3" },
    { color: "white", type: "", dato: del },
    { color: "gray", type: "operator", dato: "x" },
    { color: "white", type: "number", dato: "4" },
    { color: "white", type: "number", dato: "5" },
    { color: "white", type: "number", dato: "6" },
    { color: "white", type: "", dato: "c" },
    { color: "gray", type: "operator", dato: "-" },
    { color: "white", type: "number", dato: "7" },
    { color: "white", type: "number", dato: "8" },
    { color: "white", type: "number", dato: "9" },
    { color: "cyan", type: "spanTwo", dato: cart },
    { color: "gray", type: "operator", dato: "+" },
    { color: "white", type: "", dato: calend },
    { color: "white", type: "number", dato: "0" },
    { color: "white", type: "", dato: "." }
  ]


  return (
    <StyledBoard>
      {buttonsData.map( (buttonData, index) => (
        <Button 
        key={index} 
        dato={buttonData.dato} 
        type={buttonData.type}
        color={buttonData.color} />
      ) )}
    </StyledBoard>
  )
}

export default Board
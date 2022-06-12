import styled from "@emotion/styled"

import React from 'react'
import Button from "./button";
import Display from './display';
import FooterDate from './footerDate';
import Header from './header';

const Container = () => {
  const StyledContainer = styled.div({
    display: `grid`,
    // gridTemplateRows: `100px 100px 1fr 50px`,
    justifyContent: `center`,
    alignContent: `center`,
    marginBlock: `2rem auto`,
    gridTemplateColumns: `repeat(5, 100px)`,
    gridTemplateRows: `repeat(6, 100px) 50px`
  })

  const calc = <i className="ri-check-line"></i>
  const calend = <i className="ri-calendar-event-fill"></i>
  const del = <i className="ri-delete-back-2-fill"></i>
  const divide = <i className="ri-divide-line"></i>

  const buttonsData = [
    { color: "gray", type: "operant", dato: divide, value: "÷" },
    { color: "white", type: "number", dato: "1", value: "1" },
    { color: "white", type: "number", dato: "2", value: "2" },
    { color: "white", type: "number", dato: "3", value: "3" },
    { color: "white", type: "delete", dato: del, value: "del" },
    { color: "gray", type: "operant", dato: "x", value: "x" },
    { color: "white", type: "number", dato: "4", value: "4" },
    { color: "white", type: "number", dato: "5", value: "5" },
    { color: "white", type: "number", dato: "6", value: "6" },
    { color: "white", type: "clear", dato: "c", value: "c" },
    { color: "gray", type: "operant", dato: "-", value: "-" },
    { color: "white", type: "number", dato: "7", value: "7" },
    { color: "white", type: "number", dato: "8", value: "8" },
    { color: "white", type: "number", dato: "9", value: "9" },
    { color: "cyan", type: "spanTwo", dato: calc, value: "÷" },
    { color: "gray", type: "operant", dato: "+", value: "+" },
    { color: "white", type: "", dato: calend, value: "calend" },
    { color: "white", type: "number", dato: "0", value: "0" },
    { color: "white", type: "number", dato: ".", value: "." }
  ]
  
  const [currentNumber, setCurrentNumber] = React.useState("");
  const [operant, setOperant] = React.useState("");
  const [prevNumber, setPrevNumber] = React.useState("");
  return (
    <StyledContainer>
      <Header></Header>
      <Display></Display>
      <>
        {buttonsData.map( (buttonData, index) => (
          <Button
          key={index} 
          dato={buttonData.dato} 
          type={buttonData.type}
          color={buttonData.color}
          >
            {buttonData.dato} 
          </Button>
        ) )}
      </>
      <FooterDate/>
    </StyledContainer>
  )
}

export default Container;
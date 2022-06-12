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
  const divide = <i className="ri-divide-line" type={"operant"}></i>

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
    { color: "cyan", type: "spanTwo", dato: calc, value: "=" },
    { color: "gray", type: "operant", dato: "+", value: "+" },
    { color: "white", type: "", dato: calend, value: "calend" },
    { color: "white", type: "number", dato: "0", value: "0" },
    { color: "white", type: "number", dato: ".", value: "." }
  ]

  const [currentNumber, setCurrentNumber] = React.useState("0");
  const [operant, setOperant] = React.useState("");
  const [prevNumber, setPrevNumber] = React.useState("");

  
  function handleNumberClick(value) {
    setCurrentNumber(()=>{
      if(currentNumber==="0"){
        setCurrentNumber(value)
      }
      return currentNumber + value
    })
  }

  /**
   * to debug
   */
  // React.useEffect(()=>{
  //   console.clear()
  //   console.log(`currentNumber:${currentNumber}` )
  //   console.log(`prevNumber: ${prevNumber}`)
  //   console.log(`operant: ${operant}`)
  // },[currentNumber, prevNumber, operant])
  

  function handleClickOperant(value) {

    if (!operant) {
      setPrevNumber(currentNumber);
      setOperant(value);
      setCurrentNumber("");
    } else {
      setOperant(value)
    }

  }
  
  function handleBackSpace() {
    try {
      if(currentNumber.length===1 && !prevNumber){
        return setCurrentNumber("0")
      }

      if(prevNumber.length===1 && !currentNumber) {
        setPrevNumber("")
        return setCurrentNumber("0")
      }

      if(currentNumber) {
        return setCurrentNumber(currentNumber.slice(0, -1))
      }
      if(operant) {
        return setOperant(operant.slice(0,-1))
      }
      if(prevNumber) {
        return setPrevNumber(prevNumber.slice(0,-1))
      }
    } catch (error) {
      setCurrentNumber("0")
    }
  } 

  function handleCalculate() {

    switch (operant) {
      case "÷":
        setCurrentNumber(prevNumber / (currentNumber ? currentNumber : prevNumber ) );
        break;
      case "+":
        setCurrentNumber(+prevNumber + +(currentNumber ? currentNumber : prevNumber ));
        break;
      case "-":
        setCurrentNumber(prevNumber - (currentNumber ? currentNumber : prevNumber ));
        break;
      case "x":
        setCurrentNumber(prevNumber * (currentNumber ? currentNumber : prevNumber ));
        break;
      default:
    }
    setPrevNumber("")
    setOperant("")
  }

  function handleClear() {
    setCurrentNumber("0")
    setOperant("")
    setPrevNumber("")
  }

  /**
   * Los valores los paso a su modulo por el return
   */
  return (
    <StyledContainer>
      <Header></Header>
      <Display 
      currentNumber={currentNumber}
      operant={operant}
      prevNumber={prevNumber}
      />
      <>
        {buttonsData.map( (buttonData, index) => (
          <Button
          key={index} 
          dato={buttonData.dato} 
          type={buttonData.type}
          color={buttonData.color}
          onNumberClick={buttonData.type === "number" ? handleNumberClick : buttonData.type === "delete" ? handleBackSpace :  buttonData.type === "operant" ? handleClickOperant : buttonData.type === "spanTwo" ? handleCalculate : buttonData.type === "clear" ? handleClear : "" }
          value={buttonData.value}
          >
            {buttonData.dato===calc ? (prevNumber && operant ? "=" : buttonData.dato) : buttonData.dato }
          </Button>
        ) )}
      </>
      <FooterDate/>
    </StyledContainer>
  )
}

export default Container;
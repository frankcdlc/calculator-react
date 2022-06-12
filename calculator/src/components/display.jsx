import styled from "@emotion/styled"
import React from 'react'

function Display({currentNumber, operant, prevNumber}) {
  const StyledDisplay = styled.div({
    display: `flex`,
    gridColumn: `span 5`,
    border: `1px solid rgb(235, 231, 231)`,
    backgroundColor: `white`,
    fontSize: `2rem`,
    alignItems: `center`,
    justifyContent: `center`
  })
  
  return (
    <StyledDisplay>
      <div>$ {prevNumber} {operant} {currentNumber}</div>
    </StyledDisplay>
  )
}

export default Display
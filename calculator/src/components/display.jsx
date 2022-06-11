import styled from "@emotion/styled"
import React from 'react'

function Display() {
  const StyledDisplay = styled.div({
    gridColumn: `span 5`,
    border: `1px solid rgb(235, 231, 231)`,
    backgroundColor: `white`,
    textAlign: `center`,
    fontSize: `2rem`
  })
  
  return (
    <StyledDisplay>
      <div>10 + 12</div>
      <div>$ 22</div>
    </StyledDisplay>
  )
}

export default Display
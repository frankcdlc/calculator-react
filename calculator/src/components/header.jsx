import styled from "@emotion/styled"
import React from 'react'

function Header() {
  const StyledHeader = styled.div({
    border: `1px solid rgb(235, 231, 231)`,
    backgroundColor: `#06B6D4`,
    color: `white`,
    textAlign: `center`,
    fontSize: `2rem`,
    gridColumn: `span 5`
  })


  return (
    <StyledHeader>Groceries</StyledHeader>
  )
}

export default Header
import styled from "@emotion/styled"
import React from 'react'

const cssColor = {
  white:
  {
    backgroundColor: `white`
  },
  cyan:
  {
    backgroundColor: `#06B6D4`
  },
  gray:
  {
    backgroundColor: `#F3F4F6`
  }
}

const cssButton = {
  operator:
  {
    backgroundColor: ""
  },
  spanTwo:
  {
    gridRow: `span 2`,
    color: `white`
  }
}

function Button({styles, dato, color, type, ...props}) {
  // const { dato, type } = props

  const StyledButton = styled.button({
    cursor: `pointer`,
    fontSize: `2rem`,
    color: `#4B5563`,
    outline: `none`,
    border: `1px solid rgb(235, 231, 231)`,
    ...cssButton[type],
    ...cssColor[color],
    ...styles
  })
  
  return (
    <StyledButton {...props}>
      {dato}
    </StyledButton>
  )
}

export default Button
import styled from "@emotion/styled"
import React from 'react'

function FooterDate() {
  const StyledFooterDate = styled.div({
    border: `1px solid rgb(235, 231, 231)`,
    gridColumn: `span 5`,
    alignItems: `center`,
    textAlign: `center`,
    fontSize: `1.2rem`,
    backgroundColor: `#F3F4F6`

  })

  return (
    <StyledFooterDate>Thursday March, 10, 2022</StyledFooterDate>
  )
}

export default FooterDate
import styled from "@emotion/styled"

import React from 'react'
import Board from './board';
import Display from './display';
import FooterDate from './footerDate';
import Header from './header';

const Container = () => {
  const StyledContainer = styled.div({
    display: `grid`,
    gridTemplateRows: `100px 100px 1fr 50px`,
    justifyContent: `center`,
    alignContent: `center`,
    marginBlock: `2rem auto`
  })
  
  return (
    <StyledContainer>
      <Header></Header>
      <Display></Display>
      <Board/>
      <FooterDate/>
    </StyledContainer>
  )
}

export default Container;
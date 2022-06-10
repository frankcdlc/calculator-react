import React from 'react'
import Board from './board';
import Display from './display';
import FooterDate from './footerDate';
import Header from './header';

export const Container = () => {
  return (
    <div>
      <Header></Header>
      <Display></Display>
      <Board/>
      <FooterDate/>
    </div>
  )
}

export default Container;
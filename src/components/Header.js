import React from 'react'
import styled from 'styled-components'
import spin from './spin.svg'

const Title = styled.h1`
  font-size: 3em;
  font-family: Roboto Mono;
`

const StyledHeader = styled.header`
  text-align: center;
  margin-top: 15vh;
  width: 100vw;
`

const SpinImg = styled.img`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  height: 100px;
  animation: spin 8s linear infinite;
  filter: hue-rotate(${Math.random() * 360}deg);
`

const Header = () => {
  return (
    <StyledHeader>
      <Title>impostor</Title>
      <SpinImg src={spin}></SpinImg>
      <p>
        Calls an emergency meeting among your friends when someone is found not working on their
        tasks.
      </p>
    </StyledHeader>
  )
}

export default Header

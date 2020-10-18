import React from 'react'
import styled from 'styled-components'
import Character from './Character'

const Title = styled.h1`
  font-size: 3em;
  font-family: Roboto Mono;
`

const StyledHeader = styled.header`
  text-align: center;
  margin-top: 15vh;
  width: 100vw;
`

const Header = ({ color = ['#C01701', '#760B39'] }) => {
  return (
    <StyledHeader>
      <Title>impostor</Title>
      <Character primaryColor={color[0]} shadowColor={color[1]} />
      <p>
        Calls an emergency meeting among your friends when someone is found not working on their
        tasks.
      </p>
    </StyledHeader>
  )
}

export default Header

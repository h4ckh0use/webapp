import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: Roboto Mono;
`

const Header = () => {
  return (
    <header>
      <Title>Among &mdash; Us</Title>
      <p>
        Calls an emergency meeting among your friends when someone is found not working on their
        tasks.
      </p>
    </header>
  )
}

export default Header

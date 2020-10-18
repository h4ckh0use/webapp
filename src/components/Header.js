import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: Roboto Mono;
`

const Header = () => {
  return (
    <header>
      <Title>Impasta &mdash;</Title>
      <p>
        Calls an emergency meeting among your friends when someone is found not working on their
        tasks.
      </p>
    </header>
  )
}

export default Header

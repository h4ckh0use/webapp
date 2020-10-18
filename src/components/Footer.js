import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  color: white;
  &&:visited {
    color: white;
  }
`

const StyledFooter = styled.footer`
  position: absolute;
  text-align: center;
  bottom: 20px;
  width: 100vw;
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        a big cool hackathon project by <A href="https://github.com/h4ckh0use">h4ckh0use</A> © 2020
      </p>
    </StyledFooter>
  )
}

export default Footer

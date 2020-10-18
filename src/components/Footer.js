import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  color: white;
  &&:visited {
    color: white;
  }
`

const Footer = () => {
  return (
    <footer>
      a big cool hackathon project by <A href="https://github.com/h4ckh0use">h4ckh0use</A> © 2020
    </footer>
  )
}

export default Footer

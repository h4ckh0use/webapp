import React from 'react'
import styled from 'styled-components'

const P = styled.p`
  margin: 0;
`

export default ({ users }) => {
  return (
    <>
      {Object.entries(users).map((username, color) => {
        return <P>{username}</P>
      })}
    </>
  )
}

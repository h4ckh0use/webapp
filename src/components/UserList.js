import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const Flexyboi = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const P = styled.p`
  margin: 2px 0 0 7px;
`

export default ({ users }) => {
  return (
    <>
      {Object.entries(users).map(([username, color]) => {
        return (
          <Flexyboi>
            <Avatar primaryColor={color[0]} shadowColor={color[1]} />
            <P>{username}</P>
          </Flexyboi>
        )
      })}
    </>
  )
}

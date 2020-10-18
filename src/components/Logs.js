import React from 'react'

export default ({ messages }) => {
  return messages.map((message) => {
    return <p key={message}>message</p>
  })
}

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DBadduser } from '../utility/firebase'
import styled from 'styled-components'

const SignupTitle = styled.h1`
  font-family: Roboto Mono;
`

const FormLabel = styled.label`
  display: block;
  & > span {
    margin-right: 1em;
  }
`

export default function SignupPage(props) {
  let history = useHistory()

  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    DBadduser(name)

    window.user = name
    window.localStorage.setItem('user', name)
    history.push('/room')
    window.ws.send(JSON.stringify({ broadcast: true, message: `${name} joined the room!` }))
  }

  return (
    <div>
      <SignupTitle>Character</SignupTitle>
      <FormLabel>
        <span>Name:</span>
        <input onChange={(e) => handleChange(e)} type="text" value={name} />
      </FormLabel>
      <button
        onClick={(e) => {
          onSubmit(e)
        }}
      >
        Join
      </button>
    </div>
  )
}

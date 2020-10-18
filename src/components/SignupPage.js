import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DBadduser } from '../utility/firebase'
import styled from 'styled-components'
import Button from './Button'

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
    console.log(name)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted: ', name)
    DBadduser(name)

    window.user = name
    history.push({
      pathname: '/room',
      state: { name: name },
    })
    window.ws.send(JSON.stringify({ broadcast: true, message: `${name} joined the room!` }))
  }

  return (
    <div>
      <SignupTitle>Character</SignupTitle>
      <form
        onSubmit={(e) => {
          onSubmit(e)
        }}
      >
        <FormLabel>
          <span>Name:</span>
          <input onChange={(e) => handleChange(e)} type="text" value={name} />
        </FormLabel>
        <Button>Join</Button>
      </form>
    </div>
  )
}

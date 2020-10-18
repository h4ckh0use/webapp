import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DBadduser } from '../utility/firebase'
import styled from 'styled-components'
import Button from './Button'
import { CirclePicker } from 'react-color'

const SignupTitle = styled.h1`
  font-family: Roboto Mono;
`

const FormLabel = styled.label`
  display: block;
  & > span {
    margin-right: 1em;
  }
`

// const CirclePickerContainer = styled(CirclePicker)`
//   margin-right: unset;
//   margin-bottom: unset;
//   margin: auto;
// `

export default function SignupPage(props) {
  let history = useHistory()

  const colorsArray = [
    '#c01701',
    '#ea7f00',
    '#ffd84e',
    '#2fea00',
    '#237f18',
    '#1125da',
    '#f5d8ff',
    '#53fdd7',
    '#e0d9ff',
    '#e752be',
    '#7a7a7a',
    '#ffffff',
  ]

  const [name, setName] = useState('')

  const handleColorChange = ({ hex }) => console.log(hex)

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
      <form
        onSubmit={(e) => {
          onSubmit(e)
        }}
      >
        <FormLabel>
          <span>Name:</span>
          <input onChange={(e) => handleChange(e)} type="text" value={name} />
        </FormLabel>
        <CirclePicker colors={colorsArray} onChangeComplete={handleColorChange} />
        <Button>Join</Button>
      </form>
    </div>
  )
}

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
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

export default function SignupPage(props) {
  const [color, setColor] = useState(['#C01701', '#760B39'])
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

  const colorsMap = {
    '#c01701': ['#c01701', '#770A39'],
    '#ea7f00': ['#ea7f00', '#B14100'],
    '#ffd84e': ['#ffd84e', '#c38d37'],
    '#2fea00': ['#2fea00', '#2DA82A'],
    '#237f18': ['#237f18', '#134D29'],
    '#1125da': ['#1125da', '#070B93'],
    '#f5d8ff': ['#f5d8ff', '#EBB6FE'],
    '#53fdd7': ['#53fdd7', '#35A7C0'],
    '#e0d9ff': ['#e0d9ff', '#D1C6FF'],
    '#e752be': ['#e752be', '#A728B3'],
    '#7a7a7a': ['#7a7a7a', '#363232'],
    '#ffffff': ['#D4DFF0', '#8394C2'],
  }

  const [name, setName] = useState('')

  const handleColorChange = ({ hex }) => {
    setColor(colorsMap[hex])
    props.colourCallback(colorsMap[hex])
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (name) {
      window.user = name
      window.localStorage.setItem('user', name)
      history.push('/room')
      // TODO ADD COLOUR
      window.ws.send(JSON.stringify({ newUser: true, username: name, color }))
      window.ws.send(JSON.stringify({ broadcast: true, message: `${name} joined the room!` }))
    }
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
          <span>Enter your name:</span>
          <input onChange={(e) => handleChange(e)} type="text" value={name} />
        </FormLabel>
        <CirclePicker colors={colorsArray} onChangeComplete={handleColorChange} />
        <Button>Join</Button>
      </form>
    </div>
  )
}

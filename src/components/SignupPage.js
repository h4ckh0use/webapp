import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'
import { CirclePicker } from 'react-color'

const SignupTitle = styled.h1`
  font-family: Roboto Mono;
  margin: 0.6em 0 0.3em 0;
`

const Wrapper = styled.div`
  @keyframes slidein {
    from {
      margin-right: 100px;
      opacity: 0;
    }

    to {
      margin-right: 0;
      opacity: 1;
    }
  }

  animation-duration: 1s;
  animation-timing-function: ease;
  animation-name: slidein;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledButton = styled(Button)`
  width: 90px;
`

const StyledInput = styled.input`
  width: 200px;
  display: block;
  margin: 10px !important;
  background: none !important;
  color: white;
  font-weight: bold;
  border: 3px solid white !important;
  border-radius: 100px !important;
  &&:focus {
    outline: none;
    box-shadow: 0px 0px 4px #ffffff;
  }
  padding: 10px !important;
`

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

export default function SignupPage(props) {
  const [color, setColor] = useState(['#C01701', '#760B39'])
  const [name, setName] = useState('')
  const [stepTwo, setStepTwo] = useState(false)
  let history = useHistory()

  const handleColorChange = ({ hex }) => {
    setColor(colorsMap[hex])
    props.colourCallback(colorsMap[hex])
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const onNext = () => {
    name && setStepTwo(true)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setStepTwo(true)
    }
  }

  const onSubmit = () => {
    if (name) {
      window.user = name
      window.localStorage.setItem('user', name)
      history.push('/room')

      window.ws.send(JSON.stringify({ newUser: true, username: name, color }))
      window.ws.send(JSON.stringify({ broadcast: true, message: `${name} joined the room!` }))
    }
  }

  return (
    <Wrapper>
      <SignupTitle>Join</SignupTitle>
      {stepTwo ? (
        <>
          <p>Chose your character colour</p>
          <CirclePicker colors={colorsArray} onChangeComplete={handleColorChange} />
          <StyledButton onClick={() => onSubmit()}>Join</StyledButton>
        </>
      ) : (
        <>
          <StyledInput
            onKeyDown={handleKeyDown}
            placeholder="enter your name"
            onChange={(e) => handleChange(e)}
            type="text"
            value={name}
          />
          <StyledButton onClick={() => onNext()}>Next</StyledButton>
        </>
      )}
    </Wrapper>
  )
}

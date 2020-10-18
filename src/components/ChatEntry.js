import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledInput = styled.input`
  flex: 3;
  box-sizing: border-box;
  padding: 10px;
  && > p {
    margin: 0;
  }

  border-radius: 5px !important;
  margin: 0 !important;
`

const Button = styled.button`
  flex: 1;
  border-radius: 5px !important;
  margin-left: 5px;
  border: none;
  height: 2.32em;
  font-weight: 700;
  background: #fff;
  font-family: 'Roboto Mono';
`

export default ({ handleChange, handleClick, chatValue, handleKeyDown }) => {
  return (
    <Wrapper>
      <StyledInput
        onChange={handleChange}
        type="text"
        value={chatValue}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleClick}>Submit</Button>
    </Wrapper>
  )
}

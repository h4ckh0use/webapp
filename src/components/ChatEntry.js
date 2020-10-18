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
  border-radius: 10px !important;
  margin: 0 !important;
`

const Button = styled.button`
  flex: 1;
  border-radius: 10px !important;
  margin-left: 5px;
  border: none;
  height: 2.32em;
  font-family: 'Roboto';
`

export default ({ callback }) => {
  return (
    <Wrapper>
      <StyledInput type="text" />
      <Button>Submit</Button>
    </Wrapper>
  )
}

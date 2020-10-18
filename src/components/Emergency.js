import React, { Component } from 'react'
import emergency from './emergency.svg' // Tell webpack this JS file uses this image
import styled from 'styled-components'

const EmergencyImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  pointer-events: none;
`

const EmergencyText = styled.h1`
  z-index: 100;
`

const EmergencyWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

const Emergency = ({ user }) => {
  return (
    <>
      <EmergencyWrapper>
        <EmergencyText>{user} was off task!</EmergencyText>
      </EmergencyWrapper>
      <EmergencyImage src={emergency} alt="Emergency" />
    </>
  )
}

export default Emergency

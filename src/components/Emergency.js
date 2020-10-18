import React from 'react'
import emergency from './emergency.svg' // Tell webpack this JS file uses this image
import styled from 'styled-components'

const EmergencyImage = styled.img`
  transition: all 1s;
  opacity: ${(p) => (p.isEmergency ? '100' : '0')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  pointer-events: none;
  z-index: 50;
`

const EmergencyText = styled.h1`
  transition: all 1s;
  opacity: ${(p) => (p.isEmergency ? '100' : '0')};
  width: 500px;
  font-size: 4em;
  font-weight: 700;
  font-family: Roboto Mono;
  text-align: center;
  z-index: 100;
  color: white;
  -webkit-text-stroke: 2px black;
`

const EmergencyWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vw;
  width: 100vw;
`

const Emergency = ({ user, isEmergency, showWrapper }) => {
  return showWrapper ? (
    <>
      <EmergencyWrapper>
        <EmergencyText isEmergency={isEmergency}>
          {user ? user : 'Someone'} was off task!
        </EmergencyText>
      </EmergencyWrapper>
      <EmergencyImage isEmergency={isEmergency} src={emergency} alt="Emergency" />
    </>
  ) : (
    ''
  )
}

export default Emergency

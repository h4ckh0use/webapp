import React from 'react'
import styled from 'styled-components'

const TimeContainer = styled.div`
  margin: 0;
  text-align: center;
  font-weight: 600;
`

const TimeText = styled.span`
  width: 90px;
  font-size: 4em;
`

const TimeUnitText = styled(TimeText)`
  font-size: 1em;
  margin: 0 10px;
`

const Separator = styled.span`
  width: 20px;
  font-size: 4em;
`

const TimeFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TimeDisplay = ({ minutes, seconds }) => {
  // formats to 2-digit num with prepended 0
  function fmt(time) {
    return ('0' + time).slice(-2)
  }

  return (
    <TimeContainer>
      <TimeFlex>
        <TimeText>{fmt(minutes)}</TimeText>
        <Separator>:</Separator>
        <TimeText>{fmt(seconds)}</TimeText>
      </TimeFlex>
      <TimeFlex>
        <TimeUnitText>min</TimeUnitText>
        <TimeUnitText>sec</TimeUnitText>
      </TimeFlex>
    </TimeContainer>
  )
}

export default TimeDisplay

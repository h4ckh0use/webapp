import React from 'react'
import { useLocation } from 'react-router-dom'

const Callroom = (props) => {
  const location = useLocation()
  return <>Hey There {location.state.name}</>
}

export default Callroom

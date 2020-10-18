import React from 'react'
import { useLocation } from 'react-router-dom'

const Callroom = (props) => {
  const location = useLocation()
  return (
    // The <> tag is just a shorthand for React.fragment
    // https://reactjs.org/docs/fragments.html
    <>Hey There {location.state.name}</>
  )
}

export default Callroom

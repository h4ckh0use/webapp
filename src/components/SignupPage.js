import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DBadd } from '../utility/firebase'

export default function SignupPage(props) {
  let history = useHistory()

  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
    console.log(name)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted: ', name)
    DBadd(name)

    window.user = name
    history.push({
      pathname: '/room',
      state: { name: name },
    })
  }

  return (
    <div>
      <h1> Title </h1>
      <form
        onSubmit={(e) => {
          onSubmit(e)
        }}
      >
        <label>
          Name:
          <input onChange={(e) => handleChange(e)} type="text" value={name} />
        </label>
        <button> Submit </button>
      </form>
    </div>
  )
}

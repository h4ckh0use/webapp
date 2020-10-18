import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DBadduser } from '../utility/firebase'
import Header from '../components/Header'

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
    DBadduser(name)

    window.user = name
    history.push({
      pathname: '/room',
      state: { name: name },
    })
    window.ws.send(JSON.stringify({ broadcast: true, message: `${name} joined the room!` }))
  }

  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => {
          onSubmit(e)
        }}
      >
        <label>
          Name: <br />
          <input onChange={(e) => handleChange(e)} type="text" value={name} />
        </label>
        <button> Join! </button>
      </form>
    </div>
  )
}

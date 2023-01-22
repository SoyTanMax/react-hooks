// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import { useState } from 'react'

function Greeting({name = ""} : Props) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [initialName, setInitialName] = useState(name)

  function handleChange(event) {
    const {value} = event.target
    setInitialName(value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={initialName} onChange={handleChange} id="name" />
      </form>
      {initialName ? <strong>Hello {initialName}</strong> : 'Please type your name'}
    </div>
  )
  type Props = {
    name: string
  }
}

function App() {
  return <Greeting/>
}

export default App

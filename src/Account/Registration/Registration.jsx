import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div>
      <h1>Register</h1>

      <p>
        Already have an account? <Link to="/account">Sign in</Link>      </p>
    </div>
  )
}

export default Registration

import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const count= useSelector((state) => state.counter.value)
  return (
    <div>
        Headercount{count}
      
    </div>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

export const Buttons = () => {
  return (
    <div>
       <Link to="/"><button>Hombre</button></Link>
       <Link to="/productos/Mujer"><button>Mujer</button></Link>
    </div>
  )
}

export default Buttons;

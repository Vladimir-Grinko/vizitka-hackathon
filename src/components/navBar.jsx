import React from 'react'

import { Link } from 'react-router-dom'
import Badge from './badge'

const NavBar = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          <h2>
            <Badge context="Главная" color="info" />
          </h2>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Bookmark">
          <h2>
            <Badge context="Избранные" color="info" />
          </h2>
        </Link>
      </li>
    </ul>
  )
}
export default NavBar

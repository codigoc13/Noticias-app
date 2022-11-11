import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/images/LogoC13.png'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/Home">
                <img style={{width:'300px'}} src={logo}/>
            </Link>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/News">News</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
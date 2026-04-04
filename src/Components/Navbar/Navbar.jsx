import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav >
                <img src={logo} alt="" />
                <ul className='navbar-list'>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>Program</Link>
                    </li>
                    <li>
                        <Link>ABout Us</Link>
                    </li>
                    <li>
                        <Link>Campus</Link>
                    </li>
                    <li>
                        <Link>Testimonials</Link>
                    </li>
                    <button>Contact US</button>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
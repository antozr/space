import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/shared/logo.svg'
import './Header.scss'
import './Fonts.scss'

function HeaderNav() {
    return (
        <header className="head">
            <img src={Logo} alt="Logo of this project" className="head__img" />
            <button className="head__btnMenu">
                <span className="head__btnBoxMenu"></span>
                <span className="head__btnBoxMenu"></span>
                <span className="head__btnBoxMenu"></span>
            </button>
            <nav className="head__nav">
                <ul className="nav__list">
                    <li className="nav__el nav__el--actif">
                        <Link to='/home' className='nav__link'>
                           <span>00</span> Home
                        </Link>
                    </li>
                    <li className="nav__el">
                        <Link to='/destination' className='nav__link'>
                           <span>01</span> Destination
                        </Link>
                    </li>
                    <li className="nav__el">
                        <Link to='/crew' className='nav__link'>
                           <span>02</span> Crew
                        </Link>
                    </li>
                    <li className="nav__el">
                        <Link to='/technology' className='nav__link'>
                            <span>03</span> TECHNOLOGY
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNav

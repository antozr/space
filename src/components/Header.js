import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/shared/logo.svg'
import './Header.scss'
import './Fonts.scss'

function HeaderNav() {

    function removeStateActif (){
        let allActif = document.querySelector(".nav__el--actif");
        allActif.classList.remove("nav__el--actif")
    }

    function clickChangeActif (e){
        removeStateActif();
        console.log(e);
        e.target.parentElement.classList.add('nav__el--actif')
    }
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
                    <li className="nav__el nav__el--actif" onClick={clickChangeActif}>
                        <Link to='/home' className='nav__link'>
                           <span>00</span>&nbsp;Home
                        </Link>
                    </li>
                    <li className="nav__el" onClick={clickChangeActif}>
                        <Link to='/destination' className='nav__link'>
                           <span>01</span>&nbsp;Destination
                        </Link>
                    </li>
                    <li className="nav__el" onClick={clickChangeActif}>
                        <Link to='/crew' className='nav__link'>
                           <span>02</span>&nbsp;Crew
                        </Link>
                    </li>
                    <li className="nav__el" onClick={clickChangeActif}>
                        <Link to='/technology' className='nav__link'>
                            <span>03</span>&nbsp;TECHNOLOGY
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNav

import React from 'react'
import './Home.scss'
import '../components/Fonts.scss'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className="home">
            <div className="home__box">
                <p className="subtitle">
                    SO, YOU WANT TO TRAVEL TO
                </p>
                <h1 className="title title--belfair">
                    SPACE
                </h1>
                <p className="text text--center">
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className="home__linkBox">
                <Link to='/destination' className="home__link">
                    Explore
                </Link>
            </div>
        </div>
    )
}

export default Home

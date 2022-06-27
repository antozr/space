import React from 'react'
import Moon from '../assets/destination/image-moon.webp'
import '../components/Fonts.scss'
import './Desti.scss'

function Destination() {
    return (
        <div className="destination">
            <div className="destination__first">
                <h2 className="subtitle subtitle--nub"><span>01</span>&nbsp;Pick your destination</h2>
                <img src={Moon} alt="The astrals planete or moon." className="destination__img" />
            </div>
            <section className="destination__sect">
                <ul className="destination__list">
                    <el className="destination__el destination__el--actif  subtitle  subtitle--2">
                        Moon
                    </el>
                    <el className="destination__el subtitle  subtitle--2">
                        Mars
                    </el>
                    <el className="destination__el subtitle  subtitle--2">
                        Europa
                    </el>
                    <el className="destination__el subtitle  subtitle--2">
                        Titan
                    </el>
                </ul>
            </section>
            <h2 className="title title--2">
                Moon
            </h2>
            <p className="text">
                See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
            </p>
            <div className="destination__boxInfo">
                <ul className="boxInfo__list">
                    <li className="boxInfo__el">
                        <p className="subtitle subtitle--2">
                            Avg. Distance
                        </p>
                        <p className="subtitle">383,400 km</p>
                    </li>
                    <li className="boxInfo__el">
                        <p className="subtitle subtitle--2">
                            Est. Travel Time
                        </p>
                        <p className="subtitle">
                            3 Days
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Destination

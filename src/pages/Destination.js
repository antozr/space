import React, { useState } from 'react'
import Moon from '../assets/destination/image-moon.webp'
import '../components/Fonts.scss'
import './Desti.scss'
import Data from '../data/data.json'
import Desti from '../components/DestiContent'


function Destination() {

    const [usesat, setUseSat] = useState("Moon")

    console.log(Data)
    console.log(Data.destinations[0].name)
    var DataJson = Data.destinations;
    console.log(DataJson);
    var nameSatelit = "Moon";
    localStorage.setItem('linkSat',' ')



    function createTabSatFiltre (sat){
        const DataSat = DataJson.filter((el) => el.name === sat)
        DataSat.push(DataSat)
        var dataSat = DataSat
        console.log(DataSat);
        return (
            dataSat
        )
    }

    function activeChangeSat (e){
        console.log(e.target.innerHTML);
        var nameSat = e.target.innerHTML
        setUseSat(nameSat)
        removeActifState()
        e.target.classList.add('destination__el--actif')
        return(
            nameSat
        )
    }

    function removeActifState(){
        let allLink = document.querySelectorAll('.destination__el')
        allLink.forEach((el)=>{
            el.classList.remove('destination__el--actif')
        })
    }


    if (usesat === "Moon") {
        var dataSat = createTabSatFiltre ("Moon")
    } else if (usesat === "Mars") {
        var dataSat = createTabSatFiltre ("Mars")
    } else if (usesat === "Europa") {
        var dataSat = createTabSatFiltre ("Europa")
    } else if (usesat === "Titan") {
        var dataSat =  createTabSatFiltre ("Titan")
    }

    

    return (
        <div className="destination">
            <div className="destination__first">
                <h2 className="subtitle subtitle--nub"><span>01</span>&nbsp;Pick your destination</h2>
                <img src={Moon} alt="The astrals planete or moon." className="destination__img" />
            </div>
            <section className="destination__sect">
                <ul className="destination__list">
                    <li  className="destination__el destination__el--actif  subtitle  subtitle--2" onClick={activeChangeSat}>
                        Moon
                    </li>
                    <li className="destination__el subtitle  subtitle--2" onClick={activeChangeSat}>
                        Mars
                    </li>
                    <li className="destination__el subtitle  subtitle--2" onClick={activeChangeSat}>
                        Europa
                    </li>
                    <li className="destination__el subtitle  subtitle--2" onClick={activeChangeSat}>
                        Titan
                    </li>
                </ul>
                {dataSat.map((el) => (
                    <Desti name={el.name} description={el.description} dist={el.distance} voyage={el.travel} />
                ))}

            </section>

        </div>
    )
    
}


export default Destination

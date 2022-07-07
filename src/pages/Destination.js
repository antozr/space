import React, { useState } from 'react'
import Moon from '../assets/destination/image-moon.webp'
import Mars from '../assets/destination/image-mars.webp'
import Europa from '../assets/destination/image-europa.webp'
import Titan from '../assets/destination/image-titan.webp'
import '../components/Fonts.scss'
import './Desti.scss'
import Data from '../data/data.json'
import Desti from '../components/DestiContent'


function Destination() {

    const [usesat, setUseSat] = useState("Moon")

    // console.log(Data)
    // console.log(Data.destinations[0].name)
    var DataJson = Data.destinations;
    var nameSatelit = "Moon";
    const ImgSat = [Moon, Mars, Europa, Titan]


    function createTabSatFiltre (sat){
        const DataSat = DataJson.filter((el) => el.name === sat)
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
        var moonImg = ImgSat[0]
        
        //var satImg = dataSat.images.webp
    } else if (usesat === "Mars") {
        var dataSat = createTabSatFiltre ("Mars")
        console.log(dataSat);
        var moonImg = ImgSat[1]
    } else if (usesat === "Europa") {
        var dataSat = createTabSatFiltre ("Europa")
        console.log(dataSat);
        var moonImg = ImgSat[2]
    } else if (usesat === "Titan") {
        var dataSat =  createTabSatFiltre ("Titan")
        var moonImg = ImgSat[3]
    }

    

    return (
        <div className="destination">
            <div className="destination__first">
                <h2 className="subtitle subtitle--nub"><span>01</span>&nbsp;Pick your destination</h2>
                <img src={moonImg} alt="The astrals planete or moon." className="destination__img" />
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

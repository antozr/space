import React, { useState } from 'react'
import './Crew.scss'
import imgCrew from '../assets/crew/image-douglas-hurley.webp'
import imgCrew2 from '../assets/crew/image-mark-shuttleworth.webp'
import imgCrew3 from '../assets/crew/image-victor-glover.webp'
import imgCrew4 from '../assets/crew/image-anousheh-ansari.webp'
import Data from '../data/data.json'
import CrewMain from './CrewMain';

function Crew() {
    const [useCrew, setuseCrew] = useState("Douglas Hurley")


    const tabImgCrew = [imgCrew, imgCrew2, imgCrew3, imgCrew4]
    console.log(Data.crew);
    const [useImgCrew, setUseImgCrew] = useState(tabImgCrew[0])
    function RemoveActivState() {
        let allSliderBtn = document.querySelectorAll(".crew__elSlider");
        allSliderBtn.forEach((el) => {
            el.classList.remove('crew__elSlider--actif')
        })
    }

    function DataBtnSrc(e) {
        console.log(e.target);
        let allSliderBtn = document.querySelectorAll(".crew__elSlider");

        let DataCrew = Data.crew
        DataCrew = DataCrew.filter((el) => el.name)

        allSliderBtn[0].addEventListener('click', () => {
            let manInSpace = DataCrew[0].name;
            setuseCrew(manInSpace)
            setUseImgCrew(tabImgCrew[0])
            console.log(useCrew);
        })
        allSliderBtn[1].addEventListener('click', () => {
            let manInSpace = DataCrew[1].name;
            setuseCrew(manInSpace)
            setUseImgCrew(tabImgCrew[1])
            console.log(useCrew);
        })
        allSliderBtn[2].addEventListener('click', () => {
            let manInSpace = DataCrew[2].name;
            setuseCrew(manInSpace)
            setUseImgCrew(tabImgCrew[2])
            console.log(useCrew);
        })
        allSliderBtn[3].addEventListener('click', () => {
            let manInSpace = DataCrew[3].name;
            setuseCrew(manInSpace)
            setUseImgCrew(tabImgCrew[3])
            console.log(useCrew);
        })

        return {
            DataCrew
        }
    }
    function ActiveStat(e) {
        RemoveActivState();
        console.log('hello')
        var DataCrew = DataBtnSrc(e)
        console.log('hello2')
        e.target.classList.add('crew__elSlider--actif')

        return {
            DataCrew
        }

    }
    let DataCrew = Data.crew
    DataCrew = DataCrew.filter((ol) => ol.name === useCrew)

    return (
        <div className="crew">
            <h2 className="subtitle subtitle--nub crew__first"><span>02</span>&nbsp;Meet your crew</h2>
            <div className="crew--list">
                <div className="crew__imgBox">
                    <img src={useImgCrew} alt="The pilot and people work for the space program." className="crew__img" />
                </div>
                <ul className="crew__listSlider">
                    <li className="crew__elSlider crew__elSlider--actif" onClick={ActiveStat}></li>
                    <li className="crew__elSlider" onClick={ActiveStat}></li>
                    <li className="crew__elSlider" onClick={ActiveStat}></li>
                    <li className="crew__elSlider" onClick={ActiveStat}></li>
                </ul>
                {
                    DataCrew.map((el) => (
                        <CrewMain name={el.name} role={el.role} bio={el.bio} />
                    ))

                }
            </div>

        </div>
    )
}

export default Crew

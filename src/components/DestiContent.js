import React from 'react'

function Desti({name, description, dist, voyage}) {
    return (
        <div className='desti'>
            <h2 className="title title--belfair title--3 title--center">
                {name}
            </h2>
            <p className="text text--blue text--center">
                {description}
            </p>
            <div className="destination__boxInfo">
                <ul className="boxInfo__list">
                    <li className="boxInfo__el">
                        <p className="subtitle subtitle--2 subtitle--blue">
                            Avg. Distance
                        </p>
                        <p className="subtitle subtitle--big">
                            {dist}
                        </p>
                    </li>
                    <li className="boxInfo__el">
                        <p className="subtitle subtitle--2 subtitle--blue">
                            Est. Travel Time
                        </p>
                        <p className="subtitle subtitle--big">
                            {voyage}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Desti

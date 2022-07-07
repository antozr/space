import React from 'react'

function CrewMain({ name, role, bio }) {
    return (
        <div className="crew__box">
            <h2 className=" subtitle title--belfaire">
                {role}
            </h2>
            <h1 className="title title--belfaire title--4">
                {name}
            </h1>
            <p className="text text--center text--blue">
                {bio}
            </p>
        </div>
    )
}

export default CrewMain

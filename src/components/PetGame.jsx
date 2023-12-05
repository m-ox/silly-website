import React, { useState, useEffect } from 'react';
import beachImg from '../assets/backgrounds/beach.jpg';
import kirbyUnit from '../assets/units/Kirby';
import { setStyle } from '../utils/helper';

function PetGame({}) {
    const unitInit = {
        name: 'Sample',
        element: undefined,
        hunger: 100,
        monee: 150,
        pic: undefined,
        color: ''
    }
    const [location, setLocation] = useState(8);
    const [background, setBackground] = useState('');
    const [unit, setUnit] = useState(unitInit);
    const [hungerLevel, setHungerLevel] = useState('excellent');
    const statStyles = {backgroundColor: unit.color };

    const unitImgElement = (<img
            className={`pet-game__${unit.name.toLowerCase()}`}
            src={window.location.origin + unit.pic}
            alt={unit.name.toLowerCase()}
        />)

    useEffect(() => {
        const unitInitUpdateObj = structuredClone(unitInit);
        // holy shit you know this is bad what are you doing lmao
        if (kirbyUnit.name) {
            unitInitUpdateObj.name = kirbyUnit.name;
        }
        if (kirbyUnit.element) {
            unitInitUpdateObj.element = kirbyUnit.element;
        }
        if (kirbyUnit.hunger) {
            unitInitUpdateObj.hunger = kirbyUnit.hunger;
        }
        if (kirbyUnit.pic) {
            unitInitUpdateObj.pic = kirbyUnit.pic;
        }
        if (kirbyUnit.color) {
            unitInitUpdateObj.color = kirbyUnit.color;
        }
        setUnit(unitInitUpdateObj);
        console.log('beachimg:', beachImg
        )
        setBackground(beachImg);
    }, []);

    return (
        <div className="pet-game">
            <div className="pet-game__stats" style={setStyle(unit.color, statStyles)}>
                <p>Name: <span className="pet-game__stats-value">{unit.name}</span></p>
                <p>Element: <span className="pet-game__stats-value">{unit.element}</span></p>
                <p>Hunger: <span className={`pet-game__stats-value--${hungerLevel}`}>{unit.hunger}</span></p>
                <p>Monee: <span className="pet-game__stats-value">{unit.monee}p</span></p>
            </div>
            <div
                className="pet-game__container"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div>{location === 1 && unitImgElement}</div>
                <div>{location === 2 && unitImgElement}</div>
                <div>{location === 3 && unitImgElement}</div>
                <div>{location === 4 && unitImgElement}</div>
                <div>{location === 5 && unitImgElement}</div>
                <div>{location === 6 && unitImgElement}</div>
                <div>{location === 7 && unitImgElement}</div>
                <div>{location === 8 && unitImgElement}</div>
                <div>{location === 9 && unitImgElement}</div>
            </div>
            <div className="pet-game__messages">
                <p>Your pet is hungry!</p>
                <p>What will you do?</p>
            </div>
        </div>
    );
}

export default PetGame;
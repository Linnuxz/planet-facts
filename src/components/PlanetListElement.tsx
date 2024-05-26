import { planets, TPlanet } from '../constants';
import { NavLink } from 'react-router-dom';

import ArrowIcon from '../assets/icon-chevron.svg';

type TPlanetElement = {
    planet: string;
    onPlanetClick: (planet: TPlanet) => void;
};

const PlanetListElement = ({ planet, onPlanetClick }: TPlanetElement) => {
    const getPlanetObject = (): TPlanet | undefined => {
        return planets.find((item) => item.planet === planet);
    };
    const planetObj = getPlanetObject();
    if (!planetObj) {
        return;
    }

    return (
        <NavLink
            to={`/${planetObj.planet}`}
            className={`py-[20px] flex justify-between items-center ${
                planetObj.id !== planets.length
                    ? 'border-b border-white border-opacity-10'
                    : ''
            }`}
            onClick={() => onPlanetClick(planetObj)}
        >
            <div className="flex gap-[25px]">
                <div
                    className={`${planetObj.color} w-[20px] h-[20px] rounded-full`}
                ></div>
                <h2 className="text-white uppercase">{planetObj.planet}</h2>
            </div>
            <img src={ArrowIcon} alt="icon" />
        </NavLink>
    );
};

export default PlanetListElement;

import { useEffect, useState } from 'react';
import PlanetListElement from '../components/PlanetListElement';
import { planets, TPlanet } from '../constants';
import { useLocation } from 'react-router-dom';

type TPlanetList = {
    onPlanetClick?: (planet: TPlanet) => void;
};

const PlanetList = ({ onPlanetClick }: TPlanetList) => {
    const handleClick = (planet: TPlanet) => {
        if (onPlanetClick) {
            onPlanetClick(planet);
        }
    };

    const loc = useLocation();
    const [selected, setSelected] = useState<string>(loc.pathname);

    const handleSelect = (planet: string) => {
        setSelected(planet);
    };
    useEffect(() => {
        setSelected(loc.pathname.replace('/', ''));
    }, [loc.pathname]);

    return (
        <ul className="mt-[24px] md:mt-[10px] md:flex gap-[33px] justify-center">
            {planets.map((planet) => (
                <li
                    className={`xl:${
                        selected === planet.planet
                            ? `border-t-[2px] border-solid ${planet.buttonColor}`
                            : 'border-t-[2px] border-solid border-transparent'
                    } relative`}
                    key={planet.id}
                >
                    <div
                        className={`${
                            planet.buttonBgColor
                        } w-full h-[4px] absolute top-[-10px] hidden ${
                            selected === planet.planet ? 'xl:block' : 'hidden'
                        }`}
                    ></div>
                    <PlanetListElement
                        key={planet.id}
                        planet={planet.planet}
                        onPlanetClick={handleClick}
                        onSelected={handleSelect}
                    />
                </li>
            ))}
        </ul>
    );
};

export default PlanetList;

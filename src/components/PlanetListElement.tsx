import { planets, TPlanet } from '../constants';
import { NavLink } from 'react-router-dom';


type TPlanetElement = {
    planet: string;
    onPlanetClick: (planet: TPlanet) => void;
    onSelected: (planet: string) => void;
};

const PlanetListElement = ({
    planet,
    onPlanetClick,
    onSelected,
}: TPlanetElement) => {
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
            } md:border-none`}
            onClick={() => {
                onPlanetClick(planetObj);
                onSelected(planetObj.planet);
            }}
        >
            <div className="flex gap-[25px] items-center">
                <div
                    className={`${planetObj.color} w-[20px] h-[20px] rounded-full md:hidden`}
                ></div>
                <h2 className="text-white uppercase text-[17px] md:text-[13px] font-bold leading-[25px] tracking-[1.364px]">
                    {planetObj.planet}
                </h2>
            </div>
            <img src={'./assets/icon-chevron.svg'} alt="icon" className="md:hidden" />
        </NavLink>
    );
};

export default PlanetListElement;

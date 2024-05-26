import PlanetListElement from '../components/PlanetListElement';
import { planets, TPlanet } from '../constants';

type TPlanetList = {
    onPlanetClick: (planet: TPlanet) => void;
};

const PlanetList = ({ onPlanetClick }: TPlanetList) => {
    return (
        <ul className="mt-[24px]">
            {planets.map((planet) => (
                <PlanetListElement
                    key={planet.id}
                    planet={planet.planet}
                    onPlanetClick={onPlanetClick}
                />
            ))}
        </ul>
    );
};

export default PlanetList;

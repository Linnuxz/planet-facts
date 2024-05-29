import { TPlanet } from '../constants';
import SurfaceGeology from './SurfaceGeology';

type TComponent = {
    planet: TPlanet;
    activeButton: number;
};

const PlanetImage = ({ planet, activeButton }: TComponent) => {
    return (
        <div className="relative my-[96px]">
            <img
                src={planet.planetImagePath}
                alt="planet"
                className={`w-[111px] h-[111px] ${
                    activeButton !== 0 && activeButton !== 2 ? 'hidden' : ''
                }`}
            />
            <img
                src={planet.planetInternal}
                alt="planet-interior"
                className={`w-[111px] h-[111px] ${
                    activeButton !== 1 ? 'hidden' : ''
                }`}
            />
            <SurfaceGeology
                fillColor={planet.fillColor}
                isVisible={activeButton === 2}
            />
            <div className={`${activeButton !== 2 ? 'hidden' : ''}`}>
                <div className="w-[43px] h-[43px] rounded-full left-[34px] bottom-[-36px] bg-white absolute"></div>
                <img
                    src={planet.planetSurface}
                    alt=""
                    className="absolute w-[35px] h-[35px] rounded-full left-[38px] bottom-[-32px]"
                />
            </div>
        </div>
    );
};

export default PlanetImage;

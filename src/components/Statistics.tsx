import { TPlanet } from '../constants';

type TComponent = {
    planet: TPlanet;
};
const divStyle =
    'uppercase flex justify-between border-[1px] border-white border-solid border-opacity-20 py-[16px] px-[24px]';
const Statistics = ({ planet }: TComponent) => {
    return (
        <div className="w-full flex flex-col justify-center gap-2">
            <div className={divStyle}>
                <h3>Rotation Time:</h3>
                <p> {planet.rotationTime}</p>
            </div>
            <div className={divStyle}>
                <h3>Revolution Time: </h3>
                <p>{planet.revolutionTime}</p>
            </div>
            <div className={divStyle}>
                <h3>Radius:</h3>
                <p>{planet.radius} KM</p>
            </div>
            <div className={divStyle}>
                <h3>Average Temp.</h3>
                <p> {planet.averageTemp} °c</p>
            </div>
        </div>
    );
};

export default Statistics;

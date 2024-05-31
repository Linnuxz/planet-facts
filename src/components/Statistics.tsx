import { TPlanet } from '../constants';

type TComponent = {
    planet: TPlanet;
};
const divStyle: string =
    'uppercase flex justify-between border-[1px] border-white border-solid border-opacity-20 py-[16px] px-[24px] md:flex-col md:min-w-[164px] md:h-[88px] xl:min-w-[255px] xl:h-[128px] items-center md:items-start';
const hStyle: string =
    'font-["League Spartan"] font-bold text-[8px] leading-[16px] tracking-[0.727px] opacity-50 xl:text-[11px] xl:leading-[25px] tracking-[1px]';
const pStyle: string = 'font-["Antonio"] text-[20px] tracking-[-0.75px] md:tracking-[-0.9px] xl:text-[40px] xl:tracking-[-1.5px]';

const Statistics = ({ planet }: TComponent) => {
    return (
        <div className="w-full flex flex-col justify-center gap-2 md:flex-row md:justify-evenly md:px-[75px]">
            <div className={divStyle}>
                <h3 className={hStyle}>Rotation Time:</h3>
                <p className={pStyle}> {planet.rotationTime}</p>
            </div>
            <div className={divStyle}>
                <h3 className={hStyle}>Revolution Time: </h3>
                <p className={pStyle}>{planet.revolutionTime}</p>
            </div>
            <div className={divStyle}>
                <h3 className={hStyle}>Radius:</h3>
                <p className={pStyle}>{planet.radius} KM</p>
            </div>
            <div className={divStyle}>
                <h3 className={hStyle}>Average Temp.</h3>
                <p className={pStyle}> {planet.averageTemp} °c</p>
            </div>
        </div>
    );
};

export default Statistics;

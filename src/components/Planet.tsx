import { useState } from 'react';
import { TPlanet } from '../constants';
import PlanetImage from './PlanetImage';
import MainButtonComponent from './MainButtonComponent';
import MainButtonComponentBelow from './MainButtonComponentBelow';

// import SourceIcon from '../assets/icon-source.svg';
import Statistics from './Statistics';

type TPlanetElement = {
    planet: TPlanet;
    isOpen: boolean;
};

const Planet = ({ planet, isOpen }: TPlanetElement) => {
    const [activeButton, setActiveButton] = useState<number>(0);

    const handleButtonClick = (buttonNum: number) => {
        setActiveButton(buttonNum);
    };

    return (
        <div
            className={`text-white 
            ${
                isOpen ? 'hidden md:block' : ''
            }
             px-[24px] flex flex-col items-center mb-[50px] xl:pt-[126px]`}
        >
            <div className="w-full flex flex-col items-center justify-center xl:flex-row xl:items-center xl:justify-center">
                <MainButtonComponent
                    planet={planet}
                    onActiveClick={handleButtonClick}
                />
                <div className="text-center flex flex-col gap-[16px] mb-[28px] md:mb-[41px] justify-center items-center w-full xl:flex-row xl:justify-evenly xl:items-center xl:mb-[87px]">
                    <PlanetImage planet={planet} activeButton={activeButton} />
                    <div className='flex flex-col justify-around w-full xl:w-auto'>
                        <div className="flex justify-around md:text-left md:items-start xl:flex-col">
                            <div className="md:max-w-[339px]">
                                <h2 className="text-[40px] md:text-[48px] xl:text-[80px] uppercase">
                                    {planet.planet}
                                </h2>
                                <p className='font-["League Spartan"] text-[11px] xl:text-[14px] leading-[22px] xl:leading-[25px]'>
                                    {planet.text}
                                </p>
                                <div className="flex items-center justify-center gap-1 mt-[16px] md:justify-start">
                                    <p className='font-["League Spartan"] text-[12px] leading-[25px]'>
                                        Source:{' '}
                                        <a href="/" className="">
                                            <span className="underline font-bold opacity-50">
                                                Wikipedia
                                            </span>
                                        </a>
                                    </p>
                                    <img
                                        src={'./assets/icon-source.svg'}
                                        alt="source"
                                        className="w-[12px] h-[12px]"
                                    />
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <MainButtonComponentBelow
                                    planet={planet}
                                    onActiveClick={handleButtonClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Statistics planet={planet} />
        </div>
    );
};

export default Planet;

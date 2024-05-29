import { useState } from 'react';
import { TPlanet } from '../constants';
import PlanetImage from './PlanetImage';
import MainButtonComponent from './MainButtonComponent';

import SourceIcon from '../assets/icon-source.svg';
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
            className={`text-white ${
                isOpen ? 'hidden' : ''
            } px-[24px] flex flex-col items-center mb-[50px]`}
        >
            <MainButtonComponent
                planet={planet}
                onActiveClick={handleButtonClick}
            />
            <PlanetImage planet={planet} activeButton={activeButton} />
            <div className="text-center flex flex-col gap-[16px] mb-[28px]">
                <h2 className="text-[40px] uppercase">{planet.planet}</h2>
                <p className='font-["League Spartan"] text-[11px] leading-[22px]'>
                    {planet.text}
                </p>
                <div className='flex items-center justify-center gap-1 mt-[16px]'>
                    <p className='font-["League Spartan"] text-[12px] leading-[25px]'>
                        Source:{' '}
                        <a href="/" className="">
                            <span className="underline font-bold opacity-50">
                                Wikipedia
                            </span>
                        </a>
                    </p>
                    <img src={SourceIcon} alt="source" className='w-[12px] h-[12px]' />
                </div>
            </div>
            <Statistics planet={planet}/>
        </div>
    );
};

export default Planet;

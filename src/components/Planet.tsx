import {  useState } from 'react';
import { TPlanet, buttonStyles } from '../constants';

type TPlanetElement = {
    planet: TPlanet;
    isOpen: boolean;
};

const Planet = ({ planet, isOpen }: TPlanetElement) => {
    const [activeButton, setActiveButton] = useState<number | null>(null);

    const handleButtonClick = (buttonNum: number) => {
        setActiveButton(buttonNum);
    };

    return (
        <div className={`text-white ${isOpen ? 'hidden' : ''} px-[24px]`}>
            <div className="flex w-full justify-around mt-[20px] mb">
                <button
                    className={`${buttonStyles} ${
                        activeButton === 0 ? 'border-b-4 border-[#419EBB]' : ''
                    }`}
                    onClick={() => {
                        handleButtonClick(0);
                    }}
                >
                    overview
                </button>
                <button
                    className={`${buttonStyles} ${
                        activeButton === 1 ? 'border-b-4 border-[#419EBB]' : ''
                    }`}
                    onClick={() => {
                        handleButtonClick(1);
                    }}
                >
                    structure
                </button>
                <button
                    className={`${buttonStyles} ${
                        activeButton === 2 ? 'border-b-4 border-[#419EBB]' : ''
                    }`}
                    onClick={() => {
                        handleButtonClick(2);
                    }}
                >
                    surface
                </button>
            </div>
        </div>
    );
};

export default Planet;

import { useState } from 'react';
import { TPlanet, buttonStyles } from '../constants';

type TComponent = {
    planet: TPlanet;
    onActiveClick: (num:number) => void;
};

const MainButtonComponent = ({ planet, onActiveClick }: TComponent) => {
    const [activeButton, setActiveButton] = useState<number>(0);

    const handleChange = (num: number): void => {
        setActiveButton(num);
    };

    return (
        <div className="flex w-full justify-around mt-[20px]">
            <button
                className={`${buttonStyles} ${
                    activeButton === 0
                        ? `border-b-4 ${planet.buttonColor}`
                        : 'border-b-4 border-transparent'
                }`}
                onClick={() => {
                    handleChange(0);
                    onActiveClick(0);
                }}
            >
                overview
            </button>
            <button
                className={`${buttonStyles} ${
                    activeButton === 1
                        ? `border-b-4 ${planet.buttonColor}`
                        : 'border-b-4 border-transparent'
                }`}
                onClick={() => {
                    handleChange(1);
                    onActiveClick(1);
                }}
            >
                structure
            </button>
            <button
                className={`${buttonStyles} ${
                    activeButton === 2
                        ? `border-b-4 ${planet.buttonColor}`
                        : 'border-b-4 border-transparent'
                }`}
                onClick={() => {
                    handleChange(2);
                    onActiveClick(2);
                }}
            >
                surface
            </button>
        </div>
    );
};

export default MainButtonComponent;

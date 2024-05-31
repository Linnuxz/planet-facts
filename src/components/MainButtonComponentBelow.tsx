import { useState } from 'react';
import { TPlanet } from '../constants';

type TComponent = {
    planet: TPlanet;
    onActiveClick: (num: number) => void;
};

const MainButtonComponent = ({ planet, onActiveClick }: TComponent) => {
    const [activeButton, setActiveButton] = useState<number>(0);

    const handleChange = (num: number): void => {
        setActiveButton(num);
    };

    const buttonStyle: string =
        'uppercase text-[12px] font-bold leading-[1.929px] py-[16px] px-[20px] border-[1px] border-white border-solid border-opacity-20 w-[281px] xl:w-[350px] text-left flex gap-[17px]';

    const hoverStyle: string = 'xl:hover:bg-[#D8D8D8] xl:hover:bg-opacity-20';

    return (
        // <div className="flex w-full justify-around mt-[20px] ">
        <div className="hidden md:flex flex-col gap-[16px] items-start mt-[40px]">
            <button
                className={`${buttonStyle} ${
                    activeButton === 0
                        ? `border-b-4 ${planet.buttonBgColor}`
                        : `border-b-4 border-transparent ${hoverStyle}`
                }`}
                onClick={() => {
                    handleChange(0);
                    onActiveClick(0);
                }}
            >
                <span className="opacity-50">01</span> overview
            </button>
            <button
                className={`${buttonStyle} ${
                    activeButton === 1
                        ? `border-b-4 ${planet.buttonBgColor}`
                        : `border-b-4 border-transparent ${hoverStyle}`
                }`}
                onClick={() => {
                    handleChange(1);
                    onActiveClick(1);
                }}
            >
                <span className="opacity-50">02</span> internal structure
            </button>
            <button
                className={`${buttonStyle} ${
                    activeButton === 2
                        ? `border-b-4 ${planet.buttonBgColor}`
                        : `border-b-4 border-transparent ${hoverStyle}`
                }`}
                onClick={() => {
                    handleChange(2);
                    onActiveClick(2);
                }}
            >
                <span className="opacity-50">03</span> surface geology
            </button>
        </div>
        // </div>
    );
};

export default MainButtonComponent;

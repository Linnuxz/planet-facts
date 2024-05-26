import Hamburger from '../assets/icon-hamburger.svg';
import { NavLink } from 'react-router-dom';

type TNavbar = {
    onIsOpen: () => void;
    isOpen: boolean;
};

const Navbar = ({ onIsOpen, isOpen }: TNavbar) => {
    return (
        <div className="border-b border-white border-opacity-10">
            <div className="flex justify-between items-center pb-[16px] px-[24px]">
                <NavLink to="/">
                    <h2 className="uppercase font-['Antonio'] text-[28px] text-white">
                        the planets
                    </h2>
                </NavLink>
                <button onClick={onIsOpen}>
                    <img
                        src={Hamburger}
                        className={`${
                            isOpen ? 'opacity-[0.2487]' : 'opacity-1'
                        }`}
                    />
                </button>
            </div>
        </div>
    );
};

export default Navbar;

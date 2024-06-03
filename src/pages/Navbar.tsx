import { NavLink } from 'react-router-dom';
import PlanetList from './PlanetList';

type TNavbar = {
    onIsOpen: () => void;
    isOpen: boolean;
};

const Navbar = ({ onIsOpen, isOpen }: TNavbar) => {
    return (
        <div className="border-b border-white border-opacity-10 xl:flex xl:flex-row xl:justify-between xl:px-[32px]">
            <div className="flex justify-between items-center pb-[16px] px-[24px] md:justify-center md:pb-0">
                <NavLink to="/mercury">
                    <h2 className="uppercase font-['Antonio'] text-[28px] text-white md:mt-[10px]">
                        the planets
                    </h2>
                </NavLink>
                <button onClick={onIsOpen} className="md:hidden">
                    <img
                        src={'assets/icon-hamburger.svg'}
                        className={`${
                            isOpen ? 'opacity-[0.2487]' : 'opacity-1'
                        }`}
                    />
                </button>
            </div>
            <div className="hidden md:block">
                <PlanetList />
            </div>
        </div>
    );
};

export default Navbar;

import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './pages/Navbar';
import PlanetList from './pages/PlanetList';
import Planet from './components/Planet';

import { planets } from './constants';

const App = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            setIsOpen(true);
        }
    }, [location.pathname]);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handlePlanetClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="min-h-screen py-[16px] xl:py-0">
            <div>
                <Navbar onIsOpen={handleOpen} isOpen={isOpen} />
                <div className="px-[16px] relative md:hidden">
                    {isOpen && (
                        <PlanetList
                            onPlanetClick={() => {
                                handlePlanetClick();
                            }}
                        />
                    )}
                </div>
            </div>
            <Routes>
                <Route index element={<Navigate to="/mercury" replace />} />
                {planets.map((planet) => (
                    <Route
                        key={planet.id}
                        path={`/${planet.planet.toLowerCase()}`}
                        element={<Planet planet={planet} isOpen={isOpen} />}
                    />
                ))}
            </Routes>
        </div>
    );
};

export default App;

export type TPlanet = {
    id: number;
    planet: string;
    color: string;
    buttonColor: string;
    fillColor: string;
    text: string;
    rotationTime: string;
    revolutionTime: string;
    radius: number;
    averageTemp: number;
    planetImagePath: string;
    planetInternal: string;
    planetSurface: string;
};

export const planets: TPlanet[] = [
    {
        id: 1,
        planet: 'mercury',
        color: 'bg-[#DEF4FC]',
        buttonColor: 'border-[#419EBB]',
        fillColor: '#6495A7',
        text: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        rotationTime: '58.6 days',
        revolutionTime: '87.97 days',
        radius: 2439.7,
        averageTemp: 430,
        planetImagePath: 'src/assets/planet-mercury.svg',
        planetInternal: 'src/assets/planet-mercury-internal.svg',
        planetSurface: 'src/assets/mercurySurface.png',
    },
    {
        id: 2,
        planet: 'venus',
        color: 'bg-[#F7CC7F]',
        buttonColor: 'border-[#EDA249]',
        fillColor: '#B3712B',
        text: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        rotationTime: '243 days',
        revolutionTime: '224.7 days',
        radius: 6051.8,
        averageTemp: 471,
        planetImagePath: 'src/assets/planet-venus.svg',
        planetInternal: 'src/assets/planet-venus-internal.svg',
        planetSurface: 'src/assets/venusSurface.png',
    },
    {
        id: 3,
        planet: 'earth',
        color: 'bg-[#545BFE]',
        buttonColor: 'border-[#6D2ED5]',
        fillColor: '#1C21B2',
        text: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        rotationTime: '0.99 days',
        revolutionTime: '365.26 days',
        radius: 6371,
        averageTemp: 16,
        planetImagePath: 'src/assets/planet-earth.svg',
        planetInternal: 'src/assets/planet-earth-internal.svg',
        planetSurface: 'src/assets/earthSurface.png',
    },
    {
        id: 4,
        planet: 'mars',
        color: 'bg-[#FF6A45]',
        buttonColor: 'border-[#D14C32]',
        fillColor: '#6F1811',
        text: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
        rotationTime: '1.03 days',
        revolutionTime: '1.88 years',
        radius: 3389.5,
        averageTemp: -28,
        planetImagePath: 'src/assets/planet-mars.svg',
        planetInternal: 'src/assets/planet-mars-internal.svg',
        planetSurface: 'src/assets/marsSurface.png',
    },
    {
        id: 5,
        planet: 'jupiter',
        color: 'bg-[#ECAD7A]',
        buttonColor: 'border-[#D83A34]',
        fillColor: '#A15930',
        text: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
        rotationTime: '9.93 hours',
        revolutionTime: '11.86 years',
        radius: 69.911,
        averageTemp: -108,
        planetImagePath: 'src/assets/planet-jupiter.svg',
        planetInternal: 'src/assets/planet-jupiter-internal.svg',
        planetSurface: 'src/assets/jupiterSurface.png',
    },
    {
        id: 6,
        planet: 'saturn',
        color: 'bg-[#FCCB6B]',
        buttonColor: 'border-[#CD5120]',
        fillColor: '#773C14',
        text: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
        rotationTime: '10.8 hours',
        revolutionTime: '29.46 years',
        radius: 58.232,
        averageTemp: -138,
        planetImagePath: 'src/assets/planet-saturn.svg',
        planetInternal: 'src/assets/planet-saturn-internal.svg',
        planetSurface: 'src/assets/saturnSurface.png',
    },
    {
        id: 7,
        planet: 'uranus',
        color: 'bg-[#65F0D5]',
        buttonColor: 'border-[#1EC1A2]',
        fillColor: '#187888',
        text: 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
        rotationTime: '17.2 hours',
        revolutionTime: '84 years',
        radius: 25362,
        averageTemp: -195,
        planetImagePath: 'src/assets/planet-uranus.svg',
        planetInternal: 'src/assets/planet-uranus-internal.svg',
        planetSurface: 'src/assets/uranusSurface.png',
    },
    {
        id: 8,
        planet: 'neptune',
        color: 'bg-[#497EFA]',
        buttonColor: 'border-[#2D68F0]',
        fillColor: '#0C3CA9',
        text: 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
        rotationTime: '16.08 hours',
        revolutionTime: '164.79 years',
        radius: 24622,
        averageTemp: -201,
        planetImagePath: 'src/assets/planet-neptune.svg',
        planetInternal: 'src/assets/planet-neptune-internal.svg',
        planetSurface: 'src/assets/neptuneSurface.png',
    },
];

export const buttonStyles: string =
    'text-[13px] text-["Spartan"] font-700 tracking-[1.929px] uppercase text-center pb-[12px]';

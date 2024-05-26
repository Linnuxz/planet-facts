export type TPlanet = {
    id: number;
    planet: string;
    color: string;
};

export const planets: TPlanet[] = [
    {
        id: 1,
        planet: 'mercury',
        color: 'bg-[#DEF4FC]',
    },
    {
        id: 2,
        planet: 'venus',
        color: 'bg-[#F7CC7F]',
    },
    {
        id: 3,
        planet: 'earth',
        color: 'bg-[#545BFE]',
    },
    {
        id: 4,
        planet: 'mars',
        color: 'bg-[#FF6A45]',
    },
    {
        id: 5,
        planet: 'jupiter',
        color: 'bg-[#ECAD7A]',
    },
    {
        id: 6,
        planet: 'saturn',
        color: 'bg-[#FCCB6B]',
    },
    {
        id: 7,
        planet: 'uranus',
        color: 'bg-[#65F0D5]',
    },
    {
        id: 8,
        planet: 'neptune',
        color: 'bg-[#497EFA]',
    },
];

export const buttonStyles: string =
    'text-[13px] text-["Spartan"] font-700 tracking-[1.929px] uppercase text-center pb-[17px]';

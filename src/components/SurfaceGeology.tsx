type TComponent = {
    fillColor: string;
    isVisible: boolean
};

const SurfaceGeology = ({ fillColor, isVisible }: TComponent) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="163"
            // height="199"
            className={`w-[50px] h-[199px] ${!isVisible ? 'hidden' : ''} absolute top-1/2 left-1/2`}
            viewBox="0 0 163 199"
            fill={fillColor}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M96.9879 37.4698C134.592 44.7041 163 77.7846 163 117.5C163 162.511 126.511 199 81.5 199C36.4888 199 0 162.511 0 117.5C0 77.4052 28.953 44.0728 67.0922 37.2695L82 0L96.9879 37.4698Z"
                fill={fillColor}
            />
        </svg>
    );
};

export default SurfaceGeology;

import { FC } from 'react';

interface IconTrailerProps {
    className?: string;
}

const IconTrailer: FC<IconTrailerProps> = ({ className }) => {
    return (
        <svg
            width="48"
            height="24"
            viewBox="0 0 48 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >

            {/* Trailer Body */}
            <rect
                x="1"
                y="13"
                width="46"
                height="6"
                fill="currentColor"
            />
            {/* Trailer Wheels */}
            <circle
                cx="12"
                cy="20"
                r="2"
                fill="currentColor"
            />
            <circle
                cx="36"
                cy="20"
                r="2"
                fill="currentColor"
            />
        </svg>
    );
};

export default IconTrailer;

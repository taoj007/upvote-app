import React from "react";
import IconButton from "../../elements/IconButton";

interface AddButtonProps {
    onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({onClick}) => {
    return (
        <IconButton
            onClick={onClick}
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="60"
                        d="M256 112v288M400 256H112"
                    />
                </svg>}
        />
    );
};

export default AddButton;

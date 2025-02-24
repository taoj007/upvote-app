import React from "react";
import IconButton from "../../elements/IconButton";
import {DEFAULT_COLOR, SELECTED_COLOR} from "../../constants/constants";

interface UpvoteButtonProps {
    isSelected: boolean;
    onClick: () => void;
}

const UpvoteButton: React.FC<UpvoteButtonProps> = ({isSelected= false, onClick}) => {
    return (
        <IconButton
            onClick={onClick}
            selected={isSelected}
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="20"
                    height="20"
                >
                    <path
                        stroke={isSelected ? SELECTED_COLOR : DEFAULT_COLOR}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="60"
                        fill="none"
                        d="M112 244l144-144 144 144M256 120v292"
                    />
                </svg>}
        />
    );
};

export default UpvoteButton;

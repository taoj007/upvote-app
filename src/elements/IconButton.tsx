import React, {ReactElement} from "react";
import styled from "@emotion/styled";

interface IconButtonProps {
    onClick?: () => void;
    icon: ReactElement<SVGElement>;  // Only allows SVG components
    selected?: boolean;
}

const Button = styled.button<{ selected: boolean }>`
  background-color: ${({selected}) => selected ? "#E5E8FD" : "#F4F6F8"};
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 5px;
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const IconButton: React.FC<IconButtonProps> = ({icon = 'IconButton', onClick, selected = false}) => {
    return (
        <Button
            onClick={onClick && onClick}
            selected={selected}
        >
            {icon}
        </Button>
    );
};

export default IconButton;

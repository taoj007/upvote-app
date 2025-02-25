import React from "react";
import {fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import IconButton from "../elements/IconButton";
import { DEFAULT_BC_COLOR, SELECTED_BC_COLOR } from "../constants/constants";
import {UpvoteProvider, useUpvoteContext} from "../context/UpvoteContext";

const MockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="60"
            d="M256 112v288M400 256H112"
        />
    </svg>
);

const getRandomNumber = (): number => {
    return Math.floor(Math.random() * 3); // Generates a random number between 0 and 2
};

// Test Component to check context value
const TestComponent: React.FC<{clickedIndex: number}> = ({clickedIndex}) => {
    const { isSelectedMatrix, updateIsSelectedMatrix } = useUpvoteContext();
    return (
        <>
            <IconButton icon={<MockIcon/>} onClick={() => updateIsSelectedMatrix(clickedIndex)}/>
            <div data-testid="upvoteSelectedMatrix">{JSON.stringify(isSelectedMatrix)}</div>
        </>
    );
};

describe("IconButton Component", () => {
    test("applies selected state styles if IconButton selected is true", () => {
        const { getByRole } = render(<IconButton icon={<MockIcon/>} selected={true} />);
        expect(getByRole("button")).toHaveStyle(`background-color: ${SELECTED_BC_COLOR}`);
    });

    test("applies default state styles if IconButton selected value is false or undefined", () => {
        const { getByRole, rerender } = render(<IconButton icon={<MockIcon/>}/>);
        expect(getByRole("button")).toHaveStyle(`background-color: ${DEFAULT_BC_COLOR}`);
        rerender(<IconButton icon={<MockIcon />} selected={false} />);
        expect(getByRole("button")).toHaveStyle(`background-color: ${DEFAULT_BC_COLOR}`);
    });
});

describe("IconButton Component with Context", () => {
    test("global state before or after button click", () => {
        const selectedRowIndex = getRandomNumber()
        const expectedInitialMatrix = [false, false, false]
        const expectedClickedMatrix = expectedInitialMatrix.map((item, index)=> index === selectedRowIndex ? !item: item)
        // Check the initial context state value (before click)
        const { getByRole, getByTestId } = render(
            <UpvoteProvider>
                <TestComponent clickedIndex={selectedRowIndex}/>
            </UpvoteProvider>
        );
        expect(getByTestId("upvoteSelectedMatrix").textContent).toBe(JSON.stringify(expectedInitialMatrix));

        // Check the clicked context state value (after click)
        const button = getByRole("button");
        fireEvent.click(button);
        expect(getByTestId("upvoteSelectedMatrix").textContent).toBe(JSON.stringify(expectedClickedMatrix));
    });
});

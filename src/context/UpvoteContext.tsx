import React, {createContext, useContext, useState, useEffect} from "react";
import {LOCAL_STORAGE_IS_SELECTED_MATRIX, LOCAL_STORAGE_UPVOTE_NUMBER_MATRIX} from "../constants/constants";

interface UpvoteContextType {
    upvoteNumberMatrix: number[];
    updateUpvoteNumberMatrix: (index: number) => void;
    isSelectedMatrix: boolean[];
    updateIsSelectedMatrix: (index: number) => void;
}

const UpvoteContext = createContext<UpvoteContextType | undefined>(undefined);

export const useUpvoteContext = () => {
    const context = useContext(UpvoteContext);
    if (!context) throw new Error("useUpvoteContext must be used within UpvoteProvider");
    return context;
};

export const UpvoteProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    // Load initial upvote number matrix from localStorage or use default
    const [upvoteNumberMatrix, setupvoteNumberMatrix] = useState<number[]>(() => {
        const savedData = localStorage.getItem(LOCAL_STORAGE_UPVOTE_NUMBER_MATRIX);
        return savedData ? JSON.parse(savedData) : [3, 2, 5]; // Default values if no saved data
    });

    // Function to add upvote number by 1 to the row by index
    const updateUpvoteNumberMatrix = (index: number) => {
        setupvoteNumberMatrix(prev =>
            prev.map((value, i) => (i === index ? value + 1 : value))
        );
    };

    // Load initial upvote selection matrix from localStorage or use default
    const [isSelectedMatrix, setupIsSelectedMatrix] = useState<boolean[]>(() => {
        const savedData = localStorage.getItem(LOCAL_STORAGE_IS_SELECTED_MATRIX);
        return savedData ? JSON.parse(savedData) : [false, false, false]; // Default values if no saved data
    });

    // Function to change selection state to the row by index
    const updateIsSelectedMatrix = (index: number) => {
        setupIsSelectedMatrix(prev =>
            prev.map((value, i) => (i === index ? !value : value))
        );
    };

    // Save to localStorage whenever upvoteNumberMatrix or isSelectedMatrix changes
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_UPVOTE_NUMBER_MATRIX, JSON.stringify(upvoteNumberMatrix));
        localStorage.setItem(LOCAL_STORAGE_IS_SELECTED_MATRIX, JSON.stringify(isSelectedMatrix));
    }, [upvoteNumberMatrix, isSelectedMatrix]);

    return (
        <UpvoteContext.Provider
            value={{upvoteNumberMatrix, updateUpvoteNumberMatrix, isSelectedMatrix, updateIsSelectedMatrix}}>
            {children}
        </UpvoteContext.Provider>
    );
};

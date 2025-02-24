import React, {createContext, useContext, useState, useEffect} from "react";

// Define the context type
interface UpvoteContextType {
    upvoteNumberMatrix: number[];
    updateUpvoteNumberMatrix: (index: number) => void;
    isSelectedMatrix: boolean[];
    updateIsSelectedMatrix: (index: number) => void;
    resetUpvotes: () => void; // Optional reset function
}

// Create the context
const UpvoteContext = createContext<UpvoteContextType | undefined>(undefined);

// Custom hook to use the context
export const useUpvoteContext = () => {
    const context = useContext(UpvoteContext);
    if (!context) throw new Error("useUpvoteContext must be used within UpvoteProvider");
    return context;
};

// Context provider
export const UpvoteProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const LOCAL_STORAGE_KEY = "upvoteNumberMatrix";
    const LOCAL_STORAGE_KEY_IS_SELECTED = "isSelectedMatrix";

    // Load initial state from localStorage or use default
    const [upvoteNumberMatrix, setupvoteNumberMatrix] = useState<number[]>(() => {
        const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        return savedData ? JSON.parse(savedData) : [3, 2, 5]; // Default values if no saved data
    });

    // Function to increase value at specific index
    const updateUpvoteNumberMatrix = (index: number) => {
        setupvoteNumberMatrix((prev) =>
            prev.map((value, i) => (i === index ? value + 1 : value))
        );
    };

    const [isSelectedMatrix, setupIsSelectedMatrix] = useState<boolean[]>(() => {
        const savedData = localStorage.getItem(LOCAL_STORAGE_KEY_IS_SELECTED);
        return savedData ? JSON.parse(savedData) : [false, false, false]; // Default values if no saved data
    });
    const updateIsSelectedMatrix = (index: number) => {
        setupIsSelectedMatrix((prev) =>
            prev.map((value, i) => (i === index ? !value : value))
        );
    };

    // Save to localStorage whenever upvoteNumberMatrix changes
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(upvoteNumberMatrix));
        localStorage.setItem(LOCAL_STORAGE_KEY_IS_SELECTED, JSON.stringify(isSelectedMatrix));
    }, [upvoteNumberMatrix, isSelectedMatrix]);

    // Optional: Reset function to clear localStorage and reset to default values
    const resetUpvotes = () => {
        setupvoteNumberMatrix([3, 2, 5]); // Reset to default
        localStorage.removeItem(LOCAL_STORAGE_KEY); // Clear from storage
        localStorage.removeItem(LOCAL_STORAGE_KEY_IS_SELECTED); // Clear from storage
    };

    return (
        <UpvoteContext.Provider
            value={{upvoteNumberMatrix, updateUpvoteNumberMatrix, isSelectedMatrix, updateIsSelectedMatrix, resetUpvotes}}>
            {children}
        </UpvoteContext.Provider>
    );
};

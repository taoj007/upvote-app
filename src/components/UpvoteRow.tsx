import React from "react";
import UpvoteButton from "./buttons/UpvoteButton";
import AddButton from "./buttons/AddButton";
import styled from "@emotion/styled";
import {useUpvoteContext} from "../context/UpvoteContext";

interface UpvoteRowProps {
    upVoteNumber: number;
    clickedIndex: number;
}

const UpvoteRow: React.FC<UpvoteRowProps> = ({upVoteNumber, clickedIndex}) => {
    const {updateUpvoteNumberMatrix, updateIsSelectedMatrix, isSelectedMatrix} = useUpvoteContext()

    const listIds = Array.from({length: upVoteNumber}, (_, index) => `list${index + 1}`);
    const RowWrapper = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        column-gap: 16px;
        padding: 16px;
    `;
    const UpvoteWrapper = styled.div`
      width: 90%;
      border: 1px solid gray;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 16px;
      padding: 16px;
    `;
    const BtnWrapper = styled.div`
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      column-gap: 16px;
    `;

    return (
        <RowWrapper>
            <UpvoteWrapper>
                {listIds.map((_, index) =>
                    <UpvoteButton
                        onClick={() => {
                            updateIsSelectedMatrix(clickedIndex)
                        }}
                        key={index}
                        isSelected={isSelectedMatrix[clickedIndex]}
                    />)}
            </UpvoteWrapper>
            <BtnWrapper>
                <AddButton onClick={
                    () => {
                        updateUpvoteNumberMatrix(clickedIndex)
                    }
                }/>
            </BtnWrapper>

        </RowWrapper>
    );
};

export default UpvoteRow;

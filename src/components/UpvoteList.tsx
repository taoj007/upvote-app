import React from "react";
import UpvoteRow from "./UpvoteRow";
import {useUpvoteContext} from "../context/UpvoteContext";
import styled from "@emotion/styled";

const UpvoteList: React.FC = () => {
    const {upvoteNumberMatrix} = useUpvoteContext()

    const UpvoteListWrapper = styled.div`
      width: 90%;
      margin: auto;
      padding: 24px;
      display: flex;
      flex-direction: column;
      row-gap: 24px;
      border: 2px solid gray;
      border-radius: 16px;
    `;
    return (
        <UpvoteListWrapper>
            {upvoteNumberMatrix.map((voteNumber, index)=><UpvoteRow key={index} upVoteNumber={voteNumber} rowOrder={index}/>)}
        </UpvoteListWrapper>
    );
};

export default UpvoteList;

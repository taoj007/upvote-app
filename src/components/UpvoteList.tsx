import React from "react";
import UpvoteRow from "./UpvoteRow";
import {useUpvoteContext} from "../context/UpvoteContext";

const UpvoteList: React.FC = () => {
    const {upvoteNumberMatrix} = useUpvoteContext()

    return (
        <div>
            {upvoteNumberMatrix.map((voteNumber, index)=><UpvoteRow key={index} upVoteNumber={voteNumber} clickedIndex={index}/>)}
        </div>
    );
};

export default UpvoteList;

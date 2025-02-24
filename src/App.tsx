import React from "react";
import UpvoteList from "./components/UpvoteList";
import styled from "@emotion/styled";

const App: React.FC = () => {
    const AppWrapper = styled.div`
      text-align: center;
      h1 {
        margin: 48px auto 24px auto;
      }
    `;
    return (
        <AppWrapper>
            <h1>Upvote List</h1>
            <p>Please refer to <a href="https://github.com/taoj007/upvote-app/tree/main" target='_blank'>Github repo Link</a></p>
            <UpvoteList/>
        </AppWrapper>
    );
};

export default App;

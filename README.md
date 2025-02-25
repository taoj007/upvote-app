# Upvote App
A simple upvote system built with React/Typescript, using React Context API for global state management and Emotion for styling.

🔗 Live Demo: [Upvote App](https://upvote-tao-jiang.netlify.app/).
## Project File Structure
```
upvote-app/
├── public/                         
├── src/
│   ├── components/                 
│   │   ├── buttons/                # Button component variants
│   │   │   ├── AddButton.tsx            # Button to add more upvotes
│   │   │   ├── UpvoteButton.tsx         # Button to toggle select state
│   │   ├── UpvoteList.tsx          # Manages multiple UpvoteRows
│   │   ├── UpvoteRow.tsx           # Manages a group of UpvoteButtons
│   ├── constants/                    
│   │   ├── constants.ts            # Store constants
│   ├── context/                    
│   │   ├── UpvoteContext.tsx       # React Context for global state management
│   ├── elements/                   
│   │   ├── IconButton.test.tsx     # Unit test for IconButton
│   │   ├── IconButton.tsx          # Primitive, reusable button element 
│   ├── App.tsx                     
│   ├── global.css                  # Global styles
│   ├── index.tsx                  
├── package.json                    
├── README.md                       
└── ...
```
## Features
- Reusable Components – Modular Button, UpvoteRow, and UpvoteList components.
- React Context API – Manages upvote state globally.
- Local Storage Persistence – Keeps upvote data in the browser after page refresh.
- Styled with Emotion – Custom styles with the @emotion/styled library.
- Unit Testing with Jest – Tests button styling upon selected parameter and click functionality.


## Github Repository
🔗 [GitHub Link](https://github.com/taoj007/upvote-app/tree/main)

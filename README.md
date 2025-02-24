# Upvote App
A simple upvote system built with React/Typescript, using React Context API for global state management and Emotion for styling.

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
│   ├── context/                    
│   │   ├── UpvoteContext.tsx       # React Context for global state management
│   ├── elements/                   
│   │   ├── IconButton.tsx          # Primitive, reusable button element 
│   ├── helper/                   
│   │   ├── constants.ts            # Stores global constants 
│   ├── App.tsx                     
│   ├── global.css                  # Global styles
│   ├── index.tsx                  
├── package.json                    
├── README.md                       
└── ...

```

## Features
- ✅ Reusable Components – Modular button, list, and row components.
- ✅ React Context API – Manages upvote state globally.
- ✅ Local Storage Persistence – Keeps upvote data even after page refresh.
- ✅ Styled with Emotion – Custom styles with the @emotion/styled library.

## Github Repository
🔗 [GitHub Link](https://github.com/taoj007/upvote-app/tree/main)

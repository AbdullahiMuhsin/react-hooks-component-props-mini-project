import React from "react";
import Article from "./Article";

// This component will return a JSX that represents a main element containing a list of Article components
// Each Article component represents an individual post in the blog

function ArticleList({ posts }) { // This is the function declaration for the ArticleList component
  return ( // This is the return statement that will be rendered
    <main> {/* This is the main element that will contain the list of articles */}
      {posts.map((post) => ( // This is a map function that will loop through each post in the posts array
        <Article 
          key={post.id} 
          title={post.title} 
          date={post.date} 
          preview={post.preview} 
          minutes={post.minutes} 
        /> 
      ))} 
    </main> 
  );
}

export default ArticleList;
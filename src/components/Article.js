import React from "react";


// It takes in an object of props as an argument

// The component returns a JSX element that represents an article

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Calculating the number of minutes to read based on the number of minutes property
  
  const minutesToRead = minutes < 30 
    ? "☕️".repeat(Math.ceil(minutes / 5)) 
    : "🍱".repeat(Math.ceil(minutes / 10));

  // Returning  JSX element that represents an article
  return (
    <article>
      {/* Displaying the title of the article */}
      <h3>{title}</h3>

      {/* Display the date the article was published */}
      <small>{date} - {minutesToRead} {minutes} min read</small>

      {/* Displaying a preview of the article */}
      <p>{preview}</p>
    </article>
  );
}

export default Article;

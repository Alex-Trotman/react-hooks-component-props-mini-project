import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const articles = posts.map((art) => {
    return (
      <Article
        key={art.title}
        title={art.title}
        date={art.date}
        preview={art.preview}
      />
    );
  });

  return <main>{articles}</main>;
}

export default ArticleList;

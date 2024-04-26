import React from 'react'
import Article from "./Article";

function ArticleList(posts) {
  const blogArticles = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ));
  return <main>{blogArticles}</main>;
}

export default ArticleList

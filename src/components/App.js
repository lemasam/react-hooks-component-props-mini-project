import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";
import js from "@eslint/js";


console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!

      <About  image={blogData.image} about={blogData.about}/>
      <Header name={blogData.name} />
      <ArticleList blogPosts ={blogPosts} />
    </div>
  );
}

export default App;

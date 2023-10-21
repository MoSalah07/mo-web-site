import React from "react";
import AnimatedText from "../../../components/animated/AnimatedText";
import FeaturedArticles from "../../../components/articles/FeaturedArticles";
import ArticleImg1 from "../../../public/images/articles/create loading screen in react js.jpg";
import ArticleImg2 from "../../../public/images/articles/create modal component in react using react portals.png";
import ArticleImg3 from "../../../public/images/articles/form validation in reactjs using custom react hook.png";
import Article from "../../../components/articles/Article";

function ArticlesPage() {
  return (
    <>
      <title>Articles Page</title>
      <div className="articles">
        <AnimatedText text={`Words Can Change The World !`} />
        <ul className="list">
          <FeaturedArticles
            title={`Build A Custom Pagination Component In React Js From Scratch`}
            summary={`Learn How To Build A Custom Pagination Component In React Js From Scratch Follow this step-by-step guide to integrate pagination component in your ReactJS Project`}
            time="9 min read"
            link={`/`}
            img={ArticleImg1}
          />
          <FeaturedArticles
            title={`Build A Custom Pagination Component In React Js From Scratch`}
            summary={`Learn How To Build A Custom Pagination Component In React Js From Scratch Follow this step-by-step guide to integrate pagination component in your ReactJS Project`}
            time="15 min read"
            link={`/`}
            img={ArticleImg2}
          />
        </ul>
        <div className="heading-articles">
          <h2 className="">All Articles</h2>
        </div>
        <ul>
          <Article
            title={`From Validation In ReactJS, Build A Reusable Custom Hook For Inputs And Error Handling`}
            date={`March 22 2023`}
            link={`/`}
            img={ArticleImg3}
          />
          <Article
            title={`From Validation In ReactJS, Build A Reusable Custom Hook For Inputs And Error Handling`}
            date={`March 22 2023`}
            link={`/`}
            img={ArticleImg3}
          />
          <Article
            title={`From Validation In ReactJS, Build A Reusable Custom Hook For Inputs And Error Handling`}
            date={`March 22 2023`}
            link={`/`}
            img={ArticleImg3}
          />{" "}
          <Article
            title={`From Validation In ReactJS, Build A Reusable Custom Hook For Inputs And Error Handling`}
            date={`March 22 2023`}
            link={`/`}
            img={ArticleImg3}
          />{" "}
          <Article
            title={`From Validation In ReactJS, Build A Reusable Custom Hook For Inputs And Error Handling`}
            date={`March 22 2023`}
            link={`/`}
            img={ArticleImg3}
          />{" "}
          <Article
            title={`From Validation In ReactJS, Build A Reusable Custom Hook For Inputs And Error Handling`}
            date={`March 22 2023`}
            link={`/`}
            img={ArticleImg3}
          />{" "}
          <Article
            title={`From Validation In ReactJS, Build A Reusable Custom Hook For Inputs And Error Handling`}
            date={`March 22 2023`}
            link={`/`}
            img={ArticleImg3}
          />
        </ul>
      </div>
    </>
  );
}

export default ArticlesPage;

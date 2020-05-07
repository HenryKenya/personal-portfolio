import React, { Component } from "react";
import ArticleItem from "./ArticleItem";

export class ArticlePage extends Component {
  state = {
    article: {},
    isLoaded: false,
  };

  componentDidMount() {
    console.log(this.props);
    const url = `https://chronicles.katanawebworld.com/wp-json/wp/v2/posts?slug=${this.props.match.params.slug}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          article: data[0],
          isLoaded: true,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    const { article, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <>
          <ArticleItem article={article} isSingleArticle={true} />
        </>
      );
    }
    return <h3>Loading...</h3>;
  }
}

export default ArticlePage;

import React, { Component } from "react";

class Articles extends Component {
  state = {
    articles: [],
    isLoaded: false,
  };

  componentDidMount() {
    const url = "https://chronicles.katanawebworld.com/wp-json/wp/v2/posts";
    fetch(url)
      .then((res) =>
        this.setState({
          articles: res.data,
          isLoaded: true,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state);
    return <div></div>;
  }
}

export default Articles;

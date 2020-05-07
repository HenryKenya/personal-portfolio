import React, { Component } from "react";

class ArticleItem extends Component {
  state = {
    imageUrl: "",
    isLoaded: false,
  };

  componentDidMount() {
    const { featured_media } = this.props.article;
    const mediaUrl = `https://chronicles.katanawebworld.com/wp-json/wp/v2/media/${featured_media}`;
    fetch(mediaUrl)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          imageUrl: data.media_details.sizes.full.source_url,
          isLoaded: true,
        })
      );
  }

  render() {
    const { title, excerpt } = this.props.article;
    const { imageUrl, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          <img src={imageUrl} alt={title.rendered} style={{ width: "800px" }} />
          <h2>{title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
        </div>
      );
    }

    return null;
  }
}

export default ArticleItem;

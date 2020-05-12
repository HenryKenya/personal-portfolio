import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ArticleItem extends Component {
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
    const { slug, title, excerpt, content } = this.props.article;
    const { imageUrl, isLoaded } = this.state;
    console.log(this.props);
    if (isLoaded) {
      if (!this.props.isSingleArticle) {
        return (
          <div className="single-article">
            <img
              src={imageUrl}
              alt={title.rendered}
              className="article-featured-image"
            />
            <div className="article-content">
              <h2>{title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
              <Link to={`/article/${slug}`}>
                <i className="fa fa-file-text" aria-hidden="true"></i> Read full
                article
              </Link>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <img
              src={imageUrl}
              alt={title.rendered}
              style={{ width: "800px" }}
            />
            <h2>{title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: content.rendered }}></div>
          </div>
        );
      }
    }

    return null;
  }
}

export default ArticleItem;

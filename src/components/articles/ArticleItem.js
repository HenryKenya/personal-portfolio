import React, { Component } from "react";
import { Link } from "react-router-dom";
import RenderHTML from "../common/RenderHTML";
const moment = require("moment"); // require moment

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
    const { slug, title, excerpt, content, date } = this.props.article;
    const { imageUrl, isLoaded } = this.state;

    const formattedDate = moment(new Date(date));
    const day = formattedDate.day() + 1;
    const month = formattedDate.format("MMM");

    if (isLoaded) {
      if (!this.props.isSingleArticle) {
        return (
          <div className="single-article">
            <div className="article-published-date">
              <h4>
                {day} <br />
                <span>
                  {month} {formattedDate.year()}
                </span>
              </h4>
            </div>
            <div className="article-content">
              <RenderHTML html={title.rendered} />
              <RenderHTML html={excerpt.rendered} />
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

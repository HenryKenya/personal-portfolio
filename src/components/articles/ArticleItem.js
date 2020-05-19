import React, { Component } from "react";
import { Link } from "react-router-dom";
import RenderHTML from "../common/RenderHTML";
const moment = require("moment"); // require moment

export class ArticleItem extends Component {
  render() {
    const { slug, title, excerpt, date } = this.props.article;

    const formattedDate = moment(new Date(date));
    const day = formattedDate.day() + 1;
    const month = formattedDate.format("MMM");

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
          <Link
            to={{
              pathname: `/article/${slug}`,
              state: this.props.article,
            }}
          >
            <i className="fa fa-file-text" aria-hidden="true"></i> Read full
            article
          </Link>
        </div>
      </div>
    );
  }
}

export default ArticleItem;

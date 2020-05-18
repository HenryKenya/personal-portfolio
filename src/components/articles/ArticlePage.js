import React, { Component } from "react";
import SingleArticleItem from "./SingleArticleItem";
import { connect } from "react-redux";
import { loadArticles } from "../../redux/actions/articlesActions";
import { loadMedia } from "../../redux/actions/mediaActions";
import PropTypes from "prop-types";
import Loader from "../common/Loader";

export class ArticlePage extends Component {
  componentDidMount() {
    const { articles, loadArticles, media, loadMedia } = this.props;
    if (articles.length === 0)
      loadArticles().catch((error) => console.log(error));

    if (media.length === 0) loadMedia().catch((error) => console.log(error));
  }

  render() {
    console.log(this.props);
    const { article, articles, singleMedia, media } = this.props;

    return articles.length > 0 && media.length > 0 ? (
      <SingleArticleItem article={article} media={singleMedia} />
    ) : (
      <Loader />
    );
  }
}

ArticlePage.propTypes = {
  article: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
  loadArticles: PropTypes.func.isRequired,
  loadMedia: PropTypes.func.isRequired,
  media: PropTypes.array.isRequired,
  singleMedia: PropTypes.object.isRequired,
};

function getArticleBySlug(articles, slug) {
  return articles.find((article) => article.slug === slug) || null;
}

function getMediaById(media, id) {
  return media.find((picture) => picture.id === id) || null;
}

function mapStateToProp(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const article = getArticleBySlug(state.articles, slug);
  const id = article.featured_media;
  const singleMedia = getMediaById(state.media, id);
  return {
    article,
    articles: state.articles,
    singleMedia,
    media: state.media,
  };
}

const mapDispatchToProp = {
  loadArticles,
  loadMedia,
};

export default connect(mapStateToProp, mapDispatchToProp)(ArticlePage);

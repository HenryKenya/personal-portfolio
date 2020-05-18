import React, { Component } from "react";
import SingleArticleItem from "./SingleArticleItem";
import { connect } from "react-redux";
import { loadArticles } from "../../redux/actions/articlesActions";
import { loadMedia } from "../../redux/actions/mediaActions";
import PropTypes from "prop-types";
import Loader from "../common/Loader";

export class ArticlePage extends Component {
  componentDidMount() {
    const { articles, loadArticles, article, loadMedia } = this.props;

    if (articles.length === 0) {
      loadArticles().catch((error) => console.log(error));
    }

    if (article.featured_media) {
      loadMedia(article.featured_media).catch((error) => console.log(error));
    }
  }

  render() {
    const { article, singleMedia } = this.props;
    console.log(singleMedia);
    return article.featured_media && singleMedia.id ? (
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
  console.log(media);
  console.log(id);
  return media[0];
}

function mapStateToProp(state, ownProps) {
  const slug = ownProps.match.params.slug;

  const article =
    state.articles.length > 0 ? getArticleBySlug(state.articles, slug) : {};

  const singleMedia =
    state.media.length > 0 && article.featured_media
      ? getMediaById(state.media, article.featured_media)
      : {};
  return {
    article,
    articles: state.articles,
    media: state.media,
    singleMedia,
  };
}

const mapDispatchToProp = {
  loadArticles,
  loadMedia,
};

export default connect(mapStateToProp, mapDispatchToProp)(ArticlePage);

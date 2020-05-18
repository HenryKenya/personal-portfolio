import React, { Component } from "react";
import ArticleItem from "./ArticleItem";
import Loader from "../common/Loader";
import { connect } from "react-redux";
import { loadArticles } from "../../redux/actions/articlesActions";
import PropTypes from "prop-types";

export class ArticlePage extends Component {
  render() {
    const { article } = this.props;

    return <ArticleItem article={article} isSingleArticle={true} />;
  }
}

ArticlePage.propTypes = {
  article: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
  loadArticles: PropTypes.func.isRequired,
};

function getArticleBySlug(articles, slug) {
  return articles.find((article) => article.slug === slug) || null;
}

function mapStateToProp(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const article = getArticleBySlug(state.articles, slug);
  return {
    article,
    articles: state.articles,
  };
}

const mapDispatchToProp = {
  loadArticles,
};

export default connect(mapStateToProp, mapDispatchToProp)(ArticlePage);

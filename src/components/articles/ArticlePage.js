import React, { Component } from "react";
import ArticleItem from "./ArticleItem";
import { connect } from "react-redux";
import { loadArticles } from "../../redux/actions/articlesActions";
import PropTypes from "prop-types";
import Loader from "../common/Loader";

export class ArticlePage extends Component {
  componentDidMount() {
    const { articles, loadArticles } = this.props;
    if (articles.length === 0) {
      loadArticles().catch((error) => console.log(error));
    }
  }

  render() {
    const { article, articles } = this.props;

    return articles.length > 0 ? (
      <ArticleItem article={article} isSingleArticle={true} />
    ) : (
      <Loader />
    );
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

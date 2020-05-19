import React, { Component } from "react";
import ArticleItem from "./ArticleItem";
import Loader from "../common/Loader";
import { connect } from "react-redux";
import { loadArticles } from "../../redux/actions/articlesActions";
import PropTypes from "prop-types";

class Articles extends Component {
  componentDidMount() {
    const { articles, loadArticles, loading } = this.props;
    console.log(loading);
    if (articles.length === 0) {
      loadArticles().catch((error) => console.log(error));
    }
  }

  render() {
    const { articles } = this.props;
    if (articles.length > 0) {
      return (
        <div className="container">
          <div className="row">
            {articles.map((article, index) => (
              <div className="col-md-12" key={article.id}>
                <ArticleItem article={article} />
                <hr className={index < articles.length - 1 ? "show" : "hide"} />
              </div>
            ))}
          </div>
        </div>
      );
    }

    return <Loader />;
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  loadArticles: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    articles: state.articles,
    loading: state.apiCallsInProgress,
  };
}

const mapDispatchToProps = {
  loadArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);

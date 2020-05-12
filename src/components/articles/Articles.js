import React, { Component } from "react";
import ArticleItem from "./ArticleItem";
import { connect } from "react-redux";
import { loadArticles } from "../../redux/actions/articlesActions";
import PropTypes from "prop-types";

class Articles extends Component {
  componentDidMount() {
    const { articles, loadArticles } = this.props;
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
              <div className="col-md-8 col-offset-md-2" key={article.id}>
                <ArticleItem article={article} />
                <hr className={index < articles.length - 1 ? "show" : "hide"} />
              </div>
            ))}
          </div>
        </div>
      );
    }

    return <h3>Loading...</h3>;
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}

const mapDispatchToProps = {
  loadArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);

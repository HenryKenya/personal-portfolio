import React, { Component } from "react";
import SingleArticleItem from "./SingleArticleItem";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as mediaActions from "../../redux/actions/mediaActions";
import PropTypes from "prop-types";
import Loader from "../common/Loader";

export class ArticlePage extends Component {
  componentDidMount() {
    console.log("component did update");
    const { location, actions } = this.props;
    console.log(location.state);
    actions
      .loadMedia(location.state.featured_media)
      .catch((error) => console.log(error));
  }

  render() {
    const { article, singleMedia } = this.props;
    //ßconsole.log(singleMedia);
    return Object.keys(singleMedia).length === 0 ? (
      <Loader />
    ) : (
      <SingleArticleItem article={article} media={singleMedia} />
    );
  }
}

ArticlePage.propTypes = {
  article: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  media: PropTypes.array.isRequired,
  singleMedia: PropTypes.object.isRequired,
};

function getMediaById(media, id) {
  return media.find((s) => s.id === id);
}

function mapStateToProps(state, ownProps) {
  const article = ownProps.location.state;

  return {
    article,
    media: state.media,
    singleMedia:
      article.featured_media && state.media.length > 0
        ? getMediaById(state.media, article.featured_media)
        : {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMedia: bindActionCreators(mediaActions.loadMedia, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);

import React from "react";
import RenderHTML from "../common/RenderHTML";

const SingleArticleItem = (props) => {
  const { title, content } = props.article;

  //console.log(props.media);
  const imageUrl = props.media.media_details.sizes.full.source_url;
  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <img src={imageUrl} alt={title.rendered} style={{ width: "100%" }} />
          <h2>{title.rendered}</h2>
          <RenderHTML html={content.rendered} />
        </div>
      </div>
    </div>
  );
};

export default SingleArticleItem;

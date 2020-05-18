import React from "react";
const RenderHTML = (props) => (
  <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
);
export default RenderHTML;

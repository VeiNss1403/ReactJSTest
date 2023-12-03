import React from "react";

const LikeButtonComponent = (props) => {
  const { dataHref } = props;
  return (
    <div style={{ marginTop: "8px" }}>
      <div
        className="fb-share-button"
        data-href={dataHref}
        data-width=""
        data-layout="button"
        data-action=""
        data-size="large"
      ></div>
    </div>
  );
};

export default LikeButtonComponent;

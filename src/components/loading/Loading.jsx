import React from "react";
import "./loading.scss";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <ReactLoading
      className="Loading"
      type={"bars"}
      color={"#1e1e1e"}
      height={"100vh"}
      width={"100vw"}
    />
  );
};

export default Loading;

import React from "react";

const Loader = ({ text = "Loading" }) => (
  <div className="d-flex flex-column justify-content-center">
    <strong>{text}</strong>
    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
  </div>
);

export default Loader;

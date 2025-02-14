import React from "react";
import { Route } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="App">
      <Route path="/" component={Homepage} />
    </div>
  );
};

export default Homepage;

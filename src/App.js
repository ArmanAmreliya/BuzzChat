import "./App.css";

import { Route } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
function App() {
  <div className="App">
    <Route path="/" component={Homepage} exact />
    <Route path="/chat" component={Chatpage} />
  </div>;
}
export default App;

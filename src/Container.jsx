import React from "react";

import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <Cursor/>
      {/* <ScrollProgress/> */}
      <Home />
    </React.Fragment>
  );
};

export default App;

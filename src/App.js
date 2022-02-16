import React from "react";

import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import AudioPlayer from "./components/AudioPlayer";
import Home from "./pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <Cursor/>
      <ScrollProgress/>
      <AudioPlayer/>
      <Home />
    </React.Fragment>
  );
};

export default App;

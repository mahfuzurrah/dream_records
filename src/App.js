import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PrimaryArtistManage from "./Pages/PrimaryArtistManage";

function App() {
  return (
    <div>
      <Router>
      <PrimaryArtistManage />
    </Router>
    </div>
  );
}

export default App;

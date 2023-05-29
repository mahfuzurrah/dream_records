import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import PrimaryArtistManage from "./Pages/PrimaryArtistManage";

function App() {
  return (
    <div>
      <Router>
      <Route path="/" element={<PrimaryArtistManage />} />
    </Router>
    </div>
  );
}

export default App;

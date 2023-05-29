import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrimaryArtistManage from "./Pages/PrimaryArtistManage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PrimaryArtistManage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

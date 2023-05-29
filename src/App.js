import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrimaryArtistManage from "./Pages/PrimaryArtistManage";
import AudioSubmission from "./Pages/AudioSubmission";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PrimaryArtistManage />} />
          <Route path="aa" element={<AudioSubmission />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

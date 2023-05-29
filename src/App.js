import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrimaryArtistManage from "./Pages/PrimaryArtistManage";
import AudioSubmission from "./Pages/AudioSubmission";
import Earning from "./Pages/Earning";
import ArtistChannelRequest from "./Pages/ArtistChannelRequest";
import ContentIdRequest from "./Pages/ContentIdRequest";
import AddClaimRelease from "./Pages/AddClaimRelease";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PrimaryArtistManage />} />
          <Route path="a" element={<AudioSubmission />} />
          <Route path="e" element={<Earning />} />
          <Route path="ar" element={<ArtistChannelRequest />} />
          <Route path="c" element={<ContentIdRequest />} />
          <Route path="c" element={<AddClaimRelease />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

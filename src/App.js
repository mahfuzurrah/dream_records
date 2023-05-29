import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrimaryArtistManage from "./Pages/PrimaryArtistManage";
import AudioSubmission from "./Pages/AudioSubmission";
import Earning from "./Pages/Earning";
import ArtistChannelRequest from "./Pages/ArtistChannelRequest";
import ContentIdRequest from "./Pages/ContentIdRequest";
import AddClaimRelease from "./Pages/AddClaimRelease";
import Analytics from './Pages/Analytics';
import Catalog from './Pages/Catalog';
import Dashboard from './Pages/Dashboard';
import ReleaseAudio from './Pages/ReleaseAudio';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="release-audio" element={<ReleaseAudio />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="primary_artist_manage" element={<PrimaryArtistManage />} />
          <Route path="add_claim_release" element={<AddClaimRelease />} />
          <Route path="content_id_request" element={<ContentIdRequest />} />
          <Route path="artist_channel_request" element={<ArtistChannelRequest />} />
          <Route path="earning" element={<Earning />} />
          <Route path="audio_submission" element={<AudioSubmission />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

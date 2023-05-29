import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Component/Layout/MainLayout';
import Dashboard from './Pages/Dashboard';
import ReleaseAudio from './Pages/ReleaseAudio';
import ArtistChannelRequest from './Pages/ArtistChannelRequest';
import Earning from './Pages/Earning';
import Analytics from './Pages/Analytics';
import Catalog from './Pages/Catalog';
import ContentIdRequest from './Pages/ContentIdRequest';
import PrimaryArtistManage from './Pages/PrimaryArtistManage';
import AddClaimRelease from './Pages/AddClaimRelease';
import AudioSubmission from './Pages/AudioSubmission';
import EditPrimaryArtist from './Pages/EditPrimaryArtist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="release-audio" element={<ReleaseAudio />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="primary_artist_manage" element={<PrimaryArtistManage />} />
          <Route path="add_claim_release" element={<AddClaimRelease />} />
          <Route path="content_id_request" element={<ContentIdRequest />} />
          <Route path="artist_channel_request" element={<ArtistChannelRequest />} />
          <Route path="earning" element={<Earning />} />
          <Route path="audio_submission" element={<AudioSubmission />} />
          <Route path="edit_primary_artist" element={<EditPrimaryArtist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

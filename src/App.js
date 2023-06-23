import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Component/Layout/MainLayout";
import Dashboard from "./Pages/Dashboard";
import ReleaseAudio from "./Pages/ReleaseAudio";
import ArtistChannelRequest from "./Pages/ArtistChannelRequest";
import Overview from "./Pages/Overview";
import Analytics from "./Pages/Analytics";
import ApprovedCatalog from "./Pages/ApprovedCatalog";
import DraftCatalog from "./Pages/DraftCatalog";
import PendingCatalog from "./Pages/PendingCatalog";
import ContentIdRequest from "./Pages/ContentIdRequest";
import PrimaryArtistManage from "./Pages/PrimaryArtistManage";
import AddClaimRelease from "./Pages/AddClaimRelease";
import AudioSubmission from "./Pages/AudioSubmission";
import EditPrimaryArtist from "./Pages/EditPrimaryArtist";
import WithdrawA from "./Pages/WithdrawA";
import CatalogDetails from "./Pages/CatalogDetails";
import SupportCenter from "./Pages/SupportCenter";
import LabelManage from "./Pages/LabelManage";
import Profile from "./Pages/Profile";
import CallerTune from "./Pages/CallerTune";
import LogIn from "./Pages/LogIn";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="release-audio" element={<ReleaseAudio />} />
            <Route path="approved" element={<ApprovedCatalog />} />
            <Route path="draft" element={<DraftCatalog />} />
            <Route path="pending" element={<PendingCatalog />} />
            <Route path="analytics" element={<Analytics />} />
            <Route
              path="primary_artist_manage"
              element={<PrimaryArtistManage />}
            />
            <Route path="add_claim_release" element={<AddClaimRelease />} />
            <Route path="content_id_request" element={<ContentIdRequest />} />
            <Route
              path="artist_channel_request"
              element={<ArtistChannelRequest />}
            />
            <Route path="overview" element={<Overview />} />
            <Route path="withdraw" element={<WithdrawA />} />
            <Route path="audio_submission" element={<AudioSubmission />} />
            <Route path="edit_primary_artist" element={<EditPrimaryArtist />} />
            <Route path="catalog_details" element={<CatalogDetails />} />
            <Route path="support_center" element={<SupportCenter />} />
            <Route path="label_manage" element={<LabelManage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="caller_tune" element={<CallerTune />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

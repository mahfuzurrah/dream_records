import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimaryArtistManage from "./Pages/PrimaryArtistManage";

function App() {
  return (
    <div>
      <PrimaryArtistManage />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<EditPrimaryArtist />}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

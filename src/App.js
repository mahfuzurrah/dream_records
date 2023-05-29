import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditPrimaryArtist from "./Pages/EditPrimaryArtist";

function App() {
  return (
    <div>
      <EditPrimaryArtist />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<EditPrimaryArtist />}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

import React from "react";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Dashboard />
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

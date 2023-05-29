import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './Component/Layout/MainLayout';
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<MainLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

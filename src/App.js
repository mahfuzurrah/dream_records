import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './Component/Layout/MainLayout';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <>
      {/* <Router>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router> */}
      <Dashboard/>
    </>
  );
}

export default App;

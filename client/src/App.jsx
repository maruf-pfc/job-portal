import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Application from "./pages/Application";
import ApplyJob from "./pages/ApplyJob";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/applications" element={<Application />} />
      <Route path="/apply-job/:id" element={<ApplyJob />} />
    </Routes>
  );
}

export default App;

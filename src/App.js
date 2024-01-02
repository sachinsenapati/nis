import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ViewAttendence from "./pages/ViewAttendence";
import ViewInternalMark from "./pages/ViewInternalMark";
import Welcome from "./pages/Welcome";
import ViewDues from "./pages/ViewDues";
import ViewClearance from "./pages/ViewClearance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/desk/view-attendance" element={<ViewAttendence />} />
        <Route path="/desk/view-marks" element={<ViewInternalMark />} />
        <Route path="/desk/view-dues" element={<ViewDues />} />
        <Route path="/desk/view-clearnance" element={<ViewClearance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

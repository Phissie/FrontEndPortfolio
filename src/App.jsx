import ProjectPage from "./pages/ProjectsPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CommunitiesPage from "./pages/CommunitiesPage";
import HackathonsPage from "./pages/HackathonsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/projects" />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/hackathons" element={<HackathonsPage />} />
        <Route path="/communities" element={<CommunitiesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

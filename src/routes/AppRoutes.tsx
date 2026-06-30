import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Overview from "../pages/Overview";
import Problem from "../pages/Problem";
import Market from "../pages/Market";
import Users from "../pages/Users";
import Competitors from "../pages/Competitors";
import Vision from "../pages/Vision";
import MVP from "../pages/MVP";
import Premium from "../pages/Premium";
import Moat from "../pages/Moat";
import GTM from "../pages/GTM";
import Risk from "../pages/Risk";
import Roadmap from "../pages/Roadmap";

import DocumentationLayout from "../layouts/DocumentationLayout";
import Decision from "../pages/Decision";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <DocumentationLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/market" element={<Market />} />
          <Route path="/users" element={<Users />} />
          <Route path="/competitors" element={<Competitors />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mvp" element={<MVP />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/moat" element={<Moat />} />
          <Route path="/gtm" element={<GTM />} />
          <Route path="/risk" element={<Risk />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/decision" element={<Decision />} />
        </Routes>
      </DocumentationLayout>
    </BrowserRouter>
  );
}
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import App from "./App";
import Resume from "./Resume";
import Art from "./Art";
import Mood from "./Mood";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/art" element={<Art />} />
        <Route path="/mood" element={<Mood />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </StrictMode>
);

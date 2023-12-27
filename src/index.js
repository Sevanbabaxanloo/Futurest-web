import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ourrules from "./routes/OurRules.js";
import Privacypolicy from "./routes/PrivacyPolicy.js";
import Termsofuse from "./routes/TermsOfUse.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ourrules" element={<Ourrules />} />
      <Route path="/privacypolicy" element={<Privacypolicy />} />
      <Route path="/termsofuse" element={<Termsofuse />} />
    </Routes>
  </BrowserRouter>
);

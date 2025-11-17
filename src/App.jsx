
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Services from "./pages/Services/Services";
// import NotFound from "./routes/NotFound";


// lazy page imports (code splitting)
const HomePage   = lazy(() => import("./pages/Homepage/Homepage"));
const AboutUs    = lazy(() => import("./pages/AboutUs/AboutUs"));
// const Services   = lazy(() => import("./pages/Services/Services"));
const Contact    = lazy(() => import("./pages/Contact/Contact"));
const NotFound   = lazy(() => import("./pages/NotFound/NotFound"));

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Layout route - shared UI */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

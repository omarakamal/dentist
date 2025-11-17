import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./MainLayout.css"; // optional layout-wide styling

export default function MainLayout() {
  const progressBarRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const bar = progressBarRef.current;
    if (!bar) return;

    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const docHeight = doc.scrollHeight - doc.clientHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      bar.style.width = `${percent}%`;
      bar.setAttribute("aria-valuenow", Math.round(percent));

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Global Scroll Progress Bar */}
      <div id="scroll-progress-container">
        <div
          id="scroll-progress-bar"
          ref={progressBarRef}
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="0"
          aria-label="Page scroll progress"
        />
      </div>

      <TopBar />
      <Navbar />

      {/* Here every routed page is rendered */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

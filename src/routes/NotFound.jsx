import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
  React.useEffect(()=> { document.title = "404 — Page Not Found"; }, []);
  return (
    <div style={{ padding: 80, textAlign: "center" }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <p><Link to="/">Return to homepage</Link></p>
    </div>
  );
}

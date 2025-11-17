import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  React.useEffect(() => { document.title = "404 — Not Found"; }, []);
  return (
    <div style={{ padding: 80, textAlign: "center" }}>
      <h1>404</h1>
      <p>We couldn't find that page.</p>
      <p><Link to="/">Return to homepage</Link></p>
    </div>
  );
}

import React from "react";

/* Minimal accessible spinner used as Suspense fallback */
export default function LoadingSpinner() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 50 50"
          aria-hidden="true"
          style={{ display: "block", margin: "0 auto" }}
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="31.4 31.4"
            transform="rotate(-90 25 25)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        <div style={{ marginTop: 8 }}>Loading…</div>
      </div>
    </div>
  );
}

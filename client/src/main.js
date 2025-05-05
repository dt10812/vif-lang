import { createRoot } from "react-dom/client";
import React from "react"; // Ensure React is imported
import App from "./App";
import "./index.css";

// Properly define the root before rendering
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}

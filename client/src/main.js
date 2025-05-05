import React from "react"; // Explicitly import React (not mandatory for JSX in React 18)
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Ensure the root element exists
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found. Check if 'index.html' contains '<div id=\"root\"></div>'.");
}

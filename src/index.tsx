import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './vars.css';
import './tailwind.css';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

import "./shared/reset.css";
import "./shared/variables.css";

import Container from "./Container";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);


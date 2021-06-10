import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Table from "./components/table";

ReactDOM.render(
  <React.StrictMode>
    <Table />
    <button
      className="reloadButton"
      onClick={() => {
        window.location.reload();
      }}
    >
      Play Again
    </button>
  </React.StrictMode>,
  document.getElementById("root")
);

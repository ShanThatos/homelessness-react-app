import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Demo1 } from "./pages/Demo1";

function App() {
  return (
    <div className="text-center p-4">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/demo1" element={<Demo1 />} />
      </Routes>
    </div>
  );
}

export default App;

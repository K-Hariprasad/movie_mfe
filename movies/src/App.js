import React from "react";
import Listing from "./pages/listing";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/movies/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;

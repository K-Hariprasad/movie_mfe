import React from "react";
import "./App.css";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import MovieRemote from "./remotes/MovieRemote";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies/*" element={<MovieRemote />} />
      </Routes>
    </>
  );
}

export default App;

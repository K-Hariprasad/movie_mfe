import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Loader from "./components/loader";

const MovieRemote = lazy(() => import("movieApp/movieIndex"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<Loader />}>
              <MovieRemote />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import Listing from "./pages/listing";
import Details from "./pages/details";

export default [
  { path: "/", element: <Listing /> },
  { path: "/movies", element: <Listing /> },
  { path: "/movies/:id", element: <Details /> },
];

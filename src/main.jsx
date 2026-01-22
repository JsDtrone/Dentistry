import React from "react";
import { StrictMode } from "react";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

const Price = lazy(() => import("./components/Price.jsx"));
const Vinir = lazy(() => import("./components/services/Vinir.jsx"));
const Children = lazy(() => import("./components/services/Children.jsx"));
const Cleaning = lazy(() => import("./components/services/Cleaning.jsx"));
const Hirurgia = lazy(() => import("./components/services/Hirurgia.jsx"));
const Implantations = lazy(() =>
  import("./components/services/Implantations.jsx")
);
const Kosmetology = lazy(() => import("./components/services/Kosmetology.jsx"));
const Ortodontya = lazy(() => import("./components/services/Ortodontya.jsx"));
const Ortopedia = lazy(() => import("./components/services/Ortopedia.jsx"));
const Procedures = lazy(() => import("./components/services/Procedures.jsx"));
const Therapy = lazy(() => import("./components/services/Therapy.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />

        <Route exact path="/prices" element={<Price />} />

        <Route
          exact
          path="/childish"
          element={
            <Suspense
              fallback={
                <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
                  <span class="loader"></span>
                </div>
              }
            >
              <Children />
            </Suspense>
          }
        />
        <Route
          exact
          path="/cleaning"
          element={
            <Suspense
              fallback={
                <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
                  <span class="loader"></span>
                </div>
              }
            >
              <Cleaning />
            </Suspense>
          }
        />
        <Route
          exact
          path="/hirurgia"
          element={
            <Suspense
              fallback={
                <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
                  <span class="loader"></span>
                </div>
              }
            >
              <Hirurgia />
            </Suspense>
          }
        />
        <Route
          exact
          path="/implants"
          element={
            <Suspense
              fallback={
                <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
                  <span class="loader"></span>
                </div>
              }
            >
              <Implantations />
            </Suspense>
          }
        />
        <Route
          exact
          path="/cosmetology"
          element={
            <Suspense
              fallback={
                <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
                  <span class="loader"></span>
                </div>
              }
            >
              <Kosmetology />
            </Suspense>
          }
        />
        <Route
          exact
          path="/orthodontics"
          element={
            <Suspense
              fallback={
                <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
                  <span class="loader"></span>
                </div>
              }
            >
              <Ortodontya />
            </Suspense>
          }
        />
        <Route
          exact
          path="/orthopedics"
          element={
            <Suspense
              fallback={
                <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
                  <span class="loader"></span>
                </div>
              }
            >
              <Ortopedia />
            </Suspense>
          }
        />
        <Route
          exact
          path="/citilab"
          element={
            <Suspense
              fallback={
                <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
                  <span class="loader"></span>
                </div>
              }
            >
              <Procedures />
            </Suspense>
          }
        />
        <Route
          exact
          path="/therapy"
          element={
            <Suspense
              fallback={
                <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
                  <span class="loader"></span>
                </div>
              }
            >
              <Therapy />
            </Suspense>
          }
        />
        <Route
          exact
          path="/vinir"
          element={
            <Suspense
              fallback={
                <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
                  <span class="loader"></span>
                </div>
              }
            >
              <Vinir />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

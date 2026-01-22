import "./App.css";
import { lazy, Suspense } from "react";
import FirstPage from "./components/FirstPage";
const Services = lazy(() => import("./components/Services"));
const Map = lazy(() => import("./components/Map"));
const Benefits = lazy(() => import("./components/Benefits"));
const Reviews = lazy(() => import("./components/Reviews"));
const Promo = lazy(() => import("./components/Promo"));
const BeforeAfter = lazy(() => import("./components/BeforeAfter"));
const FormToCall = lazy(() => import("./components/FormToCall"));
const Price = lazy(() => import("./components/Price"));
const Vinir = lazy(() => import("./components/services/Vinir"));
const Children = lazy(() => import("./components/services/Children"));
const People = lazy(() => import("./components/People"));
const Footer = lazy(() => import("./components/Footer"));
const Citilab = lazy(() => import("./components/Citilab"));
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import Call from "./components/services/Call";
import OtherInfo from "./components/OtherInfo";

function App() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="text-gray-900 w-full max-w-[2000px] mx-auto font-sans @container">
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex w-screen overflow-y-auto items-start  h-full  bg-slate-950/80 justify-center">
            <DialogPanel className="min-w-screen my-auto   h-fit flex items-center    md:min-w-3xl lg:min-w-4xl xl:min-w-5xl    rounded-3xl p-4 ">
              <div className="w-full pb-10 pt-5">
                <div className=" w-full duration-200 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="text-white bg-transparent hover:scale-125 duration-200  me-2  md:mt-0 hover:bg-gray-200  hover:text-gray-700   rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                    data-modal-hide="default-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="pt-4 bg-teal-600  rounded-3xl -mt-10">
                  <Call />
                </div>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-50 w-15 h-15 md:w-20 md:h-20 rounded-full  bg-emerald-300 hover:bg-emerald-400 duration-200 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className=" w-10 md:w-12"
          >
            <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
          </svg>
        </button>
        <FirstPage />{" "}
        <Suspense
          fallback={
            <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
              <span class="loader"></span>
            </div>
          }
        >
          {" "}
          <FormToCall />
        </Suspense>
        <Suspense
          fallback={
            <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
              <span class="loader"></span>
            </div>
          }
        >
          <OtherInfo color="teal" />
        </Suspense>
        <Suspense
          fallback={
            <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
              <span class="loader"></span>
            </div>
          }
        >
          <Services />
        </Suspense>
        <Suspense
          fallback={
            <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
              <span class="loader"></span>
            </div>
          }
        >
          {" "}
          <Promo />
        </Suspense>
        <Suspense
          fallback={
            <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
              <span class="loader"></span>
            </div>
          }
        >
          {" "}
          <Benefits /> <People />
        </Suspense>
        <Suspense
          fallback={
            <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
              <span class="loader"></span>
            </div>
          }
        >
          {" "}
          <Reviews />
        </Suspense>
        <Suspense
          fallback={
            <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
              <span class="loader"></span>
            </div>
          }
        >
          {" "}
          <BeforeAfter />
        </Suspense>
        <Suspense
          fallback={
            <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
              <span class="loader"></span>
            </div>
          }
        >
          {" "}
          <Citilab />
        </Suspense>
        <Suspense
          fallback={
            <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
              <span class="loader"></span>
            </div>
          }
        >
          <OtherInfo />
        </Suspense>
        <Suspense
          fallback={
            <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
              <span class="loader"></span>
            </div>
          }
        >
          {" "}
          <Map />
        </Suspense>
        <Suspense
          fallback={
            <div className=" max-w-screen min-h-screen w-full  flex justify-center items-center">
              <span class="loader"></span>
            </div>
          }
        >
          {" "}
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;

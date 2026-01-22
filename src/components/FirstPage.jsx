import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Header from "./Header";

function FirstPage() {
  return (
    <div className="@container">
      <Header />
      <div className="h-dvh lg:px-10 sm:pb-10 rounded-3xl">
        <div className="bg-teal-600 flex flex-col h-full   sm:pt-0 sm:flex-row rounded-3xl ">
          <div className=" bg-teal-600 h-1/2 sm:h-full pt-40 sm:pt-0 sm:rounded-bl-3xl sm:w-6/12 @min-[800px]:w-7/12  flex justify-center items-center text-white  font-sans ">
            <div className="p-3 @min-[450px]:p-5 lg:ps-8 xl:ps-10 @min-[1600px]:ps-20 max-w-full  z-10 ">
              <h1 className="text-3xl mt-16  @min-[390px]:mt-0  @min-[390px]:text-4xl  @min-[1024px]:text-5xl  @min-[1280px]:text-6xl  @min-[1536px]:text-7xl    font-semibold ">
                Сеть стоматологических клиник&nbsp;LuViDenta
              </h1>
              <h2 className="text-xl lg:text-2xl  mt-4 2xl:mt-6">
                Мы оказываем все виды стоматологических услуг
              </h2>
            </div>
          </div>
          <div className="bg-teal-600 h-1/2  sm:h-full rounded-b-3xl  sm:rounded-br-3xl @min-[600px]:pt-6 sm:w-6/12  @min-[800px]:w-5/12 flex justify-center sm:justify-start  items-end">
            <img
              className=" w-5/6 sm:w-full @min-[700px]:-ms-10  @min-[900px]:-ms-20 @min-[1400px]:-ms-0  rounded-br-none @min-[640px]:rounded-br-3xl @min-[1500px]:rounded-br-none @min-[1500px]:pe-10  @min-[1623px]:pe-20 @min-[1700px]:w-full  @min-[1800px]:pe-0  @min-[1800px]:w-5/6  "
              src="/img/smile.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;

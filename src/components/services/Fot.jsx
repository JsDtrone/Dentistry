import React from "react";

function Fot() {
  return (
    <div className="flex justify-center items-center w-full  pb-10 font-normal @container">
      <div className="w-full  bg-blue-100 rounded-3xl flex flex-col @min-[670px]:flex-row items-start @min-[670px]:items-center @min-[670px]:justify-between px-4 lg:px-8 pt-5 @min-[670px]:pt-9 pb-4 @min-[670px]:pb-8">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center me-1 mt-0.5">
          <span>2025 © Сеть стоматологических клиник&nbsp;LuViDenta.</span>{" "}
          <a
            href="/docs/PrivacyPolic.docx"
            className=" lg:ms-3 underline cursor-pointer mb-4 sm:mb-0"
          >
            Политика конфиденциальности{" "}
          </a>
        </div>
        <a href="https://3dweb-studio.ru/">
          <div className="flex sm:flex-col lg:flex-row lg:flex-cor mt-4 sm:mt-0   items-center lg:items-end sm:ms-5">
            <div className=" text-center pb-0.5 me-1 font-medium ">
              Разработано в
            </div>
            <div className="">
              <img src="/img/3Dwebd.webp" alt="" className="h-8 me-2 lg:me-0" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Fot;

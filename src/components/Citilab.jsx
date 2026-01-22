import React from "react";

function Citilab() {
  return (
    <>
      <div className="w-full lg:px-10 pb-10 @container">
        <div className="@min-[810px]:flex-row flex-col flex  rounded-3xl w-full">
          <div className="@min-[810px]:w-1/2 px-20 py-10 bg-emerald-100 rounded-t-3xl @min-[810px]:rounded-l-3xl @min-[810px]:rounded-r-none  flex flex-col items-center">
            <img src="/img/citilab.svg" alt="" className="w-120" />
          </div>
          <div className="@min-[810px]:w-1/2 bg-sky-200 rounded-b-3xl @min-[810px]:rounded-l-none @min-[810px]:rounded-r-3xl flex flex-col  justify-between py-4 sm:py-6 px-4 @min-[500px]:px-5 @min-[640px]:px-6">
            <div className="">
              <h3 className="text-base @min-[520px]:text-xl @min-[810px]:text-base @min-[1024px]:text-xl  @min-[1280px]:text-2xl font-sans font-medium  ">
                Сотрудничаем с московской лабораторией по сдаче всех медицинских
                анализов. Также выполняем любые дополнительные инъекции
              </h3>
            </div>
            <a href="/citilab">
              <div className="mt-4 text-base @min-[520px]:text-xl @min-[810px]:text-base @min-[1024px]:text-xl cursor-po">
                подробнее →
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Citilab;

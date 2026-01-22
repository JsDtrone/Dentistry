import React from "react";

function Benefits() {
  return (
    <div className="lg:px-10 pb-10 @container" id="benefits">
      <div className=" flex flex-col @min-[1050px]:flex-row">
        <div className="bg-sky-200  @min-[1050px]:w-3/5 p-6 lg:p-8 rounded-3xl">
          <div className="">
            <div className=" text-3xl  font-medium ">Наши преимущества</div>
            <div className=" mb-5 mt-10">
              <div className="">
                <h3 className="text-3xl font-medium ">Приоритет качества</h3>
                <span className="text-xl ">
                  На все виды стоматологических услуг — 12 месяцев гарантии.
                </span>
              </div>
            </div>
            <div className="mb-5">
              <h3 className="text-3xl font-medium ">Профессионализм</h3>
              <span className="text-xl">
                Лечение проводят врачи с большим опытом, регулярно повышающие
                квалификацию.
                <br /> Каждый специалист — эксперт в своей области.
              </span>
            </div>

            <div className="">
              <div className="">
                <h3 className="text-3xl font-medium ">
                  Лояльные условия оплаты
                </h3>
                <span className="text-xl">
                  Мы делаем все, чтобы комфортно проходил не только процесс
                  лечения, но и оплаты.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-6  @min-[1400px]:gap-12 ps-6 sm:ps-12  @min-[1050px]:w-2/5 bg-sky-200  @min-[1050px]:ms-10 mt-5 @min-[1050px]:mt-0 p-4 @min-[1400px]:p-8 rounded-3xl">
          <div className="flex @min-[678px]:items-end @min-[1050px]:items-start flex-col @min-[678px]:flex-row  @min-[1050px]:flex-col    text-xl font-semibold   pt-4">
            <span className=" text-6xl @min-[370px]:text-7xl me-4 @min-[1050px]:me-0  2xl:text-8xl font-semibold  text-slate-900">
              {" "}
              19
            </span>
            <br className="hidden sm:inline" />{" "}
            <span className="mb-3 @min-[1050px]:mb-0">
              Лет успешной работы{" "}
            </span>
          </div>
          <div className="flex @min-[678px]:items-end @min-[1050px]:items-start flex-col @min-[678px]:flex-row  @min-[1050px]:flex-col    text-xl font-semibold ps-6  pt-4">
            <span className=" text-6xl @min-[370px]:text-7xl me-4 @min-[1050px]:me-0  2xl:text-8xl font-semibold  text-slate-900">
              {" "}
              15
            </span>
            <br className="hidden sm:inline" />{" "}
            <span className="mb-3 @min-[1050px]:mb-0">Лечащих врачей </span>
          </div>

          <div className="flex @min-[678px]:items-end @min-[1050px]:items-start flex-col @min-[678px]:flex-row  @min-[1050px]:flex-col    text-xl font-semibold  pt-4 ">
            <span className=" text-6xl @min-[370px]:text-7xl me-4 @min-[1050px]:me-0  2xl:text-8xl font-semibold  text-slate-900">
              {" "}
              5000
            </span>
            <br className="hidden sm:inline" />
            <span className="mb-3 @min-[1050px]:mb-0">Довольных клиентов </span>
          </div>
          <div className="flex @min-[678px]:items-end @min-[1050px]:items-start flex-col @min-[678px]:flex-row  @min-[1050px]:flex-col    text-xl font-semibold ps-9 sm:ps-12 pt-4  ">
            <span className=" text-6xl @min-[370px]:text-7xl me-4 @min-[1050px]:me-0  2xl:text-8xl font-semibold  text-slate-900">
              {" "}
              3
            </span>
            <br className="hidden sm:inline" />
            <span className="mb-3 @min-[1050px]:mb-0">Филиала </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;

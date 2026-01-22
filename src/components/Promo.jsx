import React from "react";
function Promo() {
  return (
    <div className=" pb-10 lg:px-10 @container" id="promo">
      <div className="p-3 lg:p-8 bg-slate-200 rounded-3xl">
        <h3 className="text-5xl font-medium text-slate-900  mb-8 ps-1">
          Акции
        </h3>
        <div className="grid  @min-[600px]:grid-cols-2  @min-[1024px]:grid-cols-3 @min-[1500px]:grid-cols-4 grid-flow-row gap-3 md:gap-4 lg;:gap-6 ">
          <div className="">
            <img
              src="/img/promo/1.webp"
              className="rounded-2xl  shadow sm:shadow-md"
              alt="Акции"
            />
          </div>
          <div className="">
            <img
              src="/img/promo/2.webp"
              className="rounded-2xl  shadow sm:shadow-md"
              alt="Акции"
            />
          </div>
          <div className="">
            <img
              src="/img/promo/3.webp"
              className="rounded-2xl  shadow sm:shadow-md"
              alt="Акции"
            />
          </div>
          <div className="">
            <img
              src="/img/promo/4.webp"
              className="rounded-2xl  shadow sm:shadow-md"
              alt="Акции"
            />
          </div>
          <div className="">
            <img
              src="/img/promo/6.webp"
              className="rounded-2xl  shadow sm:shadow-md"
              alt="Акции"
            />
          </div>
          <div className="">
            <img
              src="/img/promo/5.webp"
              className="rounded-2xl  shadow sm:shadow-md"
              alt="Акции"
            />
          </div>
          <div className="">
            <img
              src="/img/promo/7.webp"
              className="rounded-2xl  shadow sm:shadow-md"
              alt="Акции"
            />
          </div>
          <div className="">
            <img
              src="/img/promo/10.webp"
              className="rounded-2xl  shadow sm:shadow-md"
              alt="Акции"
            />
          </div>
          <div className="">
            <img
              src="/img/promo/8.webp"
              className="rounded-2xl  shadow sm:shadow-md"
              alt="Акции"
            />
          </div>
          <div className="">
            <img
              src="/img/promo/9.webp"
              className="rounded-2xl  shadow sm:shadow-md"
              alt="Акции"
            />
          </div>

          <div className="">
            <img
              src="/img/promo/12.webp"
              className="rounded-2xl  shadow sm:shadow-md"
              alt="Акции"
            />
          </div>
        </div>
        {/* <div className=" @min-[800px]:grid @min-[800px]:grid-cols-2  gap-3 2xl:gap-5">
          <div className=" bg-emerald-200 shadow-sm md: shadow sm:shadow-md mb-4 @min-[800px]:mb-0 py-7 @min-[800px]:py-3  rounded-2xl w-full  flex ">
            <div className="  flex items-center justify-center px-6 w-fit lg:w-1/6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-10 "
              >
                <path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <div className="">
                <h4 className="text-xl xl:text-3xl ">
                  <span className="font-semibold"> Рассрочка </span>на все виды
                  услуг без <span className="font-semibold"> переплаты </span>
                  сроком на 6 месяцев
                </h4>
              </div>
            </div>
          </div>
          <div className=" bg-emerald-200 shadow-sm md: shadow sm:shadow-md mb-4 @min-[800px]:mb-0 py-7 @min-[800px]:py-3  rounded-2xl row-span-2 w-full  flex ">
            <div className=" flex items-start justify-center px-6 w-fit lg:w-1/6 ">
              <svg
                className="w-10 lg:w-15  mt-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" />
              </svg>
            </div>
            <div className="flex items-center justify-center py-5 ">
              <div className=" pe-8">
                <h4 className="text-xl xl:text-2xl ">
                  Клиника LuViDenta выражает глубокое уважение участникам
                  Великой Отечественной войны и специальной военной операции. В
                  знак благодарности мы предоставляем
                  <span className="font-semibold"> скидку 10%</span> на все
                  стоматологические услуги.
                </h4>
                <p className="text-lg xl:text-xl mt-4">
                  Кто может воспользоваться акцией:
                  <br /> Участники ВОВ и СВО и их семьи (при наличии
                  подтверждающих документов)
                </p>
              </div>
            </div>
          </div>
          {/* <div className=" bg-emerald-200 shadow-sm md: shadow sm:shadow-md mb-4 @min-[800px]:mb-0 py-7 @min-[800px]:py-3  rounded-2xl w-full  flex ">
            <div className=" flex items-center justify-center px-6 w-fit lg:w-1/6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 lg:w-16 "
                viewBox="0 0 576 512"
              >
                <path d="M0 128C0 75 43 32 96 32l384 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96L96 480c-53 0-96-43-96-96L0 128zm176 48l0 56c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-56c0-26.5-21.5-48-48-48s-48 21.5-48 48zm176-48c-26.5 0-48 21.5-48 48l0 56c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-56c0-26.5-21.5-48-48-48zM48 208l0 24c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-24c0-26.5-21.5-48-48-48s-48 21.5-48 48zM96 384c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48zm80-48c0 26.5 21.5 48 48 48s48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24zm176 48c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48zm80-176l0 24c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-24c0-26.5-21.5-48-48-48s-48 21.5-48 48zm48 176c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48z" />
              </svg>
            </div>
            <div className="flex items-center  w-full">
              <div className="pe-10   w-full">
                <h4 className="text-xl xl:text-2xl ">
                  Профессиональная гигиена полости рта: <br />
                  ультразвук +аэрофлоу +полировка пастой
                </h4>
                <div className="text-xl xl:text-2xl text-end w-full">
                  <span className="line-through ">5500</span> 4000 руб
                </div>
              </div>
            </div>
          </div> */}
        {/* <div className=" bg-emerald-200 shadow-sm md: shadow sm:shadow-md mb-4 @min-[800px]:mb-0 py-7 @min-[800px]:py-3  rounded-2xl w-full  flex ">
            <div className="  flex items-center justify-center px-6 w-fit lg:w-1/6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 lg:w-10 "
                viewBox="0 0 320 512"
              >
                <path d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" />
              </svg>
            </div>
            <div className="flex items-center  w-full">
              <div className="pe-10   w-full">
                <h4 className="text-xl xl:text-2xl ">
                  Детская чистка зубов +полировка пастой
                </h4>
                <div className="text-xl xl:text-2xl text-end w-full mt-3">
                  <span className="line-through ">4500</span> 3000 руб
                  <p className="text-lg xl:text-xl">
                    Срок действия: до 31.07.2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-emerald-200 shadow-sm md: shadow sm:shadow-md mb-4 @min-[800px]:mb-0 py-7 @min-[800px]:py-3  rounded-2xl w-full  flex ">
            <div className="  flex items-center justify-center px-6 w-fit lg:w-1/6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-10 lg:w-14"
              >
                <path d="M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5l0 6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5l0-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z" />
              </svg>
            </div>
            <div className="flex items-center  w-full">
              <div className="pe-10   w-full">
                <h4 className="text-xl xl:text-2xl mt-5">
                  Постановка имплантата Южная Корея
                </h4>
                <div className="text-xl xl:text-2xl text-end w-full   ">
                  <span className="line-through ">25 тыс</span> 20 тыс руб
                  <p className="text-lg xl:text-xl mt-1">
                    Срок действия: до 31.07.2025
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        {/* <div className=" bg-emerald-200 shadow-sm md: shadow sm:shadow-md mb-4 @min-[800px]:mb-0 py-7 @min-[800px]:py-3  rounded-2xl w-full  flex ">
            <div className=" flex items-center justify-center  px-6 w-fit lg:w-1/6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-10 lg:w-14"
              >
                <path d="M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5l0 6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5l0-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z" />
              </svg>
            </div>
            <div className="flex items-center  w-full">
              <div className="pe-10   w-full">
                <h4 className="text-xl xl:text-2xl mt-1">
                  Постановка имплантата Швейцария
                </h4>
                <div className="text-xl xl:text-2xl text-end w-full  ">
                  <span className="line-through ">35 тыс</span> 28 тыс руб
                  <p className="text-lg xl:text-xl mt-1">
                    Срок действия: до 31.07.2025
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        {/* <div className=" bg-emerald-200 shadow-sm md: shadow sm:shadow-md mb-4 @min-[800px]:mb-0 py-7 @min-[800px]:py-3  rounded-2xl w-full  flex ">
            <div className=" flex items-center justify-center px-6 w-fit lg:w-1/6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 lg:w-10"
                viewBox="0 0 320 512"
              >
                <path d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" />
              </svg>
            </div>
            <div className="flex items-center w-full ">
              <div className="pe-10 text-xl xl:text-2xl  w-full">
                <h4 className=" ">Детская улыбка - скидка 10%</h4>
                Заботьтесь о здоровье зубов вашего ребёнка вовремя и экономьте!
                <div className=" text-end w-full  ">
                  <p className="text-lg xl:text-xl mt-1">
                    Срок действия: до 31.07.2025
                  </p>
                </div>
              </div>
            </div>
          </div> 
          <div className=" bg-emerald-200 shadow-sm md: shadow sm:shadow-md mb-4 @min-[800px]:mb-0 py-7 @min-[800px]:py-3  rounded-2xl row-span-1  w-full  flex ">
            <div className="  flex items-center justify-center px-6 w-fit lg:w-1/6">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512 "
                className="w-10 lg:w-16"
              >
                <path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96 48 96C21.5 96 0 117.5 0 144L0 464c0 26.5 21.5 48 48 48l208 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 208 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L473.7 96 337.8 5.4zM96 192l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM96 320l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16z" />
              </svg>
            </div>
            <div className="flex items-center  w-full">
              <div className="pe-10  text-xl xl:text-2xl  w-full mt-3">
                Выпускникам 10% скидка на любые стоматологические услуги.
                Подарите себе уверенную улыбку перед новым этапом жизни!
                <div className="text-end w-full   ">
                  <p className="text-lg xl:text-xl ">
                    Срок действия: до 31.08.2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-emerald-200 shadow-sm md: shadow sm:shadow-md mb-4 @min-[800px]:mb-0 py-7 @min-[800px]:py-6  rounded-2xl w-full row-span-2  flex ">
            <div className="  flex items-start pt-12 justify-center px-6 w-fit lg:w-1/6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-10 lg:w-18 "
              >
                <path d="M96 32C43 32 0 75 0 128l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-53-43-96-96-96L96 32zM224 96c26.5 0 48 21.5 48 48l0 56c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-56c0-26.5 21.5-48 48-48zm80 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 56c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-56zM96 128c26.5 0 48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24c0-26.5 21.5-48 48-48zm336 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24zM96 480l384 0c53 0 96-43 96-96l0-32c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64l0 32c0 53 43 96 96 96zm0-64c-26.5 0-48-21.5-48-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48zm80-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48s-48-21.5-48-48zm176 48c-26.5 0-48-21.5-48-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48zm80-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48s-48-21.5-48-48z" />
              </svg>
            </div>
            <div className="flex items-center ">
              <div className="pe-10  w-full">
                <h4 className=" text-xl xl:text-2xl mb-3">
                  Начните путь к идеальной улыбке с прозрачными элайнерами по
                  специальной цене
                </h4>
                <p className="text-lg xl:text-xl mb-1">В стоимость входит:</p>
                <ul className="text-lg xl:text-xl list-disc ps-10 ">
                  <li>Диагностика и 3D-моделирование</li>
                  <li>Полный курс элайнеров</li>
                  <li>Сопровождение ортодонта</li>
                  <li>Фиксирующая капа после лечения</li>
                </ul>
                <div className=" text-end w-full text-xl xl:text-2xl mt-3 ">
                  <span className="line-through ">250-350 тыс</span> 200-240 тыс
                  руб
                  <br />
                  <span className="text-lg xl:text-xl mt-1">
                    Акция ограничена по времени!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-emerald-200 shadow-sm md: shadow sm:shadow-md mb-4 @min-[800px]:mb-0 py-7 @min-[800px]:py-6  rounded-2xl w-full row-span-2 flex ">
            <div className="  flex items-start pt-12 justify-center px-6 w-fit lg:w-1/6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-10 lg:w-18 "
              >
                <path d="M96 32C43 32 0 75 0 128l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-53-43-96-96-96L96 32zM224 96c26.5 0 48 21.5 48 48l0 56c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-56c0-26.5 21.5-48 48-48zm80 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 56c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-56zM96 128c26.5 0 48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24c0-26.5 21.5-48 48-48zm336 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24zM96 480l384 0c53 0 96-43 96-96l0-32c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64l0 32c0 53 43 96 96 96zm0-64c-26.5 0-48-21.5-48-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48zm80-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48s-48-21.5-48-48zm176 48c-26.5 0-48-21.5-48-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48zm80-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48s-48-21.5-48-48z" />
              </svg>
            </div>
            <div className="flex items-center ">
              <div className="pe-10  w-full">
                <h4 className=" text-xl xl:text-2xl mb-3">Система All on 4</h4>

                <p className="text-lg xl:text-xl mb-1">
                  Установка системы All-on-4 – инновационного решения для полной
                  реконструкции зубного ряда
                  <br />
                  <span className="mt-3"> В стоимость включено:</span>
                </p>
                <ul className="text-lg xl:text-xl list-disc ps-10 ">
                  <li>Установка 4 имплантатов</li>
                  <li>Хирургический этап</li>
                  <li>Временный протез</li>
                </ul>
                <div className=" text-end w-full text-xl xl:text-2xl  ">
                  <span className="text-lg"> первый этап за{"  "} </span>
                  <span className="line-through "> 220 тыс</span>
                  180&nbsp;тыс&nbsp;руб
                  <p className="text-lg xl:text-xl mt-1">
                    Срок действия: до 31.07.2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-emerald-200 shadow-sm md: shadow sm:shadow-md mb-4 @min-[800px]:mb-0 py-7 @min-[800px]:py-6  rounded-2xl w-full row-span-2 flex ">
            <div className="  flex items-start pt-12 justify-center px-6 w-fit lg:w-1/6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-10 lg:w-18 "
              >
                <path d="M96 32C43 32 0 75 0 128l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-53-43-96-96-96L96 32zM224 96c26.5 0 48 21.5 48 48l0 56c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-56c0-26.5 21.5-48 48-48zm80 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 56c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-56zM96 128c26.5 0 48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24c0-26.5 21.5-48 48-48zm336 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24zM96 480l384 0c53 0 96-43 96-96l0-32c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64l0 32c0 53 43 96 96 96zm0-64c-26.5 0-48-21.5-48-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48zm80-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48s-48-21.5-48-48zm176 48c-26.5 0-48-21.5-48-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48zm80-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48s-48-21.5-48-48z" />
              </svg>
            </div>
            <div className="flex items-center w-full">
              <div className="pe-10  w-full">
                <h4 className=" text-xl xl:text-2xl mb-3">Система All on 6</h4>

                <p className="text-lg xl:text-xl mb-1">
                  Верните себе уверенную улыбку с помощью технологии All on 6
                  <br />— надёжного решения для полной реставрации зубного ряда.
                  <br />
                  <span className="mt-3"> В стоимость включено:</span>
                </p>
                <ul className="text-lg xl:text-xl list-disc ps-10 ">
                  <li>Установка 6 имплантатов</li>
                  <li>Хирургический этап</li>
                  <li>Временный протез</li>
                </ul>
                <div className=" text-end w-full text-xl xl:text-2xl  ">
                  <span className="text-lg"> первый этап за{"  "} </span>
                  <span className="line-through "> 250 тыс</span> 220 тыс руб
                  <p className="text-lg xl:text-xl mt-1">
                    Срок действия: до 31.07.2025
                  </p>
                </div>
              </div>
            </div>
          </div> 
        </div>*/}
      </div>
    </div>
  );
}

export default Promo;

import React from "react";
import Header from "../Header";
import Sidebar from "./Sidebar";
import Call from "./Call";
import Fot from "./Fot";
import ToMain from "./ToMain";
import AllPrice from "./AllPrice";

function Vinir() {
  return (
    <div className="@container">
      <Header />
      <ToMain />
      <main className="max-w-7xl mx-auto  flex justify-center @container">
        <div className="bg-slate-100  @min-[960px]:w-3/12 p-6 me-6 lg:me-10 rounded-3xl h-fit ms-3 hidden @min-[960px]:block">
          <Sidebar />
        </div>
        <div className="px-3 @min-[500px]:px-6 @min-[700px]:px-8 @min-[960px]:px-0 w-full @min-[960px]:w-9/12 ">
          <div className="max-w-2xl md:pe-3">
            <img
              src="/img/final/vinir.webp"
              alt=""
              className="w-full rounded-3xl mb-10"
            />
          </div>
          <div className="pe-3 sm:pe-6 md:pe-10">
            <div className="text-6xl mb-7">Виниры</div>
            <div className="text-lg sm:text-xl mb-1">
              Изготовление и постановка Винира - 15&nbsp;тыс&nbsp;руб
            </div>{" "}
            <AllPrice />
            <div className="text-lg sm:text-xl mb-3">
              Прием ведет стоматолог-ортопед: Бобрышев Виталий Викторович
            </div>{" "}
            <div className="lg:text-lg sm:text-xl">
              Виниры – это тонкие пластинки, которые устанавливаются на переднюю
              поверхность зубов для улучшения их внешнего вида. Они помогают
              скорректировать форму, цвет и даже мелкие дефекты зубов, создавая
              безупречную улыбку. В клинике "LuViDenta" мы предлагаем
              современные виниры, которые обеспечивают естественный и эстетичный
              результат.
            </div>
            <div className="text-3xl  font-medium my-5">
              Как проходит установка виниров
            </div>
            <div className="sm:ps-1 lg:text-lg sm:text-xl">
              <div className="  flex ">
                <div className="min-w-12     me-2 sm:me-5 flex flex-col  items-center">
                  <div className="w-10 absolute  h-10 z-20 rounded-full text-2xl items-center flex justify-center bg-green-300   ">
                    1
                  </div>{" "}
                  <div className="w-5 mt-9 absolute  z-10 h-4 bg-white"></div>
                  <div className="border-l-1 border-gray-400  h-full mb-3"></div>
                </div>
                <div className="">
                  <div className="font-medium text-gray-800 mb-2">
                    Консультация и планирование
                  </div>
                  <div className="mb-4 text-gray-700">
                    На первом этапе врач проводит осмотр полости рта и оценивает
                    состояние зубов. Это важно для того, чтобы определить,
                    подходят ли вам виниры и какой результат вы хотите достичь.
                    Мы также обсуждаем желаемую форму и цвет зубов, чтобы
                    итоговый результат соответствовал вашим ожиданиям.
                  </div>
                </div>
              </div>
              <div className="  flex ">
                <div className="min-w-12     me-2 sm:me-5 flex flex-col  items-center">
                  <div className="w-10 absolute  h-10 z-20 rounded-full text-2xl items-center flex justify-center bg-green-300   ">
                    2
                  </div>{" "}
                  <div className="w-5 mt-9 absolute  z-10 h-4 bg-white"></div>
                  <div className="border-l-1 border-gray-400  h-full mb-3"></div>
                </div>
                <div className="">
                  <div className="font-medium text-gray-800 mb-2">
                    Подготовка зубов
                  </div>
                  <div className="mb-4 text-gray-700">
                    Для установки виниров обычно требуется минимальная
                    подготовка зубов – стоматолог снимает тонкий слой эмали (до
                    0,5 мм). Это нужно для того, чтобы виниры плотно и надежно
                    прилегали к зубам и не выделялись по толщине.
                  </div>
                </div>
              </div>
              <div className="  flex ">
                <div className="min-w-12     me-2 sm:me-5 flex flex-col  items-center">
                  <div className="w-10 absolute  h-10 z-20 rounded-full text-2xl items-center flex justify-center bg-green-300   ">
                    3
                  </div>{" "}
                  <div className="w-5 mt-9 absolute  z-10 h-4 bg-white"></div>
                  <div className="border-l-1 border-gray-400  h-full mb-3"></div>
                </div>
                <div className="">
                  <div className="font-medium text-gray-800 mb-2">
                    Создание временных виниров (по необходимости)
                  </div>
                  <div className="mb-4 text-gray-700">
                    Если виниры изготавливаются в лаборатории, на подготовленные
                    зубы могут быть установлены временные виниры для защиты и
                    сохранения эстетики до готовности постоянных.
                  </div>
                </div>
              </div>
              <div className="  flex ">
                <div className="min-w-12     me-2 sm:me-5 flex flex-col  items-center">
                  <div className="w-10 absolute  h-10 z-20 rounded-full text-2xl items-center flex justify-center bg-green-300   ">
                    4
                  </div>{" "}
                  <div className="w-5 mt-9 absolute  z-10 h-4 bg-white"></div>
                  <div className="border-l-1 border-gray-400  h-full mb-3"></div>
                </div>
                <div className="">
                  <div className="font-medium text-gray-800 mb-2">
                    Изготовление виниров
                  </div>
                  <div className="mb-4 text-gray-700">
                    На основе слепков или 3D-модели зубов создаются
                    индивидуальные виниры. Они могут быть изготовлены из
                    различных материалов, таких как керамика или композит. В
                    нашей клинике используются самые современные материалы,
                    обеспечивающие долговечность и естественный внешний вид.
                  </div>
                </div>
              </div>
              <div className="  flex ">
                <div className="min-w-12     me-2 sm:me-5 flex flex-col  items-center">
                  <div className="w-10 absolute  h-10 z-20 rounded-full text-2xl items-center flex justify-center bg-green-300   ">
                    5
                  </div>{" "}
                </div>
                <div className="">
                  <div className="font-medium text-gray-800 mb-2">
                    Фиксация виниров
                  </div>
                  <div className="mb-4 text-gray-700">
                    Когда готовые виниры будут доставлены, стоматолог проверяет
                    их посадку, цвет и форму. Если все идеально, виниры
                    фиксируются на зубах с помощью специального цемента, который
                    твердеет под воздействием светового излучения, обеспечивая
                    прочное соединение.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>{" "}
      <div className="max-w-7xl  mx-auto mt-10 md:mt-15 px-3 @min-[500px]:px-6 @min-[700px]:px-8 @min-[960px]:px-0 ">
        <Call />
        <div className="mt-10">
          <Fot />
        </div>
      </div>
    </div>
  );
}

export default Vinir;

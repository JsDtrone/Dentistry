import React from "react";
import Header from "../Header";
import Sidebar from "./Sidebar";
import Call from "./Call";
import Fot from "./Fot";
import ToMain from "./ToMain";
import AllPrice from "./AllPrice";

function Implantations() {
  return (
    <div className="@container">
      <Header />
      <ToMain />
      <main className="max-w-7xl mx-auto flex justify-center @container">
        <div className="bg-slate-100  @min-[960px]:w-3/12 p-6 me-6 lg:me-10 rounded-3xl h-fit ms-3 hidden @min-[960px]:block">
          <Sidebar />
        </div>
        <div className="px-3 @min-[500px]:px-6 @min-[700px]:px-8 @min-[960px]:px-0 w-full @min-[960px]:w-9/12 ">
          <div className="max-w-2xl md:pe-3">
            <img
              src="/img/f2/implant.webp"
              alt=""
              className="w-full rounded-3xl mb-10"
            />
          </div>
          <div className="pe-3 sm:pe-6 md:pe-10">
            <div className="text-6xl mb-7">Имплантация</div>
            <div className="text-lg sm:text-xl text-gray-800 mb-5">
              Консультация проводится бесплатно
            </div>{" "}
            <div className="text-lg sm:text-xl text-gray-800 mb-1">
              Приём ведёт:
            </div>
            <div className="text-lg sm:text-xl text-blue-800 mb-2">
              Кремлев Владимир Андреевич (Калининград)
            </div>
            <div className="text-lg sm:text-xl text-blue-800 mb-5">
              Ливанцов Михаил Михайлович (Калининград)
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div className="">
                Хирургическая постановка имплантанта Корея"OSSTEM"{" "}
              </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                20 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div className="">
                Ортопедическая постановка не съемной челюсти{" "}
              </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                140 тыс руб
              </div>
            </div>{" "}
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div className="">
                Хирургическая часть работ при проведении операции «
                СИНУСЛИФТИНГ»{" "}
              </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                15 тыс руб
              </div>
            </div>{" "}
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div className="">
                Постановка системы All on 4 имплантантах первый этап{" "}
              </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                180 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-2 flex justify-between">
              <div className="">
                Постановка системы All.on 6 имплантантах первый этап{" "}
              </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                220 тыс руб
              </div>
            </div>{" "}
            <AllPrice />
            <div className="lg:text-lg sm:text-xl text-gray-700">
              Имплантация – это современный метод восстановления зубов, который
              помогает восстановить зубной ряд, его функциональность и помочь
              избежать атрофии костной и мышечной ткани в опустевшей области.
            </div>
            <div className="text-3xl  font-medium  text-gray-800 my-5">
              Показания к имплантации
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700">
              <div className="mb-1">Полное отсутствие зубного ряда</div>
              <div className="mb-1">Отсутствие одного или нескольких зубов</div>
              <div className="mb-1">Повышенная стираемость эмали</div>
              <div className="mb-1">Невозможность смыкания зубов</div>
              <div className="mb-4">
                Нежелание пациента или невозможность использования съемных
                протезов
              </div>
              <div className="mb-4">
                В стоматологии “LuViDenta” мы используем полную и частичную
                имплантацию.
              </div>
            </div>
            <div className="text-3xl  font-medium  text-gray-800 my-3">
              Полная имплантация
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700">
              Имплантация при полном отсутствии зубов показана пациентам при
              отсутствии зубов на верхней и нижней челюсти, а также отсутствии в
              ряду 5 и более зубов.
            </div>{" "}
            <div className="text-3xl  font-medium  text-gray-800 my-3">
              Частичная имплантация
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 mb-4">
              Данная имплантация показана пациентам при: отсутствии нескольких
              зубов в челюсти, отсутствии одного зуба.
            </div>
            <div className="text-3xl  font-medium  text-gray-800  mb-3">
              Какие методы имплантации существуют?
            </div>
            <div className="ms-5">
              <div className="lg:text-xl sm:text-2xl mb-1">Одноэтапная</div>
              <div className="lg:text-lg sm:text-xl text-gray-700 mb-3">
                Процедура подходит тем, кто не имеет противопоказаний и готов
                установить имплант. Временный протез и имплант фиксируется за
                один прием. Временную коронку меняют на постоянную через 3-5
                месяцев
              </div>
              <div className="lg:text-xl sm:text-2xl mb-1">Двухэтапная</div>
              <div className="lg:text-lg sm:text-xl text-gray-700 mb-3">
                Это классический метод имплантации. Абатмент устанавливается
                через три месяца, полгода после приживления импланта, коронка
                после абатмента.
              </div>{" "}
              <div className="lg:text-xl sm:text-2xl mb-1">Одномоментная</div>
              <div className="lg:text-lg sm:text-xl text-gray-700 mb-6">
                Процедура выполняется одновременно с удалением зуба. Часто
                используется для восстановления передних зубов.
              </div>
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 mb-1">
              Современное протезирование это безопасный, а главное полезный
              способ лечения, который поможет вам устранить дефекты в ротовой
              полости.
            </div>{" "}
            <div className="lg:text-lg sm:text-xl text-gray-700 mb-4">
              Пройти консультацию перед этим строго необходимо. Врач определит
              ваше текущее состояние и даст важные рекомендации по наиболее
              подходящему протезированию.
            </div>
            {/* <div className="text-3xl  font-medium  text-gray-800 my-5">
              Как проходит процедура чистки зубов:
            </div>
            <div className="sm:ps-1 lg:text-lg sm:text-xl text-gray-700">
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
                    Консультация и осмотр
                  </div>
                  <div className="mb-4 text-gray-700">
                    Сначала стоматолог проводит осмотр полости рта, оценивает
                    состояние зубов и десен, выявляет возможные проблемы, такие
                    как налет, зубной камень или воспаление.
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
                    Удаление зубного налета и камня
                  </div>
                  <div className="mb-4 text-gray-700">
                    При помощи ультразвукового аппарата или специальных
                    инструментов удаляется твердый налет и зубной камень,
                    который скапливается на поверхности зубов и под деснами. Эта
                    процедура безболезненна, но может вызвать легкий дискомфорт.
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
                    Полировка зубов
                  </div>
                  <div className="mb-4 text-gray-700">
                    После удаления налета проводится полировка зубов. Используя
                    специальные пасты и полировочные щетки, стоматолог делает
                    поверхность зубов гладкой, что предотвращает быстрое
                    повторное образование налета.
                  </div>
                </div>
              </div>
              <div className="  flex ">
                <div className="min-w-12     me-2 sm:me-5 flex flex-col  items-center">
                  <div className="w-10 absolute  h-10 z-20 rounded-full text-2xl items-center flex justify-center bg-green-300   ">
                    4
                  </div>{" "}
                  <div className="w-5 mt-9 absolute  z-10 h-4 bg-white"></div>
                </div>
                <div className="">
                  <div className="font-medium text-gray-800 mb-2">
                    Фторирование (по желанию)
                  </div>
                  <div className="mb-4 text-gray-700">
                    Чтобы укрепить эмаль и защитить зубы от кариеса, врач может
                    нанести на зубы фторсодержащий гель или лак. Эта процедура
                    особенно рекомендуется людям с повышенной чувствительностью
                    зубов или склонностью к кариесу.
                  </div>
                </div>
              </div>
            </div> */}
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

export default Implantations;

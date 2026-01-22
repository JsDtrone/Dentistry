import React from "react";
import Header from "../Header";
import Sidebar from "./Sidebar";
import Call from "./Call";
import Fot from "./Fot";
import ToMain from "./ToMain";

function Cleaning() {
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
              src="/img/f2/chistka.webp"
              alt=""
              className="w-full rounded-3xl mb-10"
            />
          </div>
          <div className="pe-3 sm:pe-6 md:pe-10">
            <div className="text-6xl mb-7">Чистка зубов</div>
            <div className="text-lg sm:text-xl text-gray-700 mb-5">
              Професиональная гигиена полости рта + полировка пастой
              4500&nbsp;руб
            </div>{" "}
            <div className="lg:text-lg sm:text-xl text-gray-700">
              Чистка зубов – это важная процедура, которая помогает поддерживать
              здоровье зубов и десен, а также предотвращает развитие кариеса,
              гингивита и других стоматологических заболеваний. В нашей клинике
              "LuViDenta" мы предлагаем профессиональную чистку зубов, которая
              проводится с использованием современных технологий и безопасных
              методов.
            </div>
            <div className="text-3xl  font-medium text-gray-800 my-5">
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

export default Cleaning;

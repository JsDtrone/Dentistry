import React from "react";
import Header from "../Header";
import Sidebar from "./Sidebar";
import Call from "./Call";
import Fot from "./Fot";
import AllPrice from "./AllPrice";
import ToMain from "./ToMain";

function Ortodontya() {
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
              src="/img/f2/ortodont.webp"
              alt=""
              className="w-full rounded-3xl mb-10"
            />
          </div>
          <div className="pe-3 sm:pe-6 md:pe-10">
            <div className="text-6xl mb-7">Ортодонтия</div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3">
              Консультация проводится бесплатно
            </div>{" "}
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              Приём ведёт:
            </div>{" "}
            <div className="text-lg sm:text-xl text-blue-800 mb-4">
              Тур Наталья Валерьевна (Калининград)
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div>
                {" "}
                Керамическая лигатурная брекет-система ( за 1 челюсть){" "}
              </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                55 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div>
                {" "}
                Керамическая безлигатурная брекет-система ( за 1 челюсть){" "}
              </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                60 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div>
                {" "}
                Металлическая лигатурная брекет-система ( за 1 челюсть){" "}
              </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                40 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div>
                Металлическая безлигатурная брекет-система ( за 1 челюсть){" "}
              </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                45 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div>Установка Каппы </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                12 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-2 flex justify-between">
              <div>Элайнеры </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                200 тыс руб - 240 тыс руб
              </div>
            </div>
            <AllPrice />
            <div className="text-3xl font-medium text-gray-800 my-5">
              ОРТОДОНТИЧЕСКОЕ ЛЕЧЕНИЕ{" "}
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700">
              Ортодонтическое лечение - это не один визит и даже не два. Это
              распланированные и выстроенные во временных соотношениях этапы,
              четко следующие один за другим. Сейчас мы последовательно раскроем
              каждый из них.
            </div>
            <div className="text-3xl font-medium text-gray-800 my-5">
              ДИАГНОСТИКА{" "}
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 mb-2">
              Прежде чем приступать к планированию лечения, врач-ортодонт,
              опираясь на анамнез и осмотр, может назначить вид дополнительного
              и основного исследования. Это рентген диагностика: КТ (возможно),
              ОПТГ (ортопантомограмма), ТРГ (снимок с боковой проекцией),
              диагностическая модель верхней и нижней челюсти. В нашей клинике
              можно сделать данные виды исследования тут же во время приёма.
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700">
              После диагностического этапа и постановки диагноза следует
              следующих этап - подготовительный. Во время которого для пациента
              закупается индивидуальное оборудование (ортодонтический несъемный
              набор: брекеты, дуги , тяги, воск, пружинки и др., заказывается и
              изготавливается набор кап, пластинок и т. д).
            </div>
            <div className="text-3xl font-medium text-gray-800 my-5">
              ПОДГОТОВКА
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700">
              Во время подготовительного этапа необходимо сделать
              Профессиональную гигиену (полости рта, чистка Air Flow,
              ультразвуковая гигиена) - основательно подготовиться к
              ортодонтическому лечению. Вы получите все разъяснения как себя
              вести, что можно, что нельзя делать во время лечения, какие
              ситуации могут возникнуть, что делать и как на них реагировать.
              Вместе с ортодонтом вы распишете календарь контрольных посещений.
            </div>{" "}
            <div className="text-3xl font-medium text-gray-800 my-5">
              ЭТАПЫ ИСПРАВЛЕНИЯ ПРИКУСА
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
                    Фиксация брекетов
                  </div>
                  <div className="mb-4 text-gray-700">
                    Фиксация брекетов - проводится в одно или в два посещения, в
                    зависимости от клинического случая. Т.е. это может быть либо
                    одна челюсть за один приём либо сразу две. Болезненных
                    ощущений нет, единственный дискомфорт - это необходимость
                    удерживать в одном положении рот. Он должен быть открыт на
                    протяжении минут 45 или больше.
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
                    Основной этап
                  </div>
                  <div className="mb-4 text-gray-700">
                    Основной этап - этап непосредственно ортодонтического
                    лечения, во время которого вы начинаете видеть внешние и
                    внутренние изменения.
                  </div>
                </div>
              </div>
              <div className="  flex ">
                <div className="min-w-12     me-2 sm:me-5 flex flex-col  items-center">
                  <div className="w-10 absolute  h-10 z-20 rounded-full text-2xl items-center flex justify-center bg-green-300   ">
                    3
                  </div>{" "}
                  <div className="w-5 mt-9 absolute  z-10 h-4 bg-white"></div>
                </div>
                <div className="">
                  <div className="font-medium text-gray-800 mb-2">
                    Завершающий этап
                  </div>
                  <div className="mb-4 text-gray-700">
                    Завершающий этап - ретенционный, во время которого
                    фиксируется или устанавливается ретенционный аппарат: капа
                    или несъемный ретейнер. Это обязательно и необходимо, чтобы
                    зубы не вернулись в исходное положение. А они очень будут
                    стараться это сделать.
                  </div>
                </div>
              </div>
            </div>
            <div className="text-3xl font-medium text-gray-800 my-5">
              ОРТОДОНТИЧЕСКИЕ СИСТЕМЫ{" "}
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700">
              <div className="mb-4">
                Ортодонтические системы могут быть двух видов: съемные и
                несъёмные.
              </div>
              <div className="mb-4">
                <div className="">1.Съемные конструкции</div>
                <div className="">
                  Съемные конструкции удобны и эстетичны. В основном это капы.
                  Они носятся столько, сколько вам посоветует врач (или 24 часа
                  или только на ночь). Капы воздействуют на зубочелюстную
                  систему мягко и аккуратно, легко чистятся и обрабатываются,
                  так как их в любую минуту можно снять
                </div>
              </div>{" "}
              <div className="mb-4">
                <div className="">2.Капы</div>
                <div className="">
                  Капы могут быть первым этапом ортодонтического лечения. После
                  определённого периода их применения могут быть установлены
                  брекеты. Выбор такой последовательности и применения
                  комплексного лечения очень индивидуально и зависит от
                  клинического случая.
                </div>
              </div>{" "}
              <div className="mb-4">
                <div className="">3.Пластинки</div>
                <div className="">
                  Ещё один вид съемной конструкции - пластинки. Пластинки также
                  изготавливаются и подбираются под каждого пациента отдельно.
                  Они тоже должны носиться постоянно, чтобы не прерывать
                  лечебный процесс.
                </div>
              </div>{" "}
              <div className="mb-4">
                <div className="">4.Трейнер</div>
                <div className="">
                  Трейнер для зубов- применяется в тех случаях, когда брекеты не
                  могут быть использованы. Трейнер изготавливается из
                  эластичного силикона. Он помогает механически выровнять зубы,
                  провести корректировку положения языка, процесса глотания,
                  исправить дефекты речи и откорректировать носовое дыхание.
                  Внимание! Данный вид лечения необходимо применять в комплексе
                  с другими лечебными мероприятиями, которые для вас
                  индивидуально разработают врачи других специализаций.
                </div>
              </div>{" "}
            </div>
            <div className="text-3xl font-medium text-gray-800 my-5">
              БРЕКЕТЫ
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700">
              Несъёмная ортодонтическая конструкция - брекеты
            </div>
            <div className="">
              Наверно вы уже знаете, что брекеты могут быть по расположению и
              установке лингвальными (фиксируются на внутреннюю поверхность
              зубов - со стороны языка) и вестибулярными (фиксируются на внешнюю
              видимую поверхность).
            </div>
            <div className="">
              А по материалу, из которого они изготовлены: металлические и
              безметалловые. Эстетические брекеты очень популярны сейчас у нашим
              пациентов, так как они функциональны и практически не видимы на
              зубах, так как фиксация их между собой возможна также невидимой
              дугой.
            </div>
            <div className="text-3xl font-medium text-gray-800 my-5">
              МЕТАЛЛИЧЕСКИЕ БРЕКЕТЫ
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 mb-3">
              Металлические брекеты - очень функциональны. Они устанавливаются
              на чуть короткий срок по сравнению с другими, очень прочны и
              износоустойчивые. К тому же их немного проще расфиксировать и
              удалить с поверхности зубов.
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 mb-3">
              Обратите внимание, что возможна комбинированная форма
              ортодонтической конструкции. Это когда на передние зубы
              устанавливают керамические или сапфировые брекеты, а на
              жевательные зубы металлические брекеты.
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 mb-3">
              Стоимость ортодонтического лечения зависит от сложности нарушения
              и патологии. Определяться она может в индивидуальном порядке.
              Средние цены можно посмотреть в нашем{" "}
              <a href="./price" className="underline">
                {" "}
                прайс листе
              </a>
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 mb-3">
              Стоит также отметить, что выраженные нарушения прикуса являются не
              только эстетическим дефектом, но и не позволяют производить
              качественные гигиенические процедуры, эффективное терапевтическое
              или ортопедическое лечение.
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 mb-3">
              Если вы не хотите стать заложником многочисленных недугов,
              причиной которых является неправильный прикус, то рекомендуем
              своевременно пройти диагностику и, если необходимо, курс лечения.
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

export default Ortodontya;

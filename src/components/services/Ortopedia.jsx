import React from "react";
import Header from "../Header";
import Sidebar from "./Sidebar";
import Call from "./Call";
import Fot from "./Fot";
import AllPrice from "./AllPrice";
import ToMain from "./ToMain";

function Ortopedia() {
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
              src="/img/f2/ortoped.webp"
              alt=""
              className="w-full rounded-3xl mb-10"
            />
          </div>
          <div className="pe-3 sm:pe-6 md:pe-10">
            <div className="text-5xl sm:text-6xl mb-7">Ортопедия</div>
            <div className="text-lg sm:text-xl text-gray-900 mb-3">
              Консультация проводится бесплатно
            </div>{" "}
            <div className="text-lg sm:text-xl text-gray-900 mb-3">
              Приём ведёт:
            </div>{" "}
            <div className="text-lg sm:text-xl text-blue-800  mb-2">
              Бобрышев Виталий Викторович (Черняховск, Калининград)
            </div>
            <div className="text-lg sm:text-xl text-blue-800  mb-2">
              Тришкин Дмитрий Александрович (Калининград, Черняховск)
            </div>{" "}
            <div className="text-lg sm:text-xl text-blue-800  mb-5">
              Ливанцов Михаил Михайлович (Калининград)
            </div>{" "}
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div>Безметалловая керамика </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                12 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div>Полный или частичный протез </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                15 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div>Диоксид циркониевая коронка на импланте </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                18 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div>Металлокерамическая коронка </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                12 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div>Пластмассовая коронка, зуб 1ед. </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                1 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div>Керамические Виниры – Ортопедические </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                15 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div>Съемный протез системы "acry-free" </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                30 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
              <div>Сьемные протезы с использованием армированной сетки </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                17 тыс руб
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-2 flex justify-between">
              <div>Диоксид циркониевая коронка </div>
              <div className="text-end min-w-25 flex items-center justify-end ms-3">
                {" "}
                16 тыс руб
              </div>
            </div>
            <AllPrice />
            <div className="text-3xl  font-medium text-gray-800 my-5">
              Ортопедия{" "}
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700">
              Вопрос необходимости протезирования зубов встает практически перед
              каждым человеком. Часто проблему их отсутствия воспринимают только
              как эстетическую. Но это неверно. Потеря зубов негативно скажется
              на здоровье. Даже отсутствие одного зуба влияет на состояние
              организма. Например, невозможность пережевывать пищу способствует
              развитию проблем с желудочно-кишечным трактом. Чтобы решить эту
              проблему, обращайтесь к нашим стоматологам.
            </div>
            <div className="text-3xl  font-medium text-gray-800 my-5">
              Что собой представляют системы?{" "}
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700">
              <div className="mb-3">
                Зубной протез – специальная конструкция, которая заменяет
                естественные зубы при их утрате. Системы имеют две функции:
                восстанавливают функции челюсти и служат эстетическим замещением
                естественных единиц.
              </div>
              <div className="mb-2">Главные задачи протеза:</div>
              <div className="ms-4">
                <div className="mb-2">
                  восстановить анатомию и физиологию зубного ряда;
                </div>
                <div className="mb-2">
                  вернуть равномерную нагрузку на челюсть;
                </div>
                <div className="mb-5"> обеспечивать плотное прилегание.</div>
              </div>
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700">
              <div className="mb-3">
                При выборе услуги по протезированию зубов имеет значение
                следующее:
              </div>
              <div className="ms-4">
                <div className="mb-2">количество замещаемых единиц</div>
                <div className="mb-2">состояние челюсти и дёсен</div>
                <div className="mb-3"> стоимость изделия</div>
              </div>
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700">
              Главный критерий – количество зубов, которое надо заместить.
              Исходя из этого, больному подбирают тип протеза для протезирования
              зубов.
            </div>
            <div className="text-3xl  font-medium text-gray-800 my-5">
              Какие виды конструкций бывают?{" "}
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700">
              <div className="mb-2">
                Ещё десятилетие назад не существовало практически никакого
                выбора. Сейчас множество стоматологических клиник предлагают
                услуги протезирования зубов по разным ценам. Огромное
                разнообразие конструкций позволяет широко варьироваться
                стоимости протезирования зубов.
              </div>{" "}
              <div className="mb-4">
                При частичном протезировании пользуются несколькими видами
                конструкций. Можно ставить как несъемные, так и съемные зубные
                протезы.
              </div>
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 mb-2">
              Применяют следующие несъемные конструкции
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 ms-4">
              <div className="mb-2">
                {" "}
                Мостовидный протез. Его конструкция состоит из системы двух
                коронок и группы искусственных зубов, которые находятся между
                ними. Их применяют, когда у пациента нет от одного до четырёх
                зубов.
              </div>
              <div className="mb-2">
                Протезирование на имплантах – конструкции, которые вживляются в
                челюсть пациента. Это возможно благодаря искусственному
                титановому корню. Этими конструкциями заменяют от одной до
                четырёх зубов.
              </div>
              <div className="mb-2">
                Частично съёмные протезы – системы используют, если надо
                протезировать две и более единиц. Их ставят, когда рядом с
                утраченными зубами есть здоровые зубы, за которые осуществляют
                крепление.
              </div>
              <div className="mb-2">
                Бюгельный протез – он состоит из металлической дуги, к которой
                прикрепляются жевательные элементы. Система дает равномерную
                нагрузку на всю челюсть.
              </div>
              <div className="mb-5">
                Пластинчатые протезы – их применяют при частичном протезировании
                при отсутствии зубов через один или группы подряд.
              </div>
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 mb-2">
              Выделяют виды полных протезов:
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 ms-4">
              <div className="mb-2">
                Съёмные протезы – дугообразные конструкции. На верхней челюсти
                они держатся на дёснах, а на верхней упираются в нёбо.
                Жевательные части изготавливают из пластика. Основание протезов
                производят из разных материалов. Для этого вида протезирования
                зубов типичны доступные цены.{" "}
              </div>
              <div className="mb-2">
                Имплант на кнопках – для его установки проводят оперативное
                вмешательство. Сначала вживляют в десну импланты. У них на конце
                есть кнопки. В конструкции предусмотрены конгруэнтные отверстия,
                за которые осуществляется крепление.{" "}
              </div>
              <div className="mb-4">
                Имплантация на балках – при нем сначала вживляют до 4-х
                креплений. Система удерживается на имплантах с металлическими
                балками между ними. Такое строение увеличивает опорную функцию
                протеза.{" "}
              </div>
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 mb-5">
              Все протезные конструкции изготавливаются в лабораториях
              индивидуально. Пациент совместно со стоматологом может подобрать
              подходящую конструкцию и материалы для изготовления. Разнообразие
              предложений позволит подобрать себе вариант в нашей стоматологии с
              протезированием зубов по доступной цене.
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700 mb-4 ">
              Что такое "зубные коронки"?
            </div>
            <div className="lg:text-lg sm:text-xl text-gray-700">
              Коронки - вид стоматологической реставрации, которые, будучи
              закрепленными на месте при помощи цемента, полностью накрывают ту
              часть зуба, которая выступает над линией десны. (Для сравнения
              напомним о пломбах - эти реставрации лишь частично заполняют или
              закрывают зуб). Поскольку зубная коронка закрывает всю видимую
              часть зуба, то она, по сути, становится его новой внешней
              поверхностью. Коронки делают из фарфора, золота (или других
              металлических сплавов), или комбинируют эти материалы.
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

export default Ortopedia;

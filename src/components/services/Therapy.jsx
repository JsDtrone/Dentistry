import React from "react";
import Header from "../Header";
import Sidebar from "./Sidebar";
import Call from "./Call";
import Fot from "./Fot";
import ToMain from "./ToMain";
import AllPrice from "./AllPrice";

function Therapy() {
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
              src="/img/f2/therapy.webp"
              alt=""
              className="w-full rounded-3xl mb-10"
            />
          </div>
          <div className="pe-3 sm:pe-6 md:pe-10">
            <div className="text-5xl sm:text-6xl mb-7">Терапия</div>
            <div className="text-lg sm:text-xl text-gray-800  mb-5">
              Консультация проводится бесплатно
            </div>{" "}
            <div className="text-lg sm:text-xl text-gray-800  mb-5">
              <div className="mb-2">Приём ведёт:</div>
              <div className="mb-2 text-blue-800">
                Тришкин Дмитрий Александрович (Калининград, Черняховск)
              </div>
              <div className="mb-2 text-blue-800">
                Бичюлайтене Александра Александровна (Черняховск)
              </div>
              <div className="mb-2 text-blue-800">
                Умнова Валерия Николаевна (Калининград)
              </div>
              <div className="mb-2 text-blue-800">
                Боряева Ольга Алексеевна (Калининград)
              </div>
              <div className="mb-2 text-blue-800">
                Бутенко Юлия Владимировна (Калининград)
              </div>
            </div>
            <div className="  mb-3">
              <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
                <div>Реставрация передних зубов композиционным материалом </div>
                <div className="text-end min-w-25 flex items-center justify-end ms-3">
                  {" "}
                  8 тыс руб
                </div>
              </div>
              <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
                <div>Лечение глубокого кариеса 2/3</div>
                <div className="text-end min-w-25 flex items-center justify-end ms-3">
                  6.5 тыс руб
                </div>
              </div>
              <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
                <div>Лечение среднего кариеса 1/2 </div>
                <div className="text-end min-w-25 flex items-center justify-end ms-3">
                  {" "}
                  6 тыс руб
                </div>
              </div>
              <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
                <div>Лечение поверхностного кариеса 1/3 </div>
                <div className="text-end min-w-25 flex items-center justify-end ms-3">
                  {" "}
                  5.5 тыс руб
                </div>
              </div>
              <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
                <div>Лечение 3-х канального зуба </div>
                <div className="text-end min-w-25 flex items-center justify-end ms-3">
                  {" "}
                  13.5 тыс руб
                </div>
              </div>
              <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
                <div>Лечение 2-х канального зуба </div>
                <div className="text-end min-w-25 flex items-center justify-end ms-3">
                  {" "}
                  12.5 тыс руб
                </div>
              </div>
              <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
                <div>Лечение 1-канального зуба </div>
                <div className="text-end min-w-25 flex items-center justify-end ms-3">
                  {" "}
                  10.5 тыс руб
                </div>
              </div>
              <div className="text-lg sm:text-xl text-gray-800 mb-3 flex justify-between">
                <div>Снятие зубных отложений скалер+ air flow </div>
                <div className="text-end min-w-25 flex items-center justify-end ms-3">
                  {" "}
                  4.5 тыс руб
                </div>
              </div>
              <AllPrice />
            </div>
            <div className="text-3xl  font-medium text-gray-800 my-5">
              Что такое пульпит и как он лечится?
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700">
              Пульпит — одна из самых частых причин болей в зубе. Разбиремся, в
              чем причины этого заболевания, как его распознать и как оно
              лечится.
            </div>
            <div className="text-3xl  font-medium text-gray-800 my-5">
              Что вообще такое пульпит?
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700 mb-2">
              Пульпит — это воспаление внутренней структуры зуба, пульпы.
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700 italic mb-2">
              Вообще, наш зуб имеет «слоистое» строение. Сверху он покрыт
              эмалью. Это самая твердая ткань человеческого организма. Под
              эмалью находится основное вещество зуба — дентин. По составу он
              схож с костной тканью, хотя на самом деле таковой не является. А
              вот внутри зуба расположена полость, которая заполнена мягкой
              пульпой. Полость расширена в коронке, а при переходе в корневую
              часть зуба сужается, образуя один или несколько корневых каналов.
            </div>{" "}
            <div className="lg:text-lg sm:text-xl  text-gray-700 mb-2">
              Пульпу еще называют сосудисто-нервным пучком зуба. Это потому, что
              кровеносные сосуды и нервы составляют ее большую часть. Но помимо
              них, в ее состав также входят соединительная ткань и клетки,
              участвующие в производстве дентина.
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700 mb-2">
              Из-за большого количества нервных окончаний любое раздражение
              пульпы вызывает сильную боль.
            </div>
            <div className="text-3xl  font-medium text-gray-800 my-5">
              Из-за чего возникает пульпит?
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700">
              Самая распространенная причина — глубокий кариес. Через кариозную
              полость в пульпу проникает инфекция, которая вызывает ее
              воспаление.
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700 italic">
              Еще микробы могут пробираться внутрь зуба не сверху, через
              коронку, а снизу — через входное отверстие в корне. Такой пульпит
              называют ретроградным. Чаще всего он развивается у пациентов с
              запущенным пародонтитом и инфицированными гайморовыми пазухами.
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700 ">
              Реже пульпит бывает вызван травмами зуба или перегревом тканей во
              время стоматологических манипуляций (например, при обтачивании
              зуба под коронку).
            </div>
            <div className="text-3xl  font-medium text-gray-800 my-5">
              Кариес быстро переходит в пульпит?
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700">
              По-разному. В большинстве случаев кариес развивается медленно — в
              течение многих месяцев, а иногда и лет. Но встречаются и
              молниеносные формы заболевания, когда полости, достигающие пульпы,
              образуются за очень короткое время. Такие случаи обычно связаны с
              угнетением иммунитета. Защитные силы организма могут ослабевать на
              фоне острых инфекционных заболеваний, физических или эмоциональных
              перегрузок.
            </div>
            <div className="text-3xl  font-medium text-gray-800 my-5">
              Как понять, что это пульпит?
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700">
              Есть несколько форм пульпита. Но все они имеют общий симптом —
              болезненность.
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700">
              При остром пульпите боль возникает самопроизвольно, усиливается по
              ночам и от приема горячего. От холодного зуб, как правило,
              успокаивается. Боли носят кратковременный приступообразный
              характер и продолжаются около суток, затем острый пульпит
              переходит в менее выраженный, хронический. При хроническом
              пульпите зуб болит от воздействия различных раздражителей:
              например, при надавливании, приеме горячей пищи. Самопроизвольные
              боли бывают редко. Иногда изо рта у пациента появляется гнилостный
              запах.
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700 italic ">
              Стоматолог диагностирует пульпит по жалобам и результатам осмотра.
              Для уточнения характера и глубины поражения пульпы делаются
              рентгеновское исследование и при необходимости —
              электродиагностика.
            </div>
            <div className="text-3xl  font-medium text-gray-800 my-5">
              Это опасно?
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700">
              Если пульпит не лечить, инфекция может выйти за пределы корня и
              вызвать воспаление окружающих его тканей (периодонта). Это грозит
              развитием так называемого периодонтального абсцесса, при котором у
              кончика зубного корня формируется гнойный мешочек. Со временем
              через кость гной может прорваться наружу и распространиться дальше
              — в разные отделы лица, шеи и даже область сердца. Это уже опасное
              для жизни осложнение, которое называют флегмоной. Но, к счастью,
              на практике оно встречается редко.
            </div>
            <div className="text-3xl  font-medium text-gray-800 my-5">
              Что можно сделать до приема врача?
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700">
              Можно прополоскать рот теплым раствором соды или соли (1 ч. л. на
              полстакана воды), приложить к щеке холодный компресс и выпить
              безрецептурной анальгетик. Попасть на прием к врачу желательно как
              можно раньше. При острой боли в любой клинике вас должны принять
              без предварительной записи.
            </div>{" "}
            <div className="text-3xl  font-medium text-gray-800 my-5">
              Зуб придется удалять?
            </div>
            <div className="lg:text-lg sm:text-xl  text-gray-700">
              <div className="mb-2">
                Необязательно. Даже при переходе пульпита в периодонтит зуб
                зачастую удается спасти.
              </div>

              <div className="mb-2">
                Традиционно лечение многокорневых зубов проводится за три
                визита, а однокорневых — за два.
              </div>

              <div className="mb-2">
                На первом под местной анестезией врач удаляет пораженные твердые
                ткани зуба и пульпу. Затем расширяет, промывает корневые каналы
                и, чтобы окончательно уничтожить инфекцию, закладывает в них
                антисептик. Зуб закрывается временной пломбой.
              </div>
              <div className="mb-2">
                На втором приеме (через 3-7 дней) антисептик удаляют, каналы еще
                раз промывают и пломбируют гуттаперчей и силером (при
                однокорневых зубах каналы пломбируют сразу, на первом визите).
              </div>
              <div className="mb-2">
                При последнем посещении, когда пломбировочный материал в каналах
                окончательно затвердеет, устанавливается пломба на коронковую
                часть зуба. Если разрушено более половины наддесневой части
                зуба, решается вопрос об установке вкладки или искусственной
                коронки.
              </div>
              <div className="mb-2">
                При наличии в клинике микроскопа этап с закладыванием
                антисептика в каналы опускается и сроки лечения пульпита
                сокращаются до двух визитов.
              </div>
              <div className="mb-2 italic">
                Иногда пульпа вообще не удаляется, и зуб удается оставить живым.
                Но такой вариант применим только на ранних стадиях пульпита у
                пациентов моложе 25-27 лет.
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

export default Therapy;

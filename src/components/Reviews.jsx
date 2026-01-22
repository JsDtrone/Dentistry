import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const categories = [
  {
    name: "Виниры",
    posts: [
      {
        id: 1,
        title:
          "Устанавливала керамические виниры у доктора Боряевой. Идеальный подбор цвета, форма зубов выглядит естественно. Процесс занял 2 визита, без дискомфорта. Особенно впечатлило 3D-моделирование улыбки!",
        autor: "Алина К.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Кутаисская",
      },
      {
        id: 2,
        title:
          "Делала виниры на передние зубы после скола. Доктор Лебедева подобрала тон за 5 минут! За 2 недели изготовили пластины, установили за один приём. Чувствительности после обточки не было.",
        autor: "Марина В.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "2ГИС",
        branch: "Суздальская",
      },
      {
        id: 3,
        title:
          "Я работаю в индустрии красоты, и после виниров у меня исчезли комплексы. Улыбка решает любой вопрос! Сергей сделал авторские виниры, которые превзошли ожидания в три раза.",
        autor: "Мария (владелица салона красоты)",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Prodoctorov",
        branch: "Кутаисская",
      },
      {
        id: 4,
        title:
          "Ставила виниры E-max. Цена высокая, но результат того стоит: зубы выглядят как натуральные, даже при близком рассмотрении. Доктор Тришкин проявил ювелирную точность.",
        autor: "Елена С.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Суздальская",
      },
      {
        id: 33,
        title:
          "Ставила керамические виниры у доктора Боряевой. Прекрасный эстетический результат! Зубы выглядят естественно, цвет подобран идеально. Особенно понравилось, что сделали 3D-визуализацию до начала работы.",
        autor: "Анна К.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Суздальская",
      },
    ],
  },
  {
    name: "Чистка зубов",
    posts: [
      {
        id: 5,
        title:
          "Проходила профессиональную чистку AirFlow у Виктории Лебедевой. Удалили даже застарелый налёт от кофе. Зубы стали заметно светлее, эмаль не пострадала. Дали советы по домашнему уходу.",
        autor: "Екатерина М.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Суздальская",
      },
      {
        id: 6,
        title:
          "Чистка + фторирование. Быстро и без боли, но после процедуры десны немного кровоточили. Врач объяснила, что это нормально при чувствительности.",
        autor: "Ольга С.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "2ГИС",
        branch: "Кутаисская",
      },
      {
        id: 7,
        title:
          "Делала чистку и отбеливание. Персонал вежливый, во время процедуры уточняли моё состояние. Все приветливые, клиника чистая. Безумно довольна результатом!",
        autor: "Анна",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "32top.ru",
        branch: "Черняховск",
      },
      {
        id: 8,
        title:
          "Гигиеническую чистку провели небрежно: остался налёт в межзубных промежутках. Пришлось записываться повторно. Администратор извинилась и предложила скидку на следующую процедуру.",
        autor: "Ольга К.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "2ГИС",
        branch: "Суздальская",
      },
      {
        id: 35,
        title:
          "Проходила комплексную чистку зубов. Персонал очень внимательный, врач подробно объяснила все манипуляции. После процедуры зубы стали заметно светлее, исчез налёт от кофе.",
        autor: "Елена В.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Суздальская",
      },
    ],
  },
  {
    name: "Имплантация",
    posts: [
      {
        id: 9,
        title:
          "Установка импланта Straumann после удаления зуба. Хирург Леванцов провёл операцию за час. Через 4 месяца поставили коронку — ощущается как родной зуб! Реабилитация прошла легко.",
        autor: "Юлия Л.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Суздальская",
      },
      {
        id: 10,
        title:
          "Ставила 2 импланта на нижнюю челюсть. Доктор Кремлев — виртуоз! Отек после операции минимальный, швы сняли через неделю. Год наблюдаюсь — импланты прижились идеально.",
        autor: "Татьяна С.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Prodoctorov",
        branch: "Кутаисская",
      },
      {
        id: 11,
        title:
          "Имплантация с немедленной нагрузкой: утром удалили зуб, вечером поставили временную коронку. Через полгода заменили на постоянную. Никаких осложнений за 8 месяцев.",
        autor: "Светлана П.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "2ГИС",
        branch: "Черняховск",
      },
      {
        id: 12,
        title:
          "Отошла коронка от импланта. Доктор Тришкин восстановил её без повреждений. Мастерство врача впечатлило: работал аккуратно, объяснил причину скола (бруксизм) и посоветовал капу.",
        autor: "Анастасия",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Prodoctorov",
        branch: "Кутаисская",
      },
    ],
  },
  {
    name: "Детская стоматология",
    posts: [
      {
        id: 13,
        title:
          "Лечение кариеса у дочки (7 лет). Доктор Ирина использовала игровые методики: показывала инструменты как «волшебные палочки». Ребёнок не испугался! После приёма подарили игрушку.",
        autor: "Ольга Т.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "2ГИС",
        branch: "Черняховск",
      },
      {
        id: 14,
        title:
          "Сын боялся лечить зуб. Врач включил мультики, предложил выбрать цвет пломбы (выбрал голубой). Теперь ходит к стоматологу как на праздник. В холле есть уголок с раскрасками.",
        autor: "Наталья К.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "32top.ru",
        branch: "Суздальская",
      },
      {
        id: 15,
        title:
          "Делали серебрение молочных зубов. Быстро, но ребёнок плакал — врач не нашла подход. Утешили только подаренной машинкой. Цены доступные, но эмоциональный комфорт не обеспечен.",
        autor: "Ирина М.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Кутаисская",
      },
      {
        id: 16,
        title:
          "У дочки воспалилась десна. Доктор Хотнянская осмотрела, назначила аппликации. Через 3 дня симптомы прошли. Отметила «золотые руки» врача и доброе отношение к ребёнку.",
        autor: "Евгения",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "32top.ru",
        branch: "Суздальская",
      },
      {
        id: 38,
        title:
          "Водила сына на лечение кариеса. Доктор нашла подход к ребёнку - всё прошло без слёз и страха. После визита подарили игрушку, теперь сын сам просится к стоматологу!",
        autor: "Ольга Т.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Суздальская",
      },
    ],
  },
  {
    name: "Ортопедия",
    posts: [
      {
        id: 17,
        title:
          "Установила циркониевую коронку. Техник подобрал цвет идентичный соседним зубам! Ношу 8 месяцев — дискомфорта нет, десна не воспаляется. Цена/качество оптимальны.",
        autor: "Галина П.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Prodoctorov",
        branch: "Кутаисская",
      },
      {
        id: 18,
        title:
          "Металлокерамический мост на 3 зуба. Слепки сняли за 20 минут, через неделю поставили конструкцию. Прикус не нарушен, жевать комфортно. Для пенсионеров сделали скидку 10%.",
        autor: "Раиса И.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "2ГИС",
        branch: "Черняховск",
      },
      {
        id: 19,
        title:
          "Обратилась с просьбой отремонтировать сломанный протез. Врач оперативно предложил решение, а администратор проявила редкую вежливость. Результат превзошёл ожидания!",
        autor: "Людмила",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Prodoctorov",
        branch: "Суздальская",
      },
      {
        id: 20,
        title:
          "Неудобный съёмный протез натирал десну. Доктор Аласкаров откорректировал базис за 15 минут. Теперь ношу без проблем. Ассистенты внимательные, клиника оснащена современным оборудованием.",
        autor: "Татьяна В.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Prodoctorov",
        branch: "Кутаисская",
      },
    ],
  },
  {
    name: "Ортодонтия",
    posts: [
      {
        id: 21,
        title:
          "Ношу элайнеры 8 месяцев. Ортодонт Королёва составила чёткий план. Зубы выравниваются быстрее, чем ожидалось. Каждые 2 недели — новая каппа, контроль раз в месяц.",
        autor: "Анна Б.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Кутаисская",
      },
      {
        id: 22,
        title:
          "Дочери-подростку поставили сапфировые брекеты. Доктор показала фото «до/после» — это убедило. Через 8 месяцев зубы встали ровно. Первая неделя была болезненной, но врач предупредила.",
        autor: "Светлана В.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "2ГИС",
        branch: "Суздальская",
      },
      {
        id: 23,
        title:
          "Исправляю прикус лингвальными брекетами. Доктор Музаффаров детально объяснил этапы. Но гигиена сложная: приходится использовать 3 вида щёток. Результат стоит усилий!",
        autor: "Анна С.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Prodoctorov",
        branch: "Черняховск",
      },
      {
        id: 24,
        title:
          "Сняли брекеты раньше срока — зубы стали кривыми. Врач винировал ошибку и предложил повторное лечение со скидкой 30%. Согласилась, но доверие подорвано.",
        autor: "Виктория Н.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Суздальская",
      },
      {
        id: 39,
        title:
          "Ношу брекеты уже полгода. Зубы постепенно выравниваются, процесс идёт по плану. Ортодонт регулярно контролирует процесс, вносит корректировки. Персонал всегда вежливый и внимательный.",
        autor: "Марина К.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Суздальская",
      },
    ],
  },
  {
    name: "Терапия",
    posts: [
      {
        id: 25,
        title:
          "Лечила пульпит. Обезболили так, что не почувствовала укол! Поставили временную пломбу, через 3 дня — постоянную. Рентген показал идеальную пломбировку каналов. Фиксированная цена — без доплат.",
        autor: "Ирина Н.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "2ГИС",
        branch: "Черняховск",
      },
      {
        id: 26,
        title:
          "Пломбирование двух зубов за визит. Материал неотличим от естественной эмали. Через полгода — сколов нет. Дали рекомендации по профилактике кариеса.",
        autor: "Юлия С.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Prodoctorov",
        branch: "Кутаисская",
      },
      {
        id: 27,
        title:
          "Кариес на переднем зубе. Доктор Боряева сделала реставрацию — не отличить от своего! Цвет подобрала за 3 минуты. Теперь улыбаюсь без стеснения.",
        autor: "Анна Самошкина",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "32top.ru",
        branch: "Суздальская",
      },
      {
        id: 28,
        title:
          "Лечила зуб с глубоким кариесом. Через 2 дня пломба выпала — пришлось переделывать. Врач не стал брать доплату, извинился. Повторная реставрация держится год.",
        autor: "Валентина П.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Кутаисская",
      },
      {
        id: 40,
        title:
          "Лечила глубокий кариес. Врач сделал всё аккуратно и без боли. Пломба идеально подобрана по цвету, не отличить от собственного зуба. Через полгода - никаких проблем.",
        autor: "Светлана Н.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Суздальская",
      },
    ],
  },
  {
    name: "Хирургия",
    posts: [
      {
        id: 29,
        title:
          "Удаление зуба мудрости у Ансара Мухтаровича. Сложный случай (горизонтальный рост), операция — 40 минут. Отека почти не было. Врач уверенный, грамотный — это сразу чувствуется!",
        autor: "Евгения",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Prodoctorov",
        branch: "Кутаисская",
      },
      {
        id: 30,
        title:
          "Удалили зуб с кистой. Дали памятку с телефонами на экстренный случай. Ночью возникла боль — проконсультировали по телефону. Через 3 месяца поставлю здесь имплант.",
        autor: "Татьяна М.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "2ГИС",
        branch: "Черняховск",
      },
      {
        id: 31,
        title:
          "Удаляла ретинированный зуб. Хирург Ковалёв сделал разрез аккуратно. Швы сняли через неделю. Антибиотики пила по схеме — осложнений не было. Персонал поддерживал морально!",
        autor: "Оксана Д.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Prodoctorov",
        branch: "Суздальская",
      },
      {
        id: 32,
        title:
          "Удалили 2 зуба за раз. Послеоперационный уход не объяснили. Через 2 дня появился гной — назначили антибиотики. Негативный опыт, хотя анестезия подействовала хорошо.",
        autor: "Кристина К.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Кутаисская",
      },
      {
        id: 42,
        title:
          "Удаляла зуб мудрости. Операция прошла быстро и профессионально. Врач подробно объяснил все послеоперационные рекомендации. Осложнений не возникло, зажило быстро.",
        autor: "Анастасия Д.",
        imgLink: "/img/people/person-dress-solid.svg",
        source: "Яндекс карты",
        branch: "Суздальская",
      },
    ],
  },
];

export default function Reviews() {
  const [act, setAct] = useState(["Виниры"]);

  return (
    <div className="lg:px-10 pb-10 @container" id="reviews">
      <div className="px-4 lg:px-8  pt-4 lg:pt-8 bg-slate-200 rounded-3xl  w-full justify-center ">
        <h4
          className="text-3xl mb-5 font-medium 
        "
        >
          Отзывы
        </h4>
        <div className="w-full ">
          <TabGroup>
            <TabList className="flex flex-wrap  gap-4 mb-10  xl:text-xl">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  onClick={() => {
                    setAct(name);
                    console.log(name);
                  }}
                  className={clsx(
                    "mx-1 sm:mx-3 md:mx-4 lg:mx-0 outline-none text-slate-500 hover:text-slate-950 font-medium ",
                    act == name &&
                      "mx-1 sm:mx-3 md:mx-4 lg:mx-0 outline-none  text-slate-950 hover:text-slate-950  font-semibold"
                  )}
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-3 ">
              {categories.map(({ name, posts }) => (
                <TabPanel key={name} className="">
                  <div className="hidden @min-[860px]:block">
                    <Swiper
                      slidesPerView={2}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="mySwiper  "
                    >
                      {posts.map(({ id, title, autor, imgLink, source }) => (
                        <SwiperSlide
                          key={id}
                          className="p-7 mb-15 h-full bg-white rounded-2xl "
                        >
                          <figure className="max-w-screen-md  mx-auto lg:text-center">
                            <svg
                              className="w-10 h-10 mx-auto mb-3 text-gray-500 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 14"
                            >
                              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <blockquote>
                              <p className="lg:text-lg xl:text-xl 2xl:text-2xl italic font-medium text-gray-900 ">
                                {title}
                              </p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3 ">
                              <img
                                className="w-6 h-6 rounded-full"
                                src={imgLink}
                                alt="profile picture"
                              />
                              <div className="flex items-center divide-x-2  divide-gray-500 ">
                                <cite className="pe-3 font-medium text-gray-900 ">
                                  {autor}
                                </cite>
                                <cite className="ps-3 text-sm text-gray-500 ">
                                  {source}
                                </cite>
                              </div>
                            </figcaption>
                          </figure>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="block  @min-[860px]:hidden">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="mySwiper "
                    >
                      {posts.map(({ id, title, autor, imgLink, source }) => (
                        <SwiperSlide
                          key={id}
                          className="p-7 mb-15 h-full bg-white rounded-2xl "
                        >
                          <figure className="max-w-screen-md  mx-auto lg:text-center">
                            <svg
                              className="w-10 h-10 mx-auto mb-3 text-gray-500 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 14"
                            >
                              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <blockquote>
                              <p className="lg:text-lg xl:text-xl 2xl:text-2xl italic font-medium text-gray-900 ">
                                {title}
                              </p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3 ">
                              <img
                                className="w-6 h-6 rounded-full"
                                src={imgLink}
                                alt="profile picture"
                              />
                              <div className="flex items-center divide-x-2  divide-gray-500 ">
                                <cite className="pe-3 font-medium text-gray-900 ">
                                  {autor}
                                </cite>
                                <cite className="ps-3 text-sm text-gray-500 ">
                                  {source}
                                </cite>
                              </div>
                            </figcaption>
                          </figure>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const servC = [
    {
      name: "Установка виниров",
      link: "/vinir",
      srcP: "/img/final/vinir.webp",
      price: "15 тыс",
      from: "от",
    },
    {
      name: "Детская стоматология",
      link: "/childish",
      srcP: "/img/f2/cheildren.webp",
      price: "700",
      from: "от",
    },
    {
      name: "Чистка зубов",
      link: "/cleaning",
      srcP: "/img/f2/chistka.webp",
      price: "4,5 тыс",
      from: "",
    },
    {
      name: "Ортопедия",
      link: "/orthopedics",
      srcP: "/img/f2/ortoped.webp",
      price: "1 тыс",
      from: "от",
    },
    {
      name: "Терапия",
      link: "/therapy",
      srcP: "/img/f2/therapy.webp",
      price: "4,5 тыс",
      from: "от",
    },
    {
      name: "Ортодонтия",
      link: "/orthodontics",
      srcP: "/img/f2/ortodont.webp",
      price: "12 тыс",
      from: "от",
    },
    {
      name: "Имплантация",
      link: "/implants",
      srcP: "/img/f2/implant.webp",
      price: "14 тыс",
      from: "от",
    },
    {
      name: "Хирургия",
      link: "/hirurgia",
      srcP: "/img/f2/hirurgia.webp",
      price: "1,8 тыс",
      from: "от",
    },
  ];
  const servD = [
    {
      name: "Косметология",
      link: "/cosmetology",
      srcP: "/img/f2/kosmetology.webp",
      price: "350",
      from: "от",
    },
    {
      name: "Процедурный кабинет",
      link: "/citilab",
      srcP: "/img/f2/inections.webp",
      price: "200",
      from: "от",
    },
  ];
  const serV = [
    {
      name: "Установка виниров",
      link: "/vinir",
      srcP: "/img/final/vinir.webp",
      price: "15 тыс",
      from: "от",
    },
    {
      name: "Детская стоматология",
      link: "/childish",
      srcP: "/img/f2/cheildren.webp",
      price: "700",
      from: "от",
    },
    {
      name: "Чистка зубов",
      link: "/cleaning",
      srcP: "/img/f2/chistka.webp",
      price: "4,5 тыс",
      from: "",
    },
    {
      name: "Ортопедия",
      link: "/orthopedics",
      srcP: "/img/f2/ortoped.webp",
      price: "1 тыс",
      from: "от",
    },
    {
      name: "Терапия",
      link: "/therapy",
      srcP: "/img/f2/therapy.webp",
      price: "4,5 тыс",
      from: "от",
    },
    {
      name: "Ортодонтия",
      link: "/оrthodontics",
      srcP: "/img/f2/ortodont.webp",
      price: "12 тыс",
      from: "от",
    },
    {
      name: "Имплантация",
      link: "/implants",
      srcP: "/img/f2/implant.webp",
      price: "14 тыс",
      from: "от",
    },
    {
      name: "Хирургия",
      link: "/hirurgia",
      srcP: "/img/f2/hirurgia.webp",
      price: "1,8 тыс",
      from: "от",
    },
    {
      name: "Косметология",
      link: "/cosmetology",
      srcP: "/img/f2/kosmetology.webp",
      price: "350",
      from: "от",
    },
    {
      name: "Процедурный кабинет",
      link: "/citilab",
      srcP: "/img/f2/inections.webp",
      price: "200",
      from: "от",
    },
  ];
  return (
    <div className="lg:px-10 pb-10 font-sans @container" id="services">
      <div className="pt-6  px-4 xl:px-10 pb-10 2xl:pt-12 2xl:px-20 2xl:pb-20  bg-slate-200 rounded-3xl">
        <h3 className="text-5xl font-medium text-slate-900  mb-5 ps-1">
          Услуги
        </h3>{" "}
        <div className=" mb-6">
          <h3 className="text-2xl font-medium ">
            Бесплатная консультация по всем предоставляемым услугам
          </h3>
          <span className="text-xl">
            На консультативном приеме мы проводим осмотр полости рта, составляем
            план лечения, озвучиваем смету.
          </span>
        </div>
        <div className="2xl:grid hidden 2xl:grid-cols-5 gap-x-10 grid-rows-1">
          <div className="col-span-4 grid grid-cols-4 gap-5  grid-rows-2">
            {servC.map(({ name, link, srcP, price, from }) => (
              <div
                key={link}
                className="flex flex-col rounded-2xl shadow-lg  h-full bg-blue-50"
              >
                <div className="h-fit w-full   ">
                  <img
                    src={srcP}
                    alt={name}
                    className="w-full rounded-t-2xl aspect-auto"
                  />
                </div>
                <div className="h-full flex flex-col justify-between px-5 pb-5 pt-3  ">
                  <div className="">
                    <div className="text-2xl 2xl:text-3xl pt-3 2xl:pt-5 ">
                      {name}
                    </div>
                    <div className="mb-6 mt-2 text-lg cursor-pointer   text-slate-700  hover:underline hover:text-slate-950">
                      <a href={link}> Узнать подробнее →</a>
                    </div>
                  </div>
                  <div className="text-3xl  text-end mt-6">
                    <span className="text-xl "> {from} </span>
                    {price}
                    <span className="text-xl "> руб</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="2xl:grid hidden col-span-2 2xl:col-span-1 grid-cols-2  2xl:grid-cols-1 gap-5  grid-rows-2">
            {servD.map(({ name, link, srcP, price, from }) => (
              <div
                key={link}
                className=" flex flex-col rounded-2xl shadow-lg  h-full bg-blue-50"
              >
                <div className="h-1/2 w-full   ">
                  <img src={srcP} alt={name} className="w-full rounded-t-2xl" />
                </div>
                <div className="h-1/2 flex flex-col justify-between px-5 pb-5 pt-3  ">
                  <div className="">
                    <div className="text-3xl pt-5 ">{name}</div>
                    <div className="mt-2 text-lg cursor-pointer   text-slate-700  hover:underline hover:text-slate-950">
                      <a href={link}> Узнать подробнее →</a>
                    </div>
                  </div>
                  <div className="text-3xl  text-end mt-6">
                    <span className="text-xl "> {from} </span>
                    {price}
                    <span className="text-xl "> руб</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid 2xl:hidden @min-[500px]:grid-cols-2 @min-[768px]:grid-cols-3 @min-[1024px]:grid-cols-4 gap-4 xl:gap-5 grid-rows-1">
          {serV.map(({ name, link, srcP, price, from }) => (
            <div
              key={link}
              className="flex flex-col rounded-2xl shadow-lg  h-full bg-blue-50"
            >
              <div className="h-fit w-full   ">
                <img
                  src={srcP}
                  alt={name}
                  className="w-full rounded-t-2xl aspect-auto"
                />
              </div>
              <div className="h-full flex flex-col justify-between px-5 pb-5 pt-3  ">
                <div className="">
                  <div className="text-2xl 2xl:text-3xl pt-3 2xl:pt-5 ">
                    {name}
                  </div>
                  <div className="mb-6 mt-2 text-lg cursor-pointer   text-slate-700  hover:underline hover:text-slate-950">
                    <a href={link}> Узнать подробнее →</a>
                  </div>
                </div>
                <div className="text-xl xl:text-2xl 2xl:text-3xl  text-end mt-6">
                  <span className="text-xl "> {from} </span>
                  {price}
                  <span className="text-xl "> руб</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

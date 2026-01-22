import React from "react";

function People() {
  const people = [
    {
      name: "Бобрышев Виталий Викторович",
      post: "Стоматолог-ортопед",
      experience: "20 лет",
      university: "",
      src: "/img/final/2/1.webp",
    },
    {
      name: "Тришкин Дмитрий Александрович",
      post: "Стоматолог-терапевт, хирург, ортопед",
      experience: "9 лет",
      university: "Самаркандский государственный медицинский институт",
      src: "/img/final/2/2.webp",
    },
    {
      name: "Кремлев Владимир Андреевич",
      post: "Стоматолог–хирург, челюстно-лицевой хирург, имплантолог",
      experience: "10 лет",
      university: "",
      src: "/img/final/2/3.webp",
    },
    {
      name: "Ливанцов Михаил Михайлович",
      post: "стоматолог хирург, хирург имплантолог",
      experience: "12 лет",
      university: "",
      src: "/img/final/2/14.webp",
    },
    {
      name: "Боряева Ольга Алексеевна",
      post: "Cтоматолог-терапевт",
      experience: "18 лет",
      university: "Тольяттинский медицинский колледж",
      src: "/img/final/2/4.webp",
    },
    {
      name: "Тур Наталья Валерьевна",
      post: "Стоматолог-ортодонт",
      experience: "10 лет",
      university: "",
      src: "/img/final/2/5.webp",
    },
    {
      name: "Бичюлайтене Александра Александровна",
      post: "Стоматолог-терапевт, хирург",
      experience: "17 лет",
      university: "Калининградский медицинский колледж ",
      src: "/img/final/2/6.webp",
    },
    {
      name: "Летвинова Галина Владимировна",
      post: "Врач косметолог",
      experience: "10 лет",
      university: "",
      src: "/img/final/2/7.webp",
    },
    {
      name: "Астапенко Юлия Вадимовна",
      post: "Стоматолог -терапевт, хирург, ортопед",
      experience: "8 лет",
      university: "Смоленская государственная медицинская академия",
      src: "/img/final/2/8.webp",
    },
    {
      name: "Усова Анастасия Александровна",
      post: "Стоматолог-терапевт",
      experience: "3 года",
      university: "Тверской государственный медицинский университет ",
      src: "/img/final/2/9.webp",
    },
    {
      name: "Умнова Валерия Николаевна",
      post: "Стоматолог-терапевт",
      experience: "2 года",
      university: "Ижевская государственная медицинская академия",
      src: "/img/final/2/10.webp",
    },
    // {
    //   name: "Лебедева Виктория Александровна",
    //   post: "стоматолог-терапевт, детский стоматолог",
    //   experience: "2 года",
    //   university: "Уральский государственный медицинский университет ",
    //   src: "/img/final/2/11.webp",
    // },
    {
      name: "Черникова Яна Валерьевна",
      post: "стоматолог - терапевт, детский стоматолог",
      experience: "4 года",
      university: "Смоленская государственная медицинская академия ",
      src: "/img/final/2/12.webp",
    },
    {
      name: "Ковалева Мария Дмитриевна",
      post: "Стоматолог хирург , имплантолог",
      experience: "10 лет",
      university: "",
      src: "/img/final/2/13.webp",
    },
    {
      name: "Забоева Екатерина Александровна",
      post: "Стоматолог-терапевт",
      experience: "стаж 6 лет",
      university: "",

      src: "/img/final/2/16.webp",
    },
    {
      name: "Бутенко Юлия Владимировна",
      post: "Стоматолог-терапевт",
      experience: "стаж 5 лет",
      university: "Алтайский государственный медицинский университет",

      src: "/img/final/2/15.webp",
    },
  ];
  return (
    <div className="lg:px-10 pb-10">
      <div className="p-4 lg:p-8 bg-slate-200 rounded-3xl">
        <div className="text-3xl mt-3 lg:mt-0 font-medium  mb-6">
          Наши специалисты
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 grid-flow-rows gap-6 sm:gap-4 md:gap-3 lg:gap-6">
          {people.map(({ name, post, experience, university, src }) => (
            <div
              key={src}
              className="w-full pb-4 shadow-sm md:shadow-md   bg-emerald-200  rounded-3xl"
            >
              <div className="h-60 xl:h-90 bg-blue-200   rounded-t-3xl   rounded-b-xl  mb-6 flex justify-center align-bottom ">
                <img src={src} alt="" className="h-full" />
              </div>
              <div className="lg:px-6  md:px-3 px-4 lg:p-0 text-lg lg:text-xl xl:text-2xl mb-2">
                {name}
              </div>
              <div className="lg:px-6 text-blue-800 md:px-3 px-4 lg:p-0 text-base lg:text-lg xl:text-xl mb-2">
                {post}
              </div>
              <div className=" lg:px-6 md:px-3 text-slate-700 px-4 lg:p-0 text-sm lg:text-base xl:text-lg mb-2">
                Общий клинический стаж {experience}
              </div>
              <div className="lg:px-6  md:px-3 px-4 text-slate-700   lg:p-0 text-sm lg:text-base xl:text-lg">
                {university}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default People;

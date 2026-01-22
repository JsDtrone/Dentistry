import React from "react";

function Sidebar() {
  const serV = [
    {
      name: "Установка виниров",
      link: "/vinir",
      srcP: "/img/final/vinir.jpg",
      price: "15 тыс",
      from: "от",
    },
    {
      name: "Детская стоматология",
      link: "/childish",
      srcP: "/img/f2/cheildren.jpg",
      price: "700",
      from: "от",
    },
    {
      name: "Чистка зубов",
      link: "/cleaning",
      srcP: "/img/f2/chistka.jpg",
      price: "4,5 тыс",
      from: "",
    },
    {
      name: "Ортопедия",
      link: "/orthopedics",
      srcP: "/img/f2/ortoped.jpg",
      price: "1 тыс",
      from: "от",
    },
    {
      name: "Терапия",
      link: "/therapy",
      srcP: "/img/f2/therapy.jpg",
      price: "4,5 тыс",
      from: "от",
    },
    {
      name: "Ортодонтия",
      link: "/orthodontics",
      srcP: "/img/f2/ortodont.jpg",
      price: "12 тыс",
      from: "от",
    },
    {
      name: "Имплантация",
      link: "/implants",
      srcP: "/img/f2/implant.jpg",
      price: "14 тыс",
      from: "от",
    },
    {
      name: "Хирургия",
      link: "/hirurgia",
      srcP: "/img/f2/hirurgia.jpg",
      price: "1,8 тыс",
      from: "от",
    },

    {
      name: "Косметология",
      link: "/cosmetology",
      srcP: "/img/f2/kosmetology.jpg",
      price: "350",
      from: "от",
    },
    {
      name: "Процедурный кабинет",
      link: "/citilab",
      srcP: "/img/f2/inections.jpg",
      price: "200",
      from: "от",
    },
  ];
  return (
    <div className="  xl:text-lg">
      <div className=" text-2xl  mb-4 ms-2">Услуги</div>
      {serV.map(({ name, srcP, link }) => (
        <a href={link} key={srcP}>
          <div className=" bg-white shadow-md  px-4 py-3 rounded-2xl mb-3 flex justify-between">
            <div className="">{name}</div>
            <div className=" ms-5">→</div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Sidebar;

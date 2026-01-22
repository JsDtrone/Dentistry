import React from "react";

function Call() {
  return (
    <div className=" @container">
      <div className="bg-teal-600 text-white w-full rounded-3xl p-4 lg:p-8 ">
        <h3 className="text-3xl ">Записаться на прием</h3>
        <p className="text-lg mb-10">
          Заполните форму и администратор свяжется с вами в ближайшее время
        </p>
        <div className="">
          <form
            name="form"
            method="post"
            action="https://luvidenta.ru/mail.php"
            className=" @min-[870px]:grid grid-cols-3 gap-x-4 "
          >
            <div className="">
              <input
                name="name"
                type="text"
                placeholder="Введите Ваше имя"
                required
                className="bg-slate-50 border p-4  border-slate-300 shadow shadow-emerald-700 text-slate-900 lg:text-lg  sm:py-6 rounded-2xl block w-full sm:text-xl mb-3 @min-[870px]:mb-0 @min-[870px]:w-full "
              />
            </div>
            <div className="">
              <input
                for="phone"
                name="phone"
                type="text"
                placeholder="Введите Ваше номер телефона"
                required
                className="bg-slate-50 border p-4  border-slate-300 shadow shadow-emerald-700 text-slate-900 lg:text-lg rounded-2xl  sm:py-6   block w-full sm:text-xl mb-3 @min-[870px]:mb-0 @min-[870px]:w-full  "
              />
            </div>
            <button
              type="submit"
              className=" text-slate-900  lg:text-lg rounded-2xl shadow shadow-emerald-700   flex items-center justify-between px-8 py-4 sm:py-6  w-full sm:text-xl mb-3 @min-[870px]:mb-0 @min-[870px]:w-full  bg-emerald-300"
            >
              <div className="">Записаться</div>

              {/* <div className="">→</div> */}
            </button>
          </form>
        </div>
        <p className="mt-2 ms-1">
          Нажимая кнопку "Записаться", Вы даете согласие на обработку
          персональных данных
        </p>
        <p className="mt-6 ms-1 text-xl mb-3">Или по телефону</p>
        <div className="@min-[870px]:grid grid-cols-3 gap-x-4">
          <a href="tel:4012670202">
            {" "}
            <div className=" bg-slate-50 w-full  @min-[870px]:mb-0 mb-4 text-slate-900 font-medium  py-2 sm:py-3 sm:text-xl text-center rounded-2xl cursor-pointer">
              <h5 className="mb-2">ул. Суздальская</h5>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className=" h-7 inline me-1"
                  >
                    <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                  </svg>
                </span>
                4012 67-02-02
              </p>
            </div>
          </a>
          <a href="tel:4012670505">
            <div className=" bg-slate-50 w-full  @min-[870px]:mb-0 mb-4 text-slate-900 font-medium  py-2 sm:py-3 sm:text-xl text-center rounded-2xl cursor-pointer">
              <h5 className="mb-2">ул. Кутаисская</h5>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className=" h-7 inline me-1"
                  >
                    <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                  </svg>
                </span>
                4012 67-05-05
              </p>
            </div>
          </a>
          <a href="tel:4014135402">
            <div className=" bg-slate-50 w-full  @min-[870px]:mb-0 mb-4 text-slate-900 font-medium  py-2 sm:py-3 sm:text-xl text-center rounded-2xl cursor-pointer">
              <h5 className="mb-2">г. Черняховск</h5>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className=" h-7 inline me-1"
                  >
                    <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                  </svg>
                </span>
                4014 13-54-02
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Call;

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    {
      name: "Почему мы?",
      href: "/#benefits",
      click: () => setMobileMenuOpen(false),
    },
    {
      name: "Услуги",
      href: "/#services",
      click: () => setMobileMenuOpen(false),
    },
    {
      name: "Цены",
      href: "/prices",
      click: () => {
        setMobileMenuOpen(false);
      },
    },
    {
      name: "Акции",
      href: "/#promo",
      click: () => setMobileMenuOpen(false),
    },
    {
      name: "Отзывы",
      href: "/#reviews",
      click: () => setMobileMenuOpen(false),
    },

    {
      name: "Адреса",
      href: "/#addresses",
      click: () => setMobileMenuOpen(false),
    },
    {
      name: "Контакты",
      href: "/#contacts",
      click: () => setMobileMenuOpen(false),
    },
  ];
  return (
    <header
      viewport={{ amount: 0.1, once: true }}
      // whileInView="visible"
      initial="hidden"
      className="fixed w-full bg-slate-50 inset-x-0 top-0 z-60 shadow-lg"
    >
      <nav
        className="flex items-center justify-between px-6 p-3 lg:px-8"
        aria-label="Global"
      >
        <div custom={1} className="flex lg:flex-1 me-4">
          <a href="/" className="-m-1.5 px-1.5 pb-1   ms-3">
            <div className="flex justify-center items-center ">
              <img src="img/favicon.svg" alt="" className="w-10" />
              <span className="text-2xl font-semibold ms-3">LuViDenta</span>
            </div>
          </a>
        </div>
        <div className="flex 2xl:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden 2xl:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              custom={navigation.indexOf(item) + 1}
              onClick={item.click}
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 duration-150 hover:text-zinc-500"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden 2xl:flex  2xl:flex-1 2xl:justify-end ms-4">
          <a
            custom={11}
            href="https://t.me/luvidenta"
            className=" leading-6  font-bold  text-gray-900 text-end text-lg hover:text-gray-600  ease-in-out duration-200 cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="w-9 me-3"
            >
              <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
            </svg>
          </a>
          <a
            custom={11}
            href="https://wa.me/+79097887766"
            className="  leading-6 font-bold text-gray-900 text-end text-lg hover:text-gray-600 ease-in-out duration-200 cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8"
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="2xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-70" />
        <Dialog.Panel className="fixed    inset-y-0 right-0 z-70  w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex h-full flex-col">
            <div className="">
              {" "}
              <div className="flex items-center justify-between">
                <div custom={1} className="flex  me-4">
                  <a href="/" className="-m-1.5 px-1.5 pt-1.5 text-gray-900">
                    <div className="flex justify-center items-center ">
                      <img src="img/favicon.svg" alt="" className="w-10" />
                      <span className="text-2xl font-semibold ms-3">
                        LuViDenta
                      </span>
                    </div>
                  </a>
                </div>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                className="mt-6 flow-root"
              >
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        custom={navigation.indexOf(item) + 1}
                        onClick={item.click}
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full   justify-end flex-col">
              <div className="">
                <div className=" text-base font-semibold leading-7 text-gray-900">
                  Калининград, Суздальская 20 к1 п1
                </div>
                <a
                  custom={11}
                  href="tel:89097887766"
                  className=" leading-6  font-bold text-start   text-gray-900  text-lg hover:text-gray-600  ease-in-out duration-200 cursor-pointer "
                >
                  <div className="mb-2">8 909 788 77 66</div>
                </a>
                <div className=" text-base font-semibold leading-7 text-gray-900">
                  Калининград, Кутаисская улица, д. 3
                </div>
                <a
                  custom={11}
                  href="tel:89097952222"
                  className="  leading-6 font-bold text-start text-gray-900  text-lg hover:text-gray-600 ease-in-out duration-200 cursor-pointer "
                >
                  <div className="mb-1">8 909 795 22 22</div>
                </a>
                <div className=" text-base font-semibold leading-7 text-gray-900">
                  Черняховск, Калининградская улица, 14 Б
                </div>
                <a
                  custom={11}
                  href="tel:89097753077"
                  className="  leading-6 font-bold text-start text-gray-900  text-lg hover:text-gray-600 ease-in-out duration-200 cursor-pointer "
                >
                  <div className="mb-1">8 909 775 30 77</div>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;

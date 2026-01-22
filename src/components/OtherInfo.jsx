import React from "react";

function OtherInfo({ color }) {
  if (color == "teal") {
    return (
      <div className="lg:px-10 pb-10 @container">
        <div className=" bg-img-snow-teal-promo text-white w-full rounded-3xl  p-4 lg:p-8 sm:text-xl  ">
          <div className="mb-3 text-xl   sm:text-2xl  w-fit mx-auto text-center">
            График работы в праздничные&nbsp;дни
          </div>
          <div className="mb-1   w-fit  mx-auto text-center ">
            {" "}
            31 декабря, 1&thinsp;-&thinsp;4 января, 7&nbsp;января{" "}
            <span className="hidden sm:inline">- </span>
            <br className="  sm:hidden" />
            выходные дни
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="lg:px-10 pb-10 @container">
        <div className=" bg-img-snow-grey-promo text-black w-full rounded-3xl  p-4 lg:p-8 sm:text-xl  ">
          <div className="mb-3 text-xl   sm:text-2xl  w-fit mx-auto text-center">
            График работы в праздничные&nbsp;дни
          </div>
          <div className="mb-1   w-fit  mx-auto text-center ">
            {" "}
            31 декабря, 1&thinsp;-&thinsp;4 января, 7&nbsp;января{" "}
            <span className="hidden sm:inline">- </span>
            <br className="  sm:hidden" />
            выходные дни
          </div>
        </div>
      </div>
    );
  }
}

export default OtherInfo;

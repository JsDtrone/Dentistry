import React from "react";

function ToMain() {
  return (
    <div className=" max-w-7xl mx-auto mt-20 px-3 @min-[500px]:px-6 @min-[700px]:px-8 @min-[960px]:px-5 mb-6 text-lg sm:text-xl medium">
      <a
        href="./"
        className=" no-underline hover:underline decoration-1  underline-offset-1 hover:text-gray-700"
      >
        ← Вернуться на главную{" "}
      </a>
    </div>
  );
}

export default ToMain;

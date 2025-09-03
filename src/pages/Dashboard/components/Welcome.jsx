import React from "react";

const Welcome = ({ name }) => {
  return (
    <div className="bg-[#063F6C] h-16 md:h-20 text-white p-2 md:p-3 rounded">
      <h1 className="text-base md:text-lg lg:text-xl font-bold font-nunito">
        Welcome Back {name}
      </h1>
      <p className="text-xs md:text-sm font-nunito">Have a Good Day at Work</p>
    </div>
  );
};

export default Welcome;

import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`relative transition-all overflow-hidden group py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles} bg-blue-gradient `}
    >
      Get Started
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
    </button>
  );
};

export default Button;

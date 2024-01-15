import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const Nav = () => {
  const { darktheme, dispatch } = useContext(ExpenseContext);
  const handlechange = () => {
    dispatch({
      type: "THEME",
      payload: darktheme ? false : true,
    });
  };
  return (
    <>
      <nav
        className={`flex items-center justify-between p-4 shadow-md md:text-xl text-sm transition-all duration-500 ${
          darktheme ? "dark-theme" : "light-theme"
        }`}
      >
        khata-book
        <button
          className="rounded-md px-3 p-1 capitalize text-md bg-yellow-500 text-black"
          onClick={handlechange}
        >
          {darktheme ? "light-theme" : "dark-theme"}
        </button>
      </nav>
    </>
  );
};

export default Nav;

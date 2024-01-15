import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import ExpenseContext from "../context/ExpenseContext";
import { deletetrans, edittrans } from "../context/ExpenseAction";

const Listitem = ({ transactions }) => {
  const { dispatch } = useContext(ExpenseContext);
  const handledelete = (id) => {
    const data = deletetrans(id);
    dispatch({
      type: "DELETE",
      payload: data,
    });
  };

  const handleedit = (transactions) => {
    const data = edittrans(transactions);
    dispatch({
      type: "EDIT",
      payload: data,
    });
  };
  return (
    <>
      <li className="listitem flex justify-between items-center bg-lime-500 p-2">
        <div className={transactions.amount > 0 ? "green" : "red"}>
          ₹{transactions.amount}
        </div>
        <p className="text-xl">{transactions.text}</p>
        <div className="flex gap-3 items-center">
          <button
            className="text-red-600 bg-white p-2 font-bold rounded-full"
            onClick={() => handledelete(transactions.id)}
          >
            <FaTrash />
          </button>
          <button
            className="text-white bg-black p-2 rounded-full"
            onClick={() => handleedit(transactions)}
          >
            <FiEdit />
          </button>
        </div>
      </li>
    </>
  );
};

export default Listitem;

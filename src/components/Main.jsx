import React, { useContext, useEffect, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";
import { savetrans, updatetrans } from "../context/ExpenseAction";

const Main = () => {
  const [text, settext] = useState("");
  const [amount, setamount] = useState("");
  const { transactions, dispatch, edit } = useContext(ExpenseContext);
  const balance = transactions.reduce((p, c) => {
    return p + c.amount;
  }, 0);

  // submit form
  const handlesubmit = (e) => {
    e.preventDefault();
    if (edit.isedit) {
      const data = updatetrans({
        id: edit.transactions.id,
        text: text,
        amount: +amount,
      });
      dispatch({
        type: "UPDATE",
        payload: data,
      });
    } else {
      const data = savetrans(text, amount);
      dispatch({
        type: "SAVE",
        payload: data,
      });
    }
    settext("");
    setamount("");
  };

  useEffect(() => {
    settext(edit.transactions.text);
    setamount(edit.transactions.amount);
  }, [edit]);
  return (
    <>
      <main className="grid md:grid-cols-2 grid-cols-1 xs:px-2">
        <div className="main-left bg-slate-400 flex justify-center items-center flex-col md:p-0 p-5 gap-1 md:order-1 order-2">
          <h2 className="text-3xl">current balance</h2>
          <h3 className="text-xl animate-pulse">₹{balance}</h3>
        </div>
        <form
          onSubmit={handlesubmit}
          className="p-5 bg-green-700 md:order-2 order-1"
        >
          <input
            className="w-full bg-transparent placeholder:text-black py-2 border-b-2 outline-none text-white"
            type="text"
            placeholder="enter your transactions"
            value={text}
            onChange={(e) => settext(e.target.value)}
            required
          />
          <input
            className="w-full bg-transparent placeholder:text-black py-2 border-b-2 outline-none text-white"
            type="number"
            placeholder="₹ enter amount"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            required
          />
          <button className="savebtn w-full text-center bg-slate-700 text-white p-2 mt-2">
            save
          </button>
        </form>
      </main>
    </>
  );
};

export default Main;

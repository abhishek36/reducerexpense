import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const Balance = () => {
  const { transactions } = useContext(ExpenseContext);
  const income = transactions
    .filter((transactions) => transactions.amount > 0)
    .reduce((p, c) => p + c.amount, 0);

  const expense = transactions
    .filter((transactions) => transactions.amount < 0)
    .reduce((p, c) => p + c.amount, 0);
    
  return (
    <>
      <div className="balance grid md:grid-cols-2 grid-cols-1 mt-5 xs:px-2">
        <div className="balance-left  p-5 bg-amber-300 flex justify-center items-center flex-col gap-1">
          <h2 className="text-3xl">current income</h2>
          <h3 className="text-xl animate-bounce">₹{income}</h3>
        </div>
        <div className="balance-right p-5 bg-pink-300 flex justify-center items-center flex-col gap-1">
          <h2 className="text-3xl">current expense</h2>
          <h3 className="text-xl animate-bounce">₹{expense}</h3>
        </div>
      </div>
    </>
  );
};

export default Balance;

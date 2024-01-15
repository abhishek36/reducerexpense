import React, { useContext } from "react";
import Listitem from "./Listitem";
import ExpenseContext from "../context/ExpenseContext";

const Listgroup = () => {
  const { transactions } = useContext(ExpenseContext);
  return (
    <>
      <ul className="listgroup mt-5 flex flex-col gap-3 xs:px-2">
        {transactions.map((transactions) => (
          <Listitem key={transactions.id} transactions={transactions} />
        ))}
      </ul>
    </>
  );
};

export default Listgroup;

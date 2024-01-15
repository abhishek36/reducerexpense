import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Balance from "./components/Balance";
import Listgroup from "./components/Listgroup";
import { ExpenseProvider } from "./context/ExpenseContext";

const App = () => {
  return (
    <ExpenseProvider>
      <Nav />
      <div className="container max-w-[1200px] mx-auto mt-5">
        <Main />
        <Balance />
        <Listgroup />
      </div>
    </ExpenseProvider>
  );
};

export default App;

import { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const initialstate = {
    transactions: [],
    edit: { transactions: {}, isedit: false },
    darktheme: false,
  };

  const [state, dispatch] = useReducer(ExpenseReducer, initialstate);
  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        edit: state.edit,
        darktheme: state.darktheme,
        dispatch,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;

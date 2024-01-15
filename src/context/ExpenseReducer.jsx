const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transactions) => transactions.id !== action.payload
        ),
      };

    case "SAVE":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "EDIT":
      return {
        ...state,
        edit: { transactions: action.payload, isedit: true },
      };

    case "UPDATE":
      return {
        ...state,
        transactions: state.transactions.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        edit: { transactions: {}, isedit: true },
      };

    case "THEME":
      return {
        ...state,
        darktheme: action.payload,
      };
  }
};

export default ExpenseReducer;

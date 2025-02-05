const initialState = {
  expenses: [],
};

export const Actiontypes = {
  SET_EXPENSES: "SET_EXPENSES",
  NEW_EXPENSE: "NEW_EXPENSE",
  EDIT_EXPENSE: "EDIT_EXPENSE",
  DELETE_EXPENSE: "DELETE_EXPENSE",
};

export const ActionCreators = {
  setExpenses: (payload) => ({
    type: Actiontypes.SET_EXPENSES,
    payload,
  }),
  newExpense: (payload) => ({
    type: Actiontypes.NEW_EXPENSE,
    payload,
  }),
  editExpense: (payload) => ({
    type: Actiontypes.EDIT_EXPENSE,
    payload,
  }),
  deleteExpense: (payload) => ({
    type: Actiontypes.DELETE_EXPENSE,
    payload,
  }),
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actiontypes.SET_EXPENSES:
      return { ...state, expenses: [...action.payload] };
    case Actiontypes.NEW_EXPENSE:
      return { ...state, expenses: [action.payload, ...state.expenses] };
    case Actiontypes.EDIT_EXPENSE:
      var expenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          expense = action.payload;
        }
        return expense;
      });
      return { ...state, expenses: [...state.expenses] };
    case Actiontypes.DELETE_EXPENSE:
      expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
      return { ...state, expense: [...expenses] };

    default:
      return state;
  }
};

export default expensesReducer;

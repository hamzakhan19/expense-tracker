import { createAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
//no action types, action creators and switch

export const setExpensesError = createAction("setExpensesError");
export const newExpenseError = createAction("newExpenseError");
export const editExpenseError = createAction("editExpenseError");
export const deleteExpenseError = createAction("deleteExpenseError");

export const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
  },
  reducers: {
    setExpenses: (state, action) => {
      return { ...state, expenses: [...action.payload] };
    },
    newExpense: (state, action) => {
      return { ...state, expenses: [action.payload, ...state.expenses] };
    },
    editExpense: (state, action) => {
      const updatedExpenses = state.expenses.map((expense) =>
        expense.id === action.payload.id ? action.payload : expense
      );
      return { ...state, expenses: updatedExpenses };
    },
    deleteExpense: (state, action) => {
      const remainingExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
      return { ...state, expenses: remainingExpenses };
    },
  },
});

export const { setExpenses, newExpense, editExpense, deleteExpense } =
  expensesSlice.actions;

export default expensesSlice.reducer;

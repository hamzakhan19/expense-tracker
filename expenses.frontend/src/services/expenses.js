import axios from "axios";
import {
  setExpenses,
  newExpense,
  editExpense,
  deleteExpense,
} from "../app/expensesSlice";

//axios instance
const axiosInstance = axios.create({
  baseURL: "https://localhost:7067/Expenses",
  headers: {
    "Content-Type": "application/json",
  },
  // Use only if your backend requires authentication/cookies
});

//dispatch is the function of the redux store // dispatch is used to trigger state change
//reducer determines changes our application state. recieves the action and updates the state
export const GetExpenses = async (dispatch) => {
  try {
    //api call
    const { data } = await axiosInstance.get();
    dispatch(setExpenses(data));
  } catch {
    console.log("Error!");
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    const { data } = await axiosInstance.post("", expense);
    dispatch(newExpense(data));
  } catch {
    console.log("Error!");
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    await axiosInstance.put("", expense);
    dispatch(editExpense(expense));
  } catch {
    console.log("Error!");
  }
};

export const DeleteExpense = async (dispatch, expense) => {
  try {
    await axiosInstance.delete("", { data: { ...expense } });
    dispatch(deleteExpense(expense));
  } catch {
    console.log("Error!");
  }
};

import { toast } from "react-toastify";
import {
  deleteExpense,
  deleteExpenseError,
  editExpense,
  editExpenseError,
  newExpense,
  newExpenseError,
  setExpensesError,
} from "../app/expensesSlice";

const ToastMiddleWare = () => (next) => (action) => {
  switch (action.type) {
    case newExpense.type:
      toast.success("New expense added successfully");
      break;
    case editExpense.type:
      toast.success("Expense edited successfully");
      break;
    case deleteExpense.type:
      toast.success("Expense deleted successfully");
      break;
    case setExpensesError.type:
      toast.error("Error loading expenses");
      break;
    case newExpenseError.type:
      toast.error("Error adding expense");
      break;
    case editExpenseError.type:
      toast.error("Error editing expense");
      break;
    case deleteExpenseError.type:
      toast.error("Error deleting expense");
      break;
    default:
      break;
  }
  return next(action);
};

export default ToastMiddleWare;

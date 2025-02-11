import { ActionCreators } from "../app/expensesReducer";

//dispatch is the function of the redux store // dispatch is used to trigger state change
//reducer determines changes our application state. recieves the action and updates the state
export const GetExpenses = async (dispatch) => {
  try {
    //api call
    const expenses = [
      {
        id: 1,
        description: "Groceries",
        amount: 23.16,
      },
      {
        id: 2,
        description: "Gas",
        amount: 18.16,
      },
      {
        id: 3,
        description: "Loan",
        amount: 600,
      },
    ];
    dispatch(ActionCreators.setExpenses(expenses));
  } catch {
    console.log("Error!");
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    dispatch(
      ActionCreators.newExpense({
        id: 10,
        description: expense.description,
        amount: expense.amount,
      })
    );
  } catch {
    console.log("Error!");
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    dispatch(ActionCreators.editExpense(expense));
  } catch {
    console.log("Error!");
  }
};

export const DeleteExpense = async (dispatch, expense) => {
  try {
    dispatch(ActionCreators.deleteExpense(expense));
  } catch {
    console.log("Error!");
  }
};

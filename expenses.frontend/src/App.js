import React from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <ToastContainer />
      <ExpenseForm />
      <hr style={{ border: "1px solid grey" }} />
      <h3>Your Expenses</h3>
      <ExpenseList />
    </div>
  );
}

export default App;

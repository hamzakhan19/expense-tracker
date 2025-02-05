import { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NewExpense } from "../services/expenses";

const ExpenseForm = ({ expense, setIsEditing }) => {
  const descriptions = [
    "Groceries",
    "Credit Card",
    "Student Loans",
    "Eating out",
    "Gas",
  ];

  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState(descriptions[0]);
  const [isNewExpense, setIsNewExpense] = useState(true); // Assuming a state to toggle between new and edit

  const dispatch = useDispatch();

  useEffect(() => {
    if (expense !== undefined) {
      setIsNewExpense(false);
      setAmount(expense.amount);
    } else {
      setIsNewExpense(true);
    }
  }, [expense]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (isNewExpense) {
          NewExpense(dispatch, { description: description, amount: amount });
        } else {
          setIsEditing(false);
        }
      }}
    >
      <Row>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="select"
            value={description}
            onChange={handleDescriptionChange}
          >
            {descriptions.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            value={amount}
            step="0.01"
            onChange={(e) => setAmount(e.target.value)}
          />
        </Col>
        <Col style={{ marginTop: "auto" }}>
          {isNewExpense ? (
            <Button variant="primary" type="submit">
              Add
            </Button>
          ) : (
            <Col>
              <Button style={{ marginRight: "2px" }} variant="danger">
                Delete
              </Button>
              <Button
                style={{ marginRight: "2px" }}
                variant="success"
                type="submit"
              >
                Save
              </Button>
              <Button
                style={{ marginRight: "2px" }}
                variant="default"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </Col>
          )}
        </Col>
      </Row>
    </Form>
  );
};

export default ExpenseForm;

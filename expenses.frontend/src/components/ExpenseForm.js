import { useEffect, useState } from "react";
import { Button, Form, Row, Col, Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DeleteExpense, EditExpense, NewExpense } from "../services/expenses";

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
  const [isNewExpense, setIsNewExpense] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (expense) {
      setIsNewExpense(false);
      setAmount(expense.amount);
      setDescription(expense.description);
    } else {
      setIsNewExpense(true);
      setDescription(descriptions[0]);
    }
  }, [expense]);

  const handleDescriptionChange = (e) => setDescription(e.target.value);

  return (
    <Card className="mb-4 shadow-sm border-0">
      <Card.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (isNewExpense) {
              NewExpense(dispatch, { description, amount: Number(amount) });
            } else {
              EditExpense(dispatch, {
                id: expense.id,
                description,
                amount: Number(amount),
              });
              setIsEditing(false);
            }
          }}
        >
          <Row className="mb-3">
            <Col>
              <Form.Label>
                <strong>Description</strong>
              </Form.Label>
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
              <Form.Label>
                <strong>Amount ($)</strong>
              </Form.Label>
              <Form.Control
                type="number"
                value={amount}
                step="0.01"
                onChange={(e) => setAmount(parseFloat(e.target.value))}
              />
            </Col>
          </Row>
          <div className="text-end">
            {isNewExpense ? (
              <Button variant="primary" type="submit">
                Add Expense
              </Button>
            ) : (
              <>
                <Button
                  variant="danger"
                  onClick={() => DeleteExpense(dispatch, expense)}
                  className="me-2"
                >
                  Delete
                </Button>
                <Button variant="success" type="submit" className="me-2">
                  Save
                </Button>
                <Button variant="secondary" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </>
            )}
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ExpenseForm;

// ExpenseList Component
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../services/expenses";
import { Button, Col, Row, Card, Container } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesSlice.expenses);

  useEffect(() => {
    GetExpenses(dispatch);
  }, []);

  return (
    <Container className="mt-4">
      {expenses.map((e) => (
        <ListRow key={e.id} expense={e} />
      ))}
    </Container>
  );
};

const ListRow = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
  ) : (
    <Card className="mb-3 shadow-sm border-0">
      <Card.Body>
        <Row className="align-items-center">
          <Col>
            <strong>{expense.description}</strong>
          </Col>
          <Col className="text-success">
            <strong>${expense.amount.toFixed(2)}</strong>
          </Col>
          <Col className="text-end">
            <Button variant="warning" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ExpenseList;

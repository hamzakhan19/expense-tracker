using expenses.db;

namespace expenses.core
{
    public class ExpenseService : IExpenseService
    {
        private AppDBContext _context;
        public ExpenseService(AppDBContext context)
        {
            _context = context;
        }

        public Expense CreateExpense(Expense expense)
        {
            _context.Add(expense);
            _context.SaveChanges();

            return expense;
        }

        public void DeleteExpense(Expense expense)
        {
            _context.Remove(expense);
            _context.SaveChanges();
        }

        public Expense GetExpense(int id)
        {
            return _context.Expenses.First(e => e.Id == id);
        }

        public List<Expense> GetExpenses()
        {
            return _context.Expenses.ToList();
        }
        


    }
}

using expenses.db;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace expenses.core
{
    public interface IExpenseService
    {
        List<Expense> GetExpenses();
        Expense GetExpense(int id);
        Expense CreateExpense(Expense expense);
        void DeleteExpense(Expense expense);
    }
}

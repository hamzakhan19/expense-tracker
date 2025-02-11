using expenses.core;
using expenses.db;
using Microsoft.AspNetCore.Mvc;

namespace expenses.backend.webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExpensesController : ControllerBase
    {
        private IExpenseService _expenseService;
        public ExpensesController(IExpenseService expenseService) {
            _expenseService = expenseService;
        }

        [HttpGet]
        public IActionResult GetExpenses() {
            return Ok(_expenseService.GetExpenses());
        }

        [HttpGet("{id}",Name ="GetExpense")]
        public IActionResult GetExpense(int id)
        {
            return Ok(_expenseService.GetExpense(id));
        }

        [HttpPost]
        public IActionResult CreateExpense(Expense expense)
        {
            var newExpense = _expenseService.CreateExpense(expense);
            return CreatedAtRoute("GetExpense", new { newExpense.Id }, newExpense);

        }

        [HttpDelete]
        public IActionResult DeleteExpense(Expense expense)
        {
            _expenseService.DeleteExpense(expense); 
            return Ok();
        }

        [HttpPut]
        public IActionResult EditExpense(Expense expense)
        {
            return Ok(_expenseService.EditExpense(expense));
        }
    }
}

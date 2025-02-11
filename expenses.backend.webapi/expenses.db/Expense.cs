using System.ComponentModel.DataAnnotations;

namespace expenses.db
{
    //entity framework core we need model and a context
    //model maps entities and relation for database
    //context in order to perform crud operations on database
    public class Expense 
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; }
    }
}

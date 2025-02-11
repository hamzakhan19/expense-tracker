using expenses.db;
using Microsoft.EntityFrameworkCore;

public class AppDBContext : DbContext
{
    public DbSet<Expense> Expenses { get; set; }

    public AppDBContext(DbContextOptions<AppDBContext> options) : base(options) { }
}

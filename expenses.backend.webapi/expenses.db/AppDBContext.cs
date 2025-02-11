using expenses.db;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;

public class AppDBContext : DbContext
{
    public DbSet<Expense> Expenses { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(
            @"Server=(localdb)\mssqllocaldb;Database=ExpensesDB;Trusted_Connection=True;ConnectRetryCount=0");
    }
}
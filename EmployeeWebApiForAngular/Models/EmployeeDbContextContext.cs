using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EmployeeWebApiForAngular.Models
{
    public partial class EmployeeDbContextContext : DbContext
    {
        public EmployeeDbContextContext()
        {
        }

        public EmployeeDbContextContext(DbContextOptions<EmployeeDbContextContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Employees> Employees { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"Server=LENOVOG50-80;Database=EmployeeDbContext;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employees>(entity =>
            {
                entity.HasKey(e => e.Code);

                entity.Property(e => e.Code)
                    .HasColumnName("code")
                    .HasMaxLength(50)
                    .ValueGeneratedNever();

                entity.Property(e => e.AnnualSalary)
                    .HasColumnName("annualSalary")
                    .HasColumnType("decimal(18, 3)");

                entity.Property(e => e.DateOfBirth)
                    .HasColumnName("dateOfBirth")
                    .HasMaxLength(50);

                entity.Property(e => e.Gender)
                    .HasColumnName("gender")
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);
            });
        }
    }
}

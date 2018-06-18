using System;
using System.Collections.Generic;

namespace EmployeeWebApiForAngular.Models
{
    public partial class Employees
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public decimal? AnnualSalary { get; set; }
        public string DateOfBirth { get; set; }
    }
}

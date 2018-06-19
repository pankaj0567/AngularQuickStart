using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeWebApiForAngular.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeWebApiForAngular.Controllers
{
    [Produces("application/json")]
    [Route("api/Employees")]
    
    public class EmployeesController : Controller
    {
        /// <summary>
        /// This method is for getting all data of employee created by pankaj date : 18/06/2018
        /// </summary>
        /// <returns>return list of employee</returns>
        [HttpGet]
        public IEnumerable<Employees> GetEmployee()
        {
            using (EmployeeDbContextContext employeeDbContextContext = new EmployeeDbContextContext())
            {
                 return employeeDbContextContext.Employees.ToList();
            }
        }

        /// <summary>
        /// This method is for getting single data of employee created by pankaj date : 18/06/2018
        /// </summary>
        /// <param name="id">used to pass employee code</param>
        /// <returns>return single employee data</returns>
        [HttpGet]
        [Route("{code}")]
        public Employees GetEmployee(string code)
        {
            using (EmployeeDbContextContext employeeDbContextContext = new EmployeeDbContextContext())
            {
                return employeeDbContextContext.Employees.FirstOrDefault(emp => emp.Code == code);
            }
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("backend/department")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        //firewall
        public DepartmentController(ApplicationDBContext context)
        {
            //context = data portal
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var departments = _context.Departments.ToList()
            .Select(s => s.ToDepartmentDto());

            return Ok(departments);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var department = _context.Departments.Find(id);

            if(department == null)
            {
                return NotFound();
            }

            return Ok(department.ToDepartmentDto());
        }
    }
}
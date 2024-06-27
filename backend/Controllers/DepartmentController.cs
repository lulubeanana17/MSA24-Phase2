using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos.Department;
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

        [HttpPost]
        public IActionResult Create([FromBody] CreateDepartmentDto departmentDto)
        {
            var departmentModel = departmentDto.ToDepartmentFromDepartmentDto();
            _context.Departments.Add(departmentModel);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { id = departmentModel.Id }, departmentModel.ToDepartmentDto());
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Update([FromRoute] int id, [FromBody] UpdateDepartmentDto departmentDto)
        {
            var departmentModel = _context.Departments.FirstOrDefault(x => x.Id == id);

            if(departmentModel == null)
            {
                return NotFound();
            }

            departmentModel.Title = departmentDto.Title;

            _context.SaveChanges();

            return Ok(departmentModel.ToDepartmentDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var departmentModel = _context.Departments.FirstOrDefault(x => x.Id == id);

            if(departmentModel == null)
            {
                return NotFound();
            }

            _context.Departments.Remove(departmentModel);

            _context.SaveChanges();

            return NoContent();
        }
    }
}
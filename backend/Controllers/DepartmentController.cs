using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos.Department;
using backend.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            //context is data portal
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var departments = await _context.Departments.ToListAsync();

            var departmentDto = departments.Select(s => s.ToDepartmentDto());

            return Ok(departments);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var department = await _context.Departments.FindAsync(id);

            if(department == null)
            {
                return NotFound();
            }

            return Ok(department.ToDepartmentDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateDepartmentDto departmentDto)
        {
            var departmentModel = departmentDto.ToDepartmentFromDepartmentDto();
            await _context.Departments.AddAsync(departmentModel);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = departmentModel.Id }, departmentModel.ToDepartmentDto());
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateDepartmentDto departmentDto)
        {
            var departmentModel = await _context.Departments.FirstOrDefaultAsync(x => x.Id == id);

            if(departmentModel == null)
            {
                return NotFound();
            }

            departmentModel.Title = departmentDto.Title;

            await _context.SaveChangesAsync();

            return Ok(departmentModel.ToDepartmentDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var departmentModel = await _context.Departments.FirstOrDefaultAsync(x => x.Id == id);

            if(departmentModel == null)
            {
                return NotFound();
            }

            _context.Departments.Remove(departmentModel);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
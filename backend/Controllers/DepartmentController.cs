using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos.Department;
using backend.Interfaces;
using backend.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("backend/department")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentRepository _departmentRepo;
        //firewall
        public DepartmentController(IDepartmentRepository departmentRepo)
        {
            //departmentRepo is component
            _departmentRepo = departmentRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var departments = await _departmentRepo.GetAllAsync();

            var departmentDto = departments.Select(s => s.ToDepartmentDto());

            return Ok(departmentDto);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var department = await _departmentRepo.GetByIdAsync(id);

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
            await _departmentRepo.CreateAsync(departmentModel);
            return CreatedAtAction(nameof(GetById), new { id = departmentModel.Id }, departmentModel.ToDepartmentDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateDepartmentDto departmentDto)
        {
            var departmentModel = await _departmentRepo.UpdateAsync(id, departmentDto);

            if(departmentModel == null)
            {
                return NotFound();
            }

            return Ok(departmentModel.ToDepartmentDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var departmentModel = await _departmentRepo.DeleteAsync(id);

            if(departmentModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
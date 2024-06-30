using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos.Urgency;
using backend.Interfaces;
using backend.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("backend/urgency")]
    [ApiController]
    public class UrgencyController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IUrgencyRepository _urgencyRepo;
        public UrgencyController(ApplicationDBContext context, IUrgencyRepository urgencyRepo)
        {
            _context = context;
            _urgencyRepo = urgencyRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var urgencies = await _urgencyRepo.GetAllAsync();

            var urgencyDto = urgencies.Select(s => s.ToUrgencyDto());
            
            return Ok(urgencyDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var urgency = await _urgencyRepo.GetByIdAsync(id);

            if(urgency == null)
            {
                return NotFound();
            }

            return Ok(urgency.ToUrgencyDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateUrgencyDto urgencyDto)
        {
            var urgencyModel = urgencyDto.ToUrgencyFromUrgencyDto();
            await _urgencyRepo.CreateAsync(urgencyModel);
            return CreatedAtAction(nameof(GetById), new { id = urgencyModel.Id }, urgencyModel.ToUrgencyDto());
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateUrgencyDto urgencyDto)
        {
            var urgencyModel = await _urgencyRepo.UpdateAsync(id, urgencyDto);

            if(urgencyModel == null)
            {
                return NotFound();
            }

            return Ok(urgencyModel.ToUrgencyDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var urgencyModel = await _urgencyRepo.DeleteAsync(id);

            if(urgencyModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
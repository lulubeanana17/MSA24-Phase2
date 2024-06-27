using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos.Urgency;
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
        public UrgencyController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var urgencies = await _context.Urgencies.ToListAsync();

            var urgencyDto = urgencies.Select(s => s.ToUrgencyDto());
            
            return Ok(urgencies);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var urgency = await _context.Urgencies.FindAsync(id);

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
            await _context.Urgencies.AddAsync(urgencyModel);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = urgencyModel.Id }, urgencyModel.ToUrgencyDto());
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateUrgencyDto urgencyDto)
        {
            var urgencyModel = await _context.Urgencies.FirstOrDefaultAsync(x => x.Id == id);

            if(urgencyModel == null)
            {
                return NotFound();
            }

            urgencyModel.Title = urgencyDto.Title;

            await _context.SaveChangesAsync();

            return Ok(urgencyModel.ToUrgencyDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var urgencyModel = await _context.Urgencies.FirstOrDefaultAsync(x => x.Id == id);

            if(urgencyModel == null)
            {
                return NotFound();
            }

            _context.Urgencies.Remove(urgencyModel);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
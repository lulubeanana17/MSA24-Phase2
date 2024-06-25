using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos.Urgency;
using backend.Mappers;
using Microsoft.AspNetCore.Mvc;

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
        public IActionResult GetAll()
        {
            var urgencies = _context.Urgencies.ToList()
            .Select(s => s.ToUrgencyDto());
            
            return Ok(urgencies);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var urgency = _context.Urgencies.Find(id);

            if(urgency == null)
            {
                return NotFound();
            }

            return Ok(urgency.ToUrgencyDto());
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateUrgencyDto urgencyDto)
        {
            var urgencyModel = urgencyDto.ToUrgencyFromUrgencyDto();
            _context.Urgencies.Add(urgencyModel);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { id = urgencyModel.Id }, urgencyModel.ToUrgencyDto());
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Update([FromRoute] int id, [FromBody] UpdateUrgencyDto urgencyDto)
        {
            var urgencyModel = _context.Urgencies.FirstOrDefault(x => x.Id == id);

            if(urgencyModel == null)
            {
                return NotFound();
            }

            urgencyModel.Title = urgencyDto.Title;

            _context.SaveChanges();

            return Ok(urgencyModel.ToUrgencyDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var urgencyModel = _context.Urgencies.FirstOrDefault(x => x.Id == id);

            if(urgencyModel == null)
            {
                return NotFound();
            }

            _context.Urgencies.Remove(urgencyModel);

            _context.SaveChanges();

            return NoContent();
        }
    }
}
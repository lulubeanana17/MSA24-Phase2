using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
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
    }
}
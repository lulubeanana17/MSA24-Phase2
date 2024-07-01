using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Request;
using backend.Interfaces;
using backend.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("backend/request")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        private readonly IRequestRepository _requestRepo;
        public RequestController(IRequestRepository requestRepo)
        {
            _requestRepo = requestRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var requests = await _requestRepo.GetAllAsync();

            var requestDto = requests.Select(s => s.ToRequestDto());

            return Ok(requestDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var request = await _requestRepo.GetByIdAsync(id);

            if(request == null)
            {
                return NotFound();
            }

            return Ok(request.ToRequestDto());
        }
    }
}
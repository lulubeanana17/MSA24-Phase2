using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Request;
using backend.Helpers;
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
        private readonly IUrgencyRepository _urgencyRepo;
        private readonly IDepartmentRepository _departmentRepo;
        private readonly IProgressRepository _progressRepo;
        public RequestController(IRequestRepository requestRepo, IUrgencyRepository urgencyRepo, IDepartmentRepository departmentRepo, IProgressRepository progressRepo)
        {
            _requestRepo = requestRepo;
            _urgencyRepo = urgencyRepo;
            _departmentRepo = departmentRepo;
            _progressRepo = progressRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] RequestQueryObject query)
        {
            if(!ModelState.IsValid) return BadRequest(ModelState);

            var requests = await _requestRepo.GetAllAsync(query);

            var requestDto = requests.Select(s => s.ToRequestDto());

            return Ok(requestDto);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if(!ModelState.IsValid) return BadRequest(ModelState);

            var request = await _requestRepo.GetByIdAsync(id);

            if(request == null)
            {
                return NotFound();
            }

            return Ok(request.ToRequestDto());
        }

        [HttpPost("{UrgencyId:int}/{DepartmentId:int}/{ProgressId:int}")]
        public async Task<IActionResult> Create([FromRoute] int UrgencyId, [FromRoute] int DepartmentId, [FromRoute] int ProgressId, CreateRequestDto requestDto)
        {
            if(!ModelState.IsValid) return BadRequest(ModelState);

            if(!await _urgencyRepo.UrgencyExists(UrgencyId)) return BadRequest("Urgency does not exist");
            if(!await _departmentRepo.DepartmentExists(DepartmentId)) return BadRequest("Department does not exist");
            if(!await _progressRepo.ProgressExists(ProgressId)) return BadRequest("Progress does not exist");

            var requestModel = requestDto.ToRequestFromCreate(UrgencyId, DepartmentId, ProgressId);
            await _requestRepo.CreateAsync(requestModel);
            return CreatedAtAction(nameof(GetById), new { id = requestModel}, requestModel.ToRequestDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateRequestDto requestDto)
        {
            if(!ModelState.IsValid) return BadRequest(ModelState);

            var requestModel = await _requestRepo.UpdateAsync(id, requestDto);

            if(requestModel == null)
            {
                return NotFound();
            }

            return Ok(requestModel.ToRequestDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if(!ModelState.IsValid) return BadRequest(ModelState);

            var requestModel = await _requestRepo.DeleteAsync(id);

            if(requestModel == null)
            {
                return NotFound("Request does not exist");
            }

            return NoContent();
        }
    }
}
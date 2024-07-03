using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos.Progress;
using backend.Interfaces;
using backend.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("backend/progress")]
    [ApiController]
    public class ProgressController : ControllerBase
    {
        private readonly IProgressRepository _progressRepo;
        public ProgressController(IProgressRepository progressRepo)
        {
            _progressRepo = progressRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var progresses = await _progressRepo.GetAllAsync();

            var progressDto = progresses.Select(s => s.ToProgressDto());

            return Ok(progressDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var progress = await _progressRepo.GetByIdAsync(id);

            if(progress == null)
            {
                return NotFound();
            }

            return Ok(progress.ToProgressDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateProgressDto progressDto)
        {
            var progressModel = progressDto.ToProgressFromProgressDto();
            await _progressRepo.CreateAsync(progressModel);
            return CreatedAtAction(nameof(GetById), new { id = progressModel.Id }, progressModel.ToProgressDto());
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateProgressDto progressDto)
        {
            var progressModel = await _progressRepo.UpdateAsync(id, progressDto);

            if(progressModel == null)
            {
                return NotFound();
            }

            return Ok(progressModel.ToProgressDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var progressModel = await _progressRepo.DeleteAsync(id);

            if(progressModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
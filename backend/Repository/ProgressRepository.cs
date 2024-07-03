using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos.Progress;
using backend.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repository
{
    public class ProgressRepository : IProgressRepository
    {
        private readonly ApplicationDBContext _context;
        public ProgressRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Progress> CreateAsync(Progress progressModel)
        {
            await _context.Progresses.AddAsync(progressModel);
            await _context.SaveChangesAsync();
            return progressModel;
        }

        public async Task<Progress?> DeleteAsync(int id)
        {
            var progressModel = await _context.Progresses.FirstOrDefaultAsync(x => x.Id == id);

            if(progressModel == null)
            {
                return null;
            }

            _context.Progresses.Remove(progressModel);

            await _context.SaveChangesAsync();

            return progressModel;
        }

        public Task<bool> ProgressExists(int id)
        {
            return _context.Progresses.AnyAsync(s => s.Id == id);
        }

        public async Task<List<Progress>> GetAllAsync()
        {
            return await _context.Progresses.Include(c => c.Requests).ToListAsync();
        }

        public async Task<Progress?> GetByIdAsync(int id)
        {
            return await _context.Progresses.Include(c => c.Requests).FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<Progress?> UpdateAsync(int id, UpdateProgressDto progressDto)
        {
            var progressModel = await _context.Progresses.FirstOrDefaultAsync(x => x.Id == id);

            if(progressModel == null)
            {
                return null;
            }

            progressModel.Title = progressDto.Title;

            await _context.SaveChangesAsync();

            return progressModel;
        }
    }
}
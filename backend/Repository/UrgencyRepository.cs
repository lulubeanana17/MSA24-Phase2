using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos.Urgency;
using backend.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repository
{
    public class UrgencyRepository : IUrgencyRepository
    {
        private readonly ApplicationDBContext _context;
        public UrgencyRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Urgency> CreateAsync(Urgency urgencyModel)
        {
            await _context.Urgencies.AddAsync(urgencyModel);
            await _context.SaveChangesAsync();
            return urgencyModel;
        }

        public async Task<Urgency?> DeleteAsync(int id)
        {
            var urgencyModel = await _context.Urgencies.FirstOrDefaultAsync(x => x.Id == id);

            if(urgencyModel == null)
            {
                return null;
            }

            _context.Urgencies.Remove(urgencyModel);

            await _context.SaveChangesAsync();
            
            return urgencyModel;
        }

        public async Task<List<Urgency>> GetAllAsync()
        {
            return await _context.Urgencies.Include(c => c.Requests).ToListAsync();
        }

        public async Task<Urgency?> GetByIdAsync(int id)
        {
            return await _context.Urgencies.Include(c => c.Requests).FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<Urgency?> UpdateAsync(int id, UpdateUrgencyDto urgencyDto)
        {
            var urgencyModel = await _context.Urgencies.FirstOrDefaultAsync(x => x.Id == id);

            if(urgencyModel == null)
            {
                return null;
            }

            urgencyModel.Title = urgencyDto.Title;

            await _context.SaveChangesAsync();

            return urgencyModel;
        }

        public Task<bool> UrgencyExists(int id)
        {
            return _context.Urgencies.AnyAsync(s => s.Id == id);
        }
    }
}
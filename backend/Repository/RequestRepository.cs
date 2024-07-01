using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repository
{
    public class RequestRepository : IRequestRepository
    {
        private readonly ApplicationDBContext _context;
        public RequestRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<List<Request>> GetAllAsync()
        {
            return await _context.Requests.ToListAsync();
        }

        public async Task<Request?> GetByIdAsync(int id)
        {
            return await _context.Requests.FindAsync(id);
        }
    }
}
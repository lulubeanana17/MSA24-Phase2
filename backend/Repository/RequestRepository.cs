using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos.Request;
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

        public async Task<Request> CreateAsync(Request requestModel)
        {
            await _context.Requests.AddAsync(requestModel);
            await _context.SaveChangesAsync();
            return requestModel;
        }

        public async Task<Request?> DeleteAsync(int id)
        {
            var requestModel = await _context.Requests.FirstOrDefaultAsync(x => x.Id == id);

            if(requestModel == null)
            {
                return null;
            }

            _context.Requests.Remove(requestModel);

            await _context.SaveChangesAsync();

            return requestModel;
        }

        public async Task<List<Request>> GetAllAsync()
        {
            return await _context.Requests.ToListAsync();
        }

        public async Task<Request?> GetByIdAsync(int id)
        {
            return await _context.Requests.FindAsync(id);
        }

        public async Task<Request?> UpdateAsync(int id, UpdateRequestDto requestDto)
        {
            var requestModel = await _context.Requests.FirstOrDefaultAsync(x => x.Id == id);

            if(requestModel == null)
            {
                return null;
            }

            requestModel.Title = requestDto.Title;
            requestModel.Location = requestDto.Location;
            requestModel.Detail = requestDto.Detail;

            await _context.SaveChangesAsync();

            return requestModel;
        }
    }
}
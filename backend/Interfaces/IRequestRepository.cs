using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Request;
using backend.Helpers;
using backend.Models;

namespace backend.Interfaces
{
    public interface IRequestRepository
    {
        Task<List<Request>> GetAllAsync(RequestQueryObject query);
        Task<Request?> GetByIdAsync(int id);
        Task<Request> CreateAsync(Request requestModel);
        Task<Request?> UpdateAsync(int id, UpdateRequestDto reauestDto);
        Task<Request?> DeleteAsync(int id);
    }
}
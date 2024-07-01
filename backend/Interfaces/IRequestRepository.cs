using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;

namespace backend.Interfaces
{
    public interface IRequestRepository
    {
        Task<List<Request>> GetAllAsync();
        Task<Request?> GetByIdAsync(int id);
    }
}
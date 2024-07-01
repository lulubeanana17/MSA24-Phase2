using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Urgency;
using backend.Models;

namespace backend.Interfaces
{
    public interface IUrgencyRepository
    {
        Task<List<Urgency>> GetAllAsync();
        Task<Urgency?> GetByIdAsync(int id);
        Task<Urgency> CreateAsync(Urgency urgencyModel);
        Task<Urgency?> UpdateAsync(int id, UpdateUrgencyDto urgencyDto);
        Task<Urgency?> DeleteAsync(int id);
        Task<bool> UrgencyExists(int id);
    }
}
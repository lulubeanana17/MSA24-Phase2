using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Progress;
using backend.Models;

namespace backend.Interfaces
{
    public interface IProgressRepository
    {
        Task<List<Progress>> GetAllAsync();
        Task<Progress?> GetByIdAsync(int id);
        Task<Progress> CreateAsync(Progress progressModel);
        Task<Progress?> UpdateAsync(int id, UpdateProgressDto progressDto);
        Task<Progress?> DeleteAsync(int id);
        Task<bool> ProgressExists(int id);
    }
}
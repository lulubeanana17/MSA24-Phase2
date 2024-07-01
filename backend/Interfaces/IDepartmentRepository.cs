using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Department;
using backend.Models;

namespace backend.Interfaces
{
    public interface IDepartmentRepository
    //list of components
    {
        Task<List<Department>> GetAllAsync();
        Task<Department?> GetByIdAsync(int id);
        Task<Department> CreateAsync(Department departmentModel);
        Task<Department?> UpdateAsync(int id, UpdateDepartmentDto departmentDto);
        Task<Department?> DeleteAsync(int id);
        Task<bool> DepartmentExists(int id);
    }
}
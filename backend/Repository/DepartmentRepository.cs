using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos.Department;
using backend.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace backend.Repository
{
    public class DepartmentRepository : IDepartmentRepository
    {
        private readonly ApplicationDBContext _context;
        public DepartmentRepository(ApplicationDBContext context)
        {
            //context is data portal
            _context = context;
        }

        public async Task<Department> CreateAsync(Department departmentModel)
        {
            await _context.Departments.AddAsync(departmentModel);
            await _context.SaveChangesAsync();
            return departmentModel;
        }

        public async Task<Department?> DeleteAsync(int id)
        {
            var departmentModel = await _context.Departments.FirstOrDefaultAsync(x => x.Id == id);

            if(departmentModel == null)
            {
                return null;
            }

            _context.Departments.Remove(departmentModel);

            await _context.SaveChangesAsync();

            return departmentModel;
        }

        public async Task<List<Department>> GetAllAsync()
        {
            return await _context.Departments.ToListAsync();
        }

        public async Task<Department?> GetByIdAsync(int id)
        {
            return await _context.Departments.FindAsync(id);
        }

        public async Task<Department?> UpdateAsync(int id, UpdateDepartmentDto departmentDto)
        {
            var departmentModel = await _context.Departments.FirstOrDefaultAsync(x => x.Id == id);

            if(departmentModel == null)
            {
                return null;
            }

            departmentModel.Title = departmentDto.Title;

            await _context.SaveChangesAsync();

            return departmentModel;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Department;
using backend.Models;

namespace backend.Mappers
{
    public static class DepartmentMappers
    {
        public static DepartmentDto ToDepartmentDto(this Department departmentModel)
        {
            return new DepartmentDto
            {
                Id = departmentModel.Id,
                Title = departmentModel.Title
            };
        }

        public static Department ToDepartmentFromDepartmentDto(this CreateDepartmentDto departmentDto)
        {
            return new Department
            {
                Title = departmentDto.Title
            };
        }
    }
}
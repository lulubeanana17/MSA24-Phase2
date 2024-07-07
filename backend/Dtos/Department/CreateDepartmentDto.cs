using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Dtos.Department
{
    public class CreateDepartmentDto
    {
        [Required]
        [MinLength(1, ErrorMessage = "Title must be over 1 character")]
        [MaxLength(50, ErrorMessage = "Title cannot be over 50 characters")]
        public string Title { get; set; } = string.Empty;
    }
}
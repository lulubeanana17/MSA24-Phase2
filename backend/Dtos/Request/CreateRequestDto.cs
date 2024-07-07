using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Dtos.Request
{
    public class CreateRequestDto
    {
        [Required]
        [MinLength(1, ErrorMessage = "Title must be over 1 character")]
        [MaxLength(50, ErrorMessage = "Title cannot be over 50 characters")]
        public string Title { get; set; } = string.Empty;
        [Required]
        [MinLength(1, ErrorMessage = "Location must be over 1 character")]
        [MaxLength(50, ErrorMessage = "Location cannot be over 50 characters")]
        public string Location { get; set; } = string.Empty;
        [MaxLength(250, ErrorMessage = "Detail cannot be over 250 characters")]
        public string Detail { get; set; } = string.Empty;
    }
}
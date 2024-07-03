using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Dtos.Request
{
    public class UpdateRequestDto
    {
        public string Title { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public string Detail { get; set; } = string.Empty;
        public int? ProgressId { get; set; }
    }
}
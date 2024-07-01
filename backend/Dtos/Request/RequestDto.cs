using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Dtos.Request
{
    public class RequestDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public string Detail { get; set; } = string.Empty;
        public DateTime StartTime { get; set; } = DateTime.Now;
        public DateTime FinishTime { get; set; }
        public string Action { get; set; } = string.Empty;
        public int? UrgencyId { get; set; }
        public int? DepartmentId { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Request
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public string Detail { get; set; } = string.Empty;
        public DateTime StartTime { get; set; } = DateTime.Now;
        public string Action { get; set; } = string.Empty;
        public int? UrgencyId { get; set; }
        public Urgency? Urgency { get; set; }
        public int? DepartmentId { get; set; }
        public Department? Department { get; set; }
    }
}
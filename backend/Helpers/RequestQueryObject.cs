using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Helpers
{
    public class RequestQueryObject
    {
        public int? UrgencyId { get; set; }
        public int? DepartmentId { get; set; }
        public int? ProgressId { get; set; }
        public string? SortBy { get; set; } = null;
        public bool IsDesending { get; set; } = false;
        public int ContentNumber { get; set; } = 1;
        public int ContentsSize { get; set; } = 100;
    }
}
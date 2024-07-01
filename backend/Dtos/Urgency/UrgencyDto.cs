using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Request;

namespace backend.Dtos.Urgency
{
    public class UrgencyDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public List<RequestDto> Requests { get; set; }
    }
}
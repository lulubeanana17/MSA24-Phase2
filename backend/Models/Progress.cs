using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Progress
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public List<Request> Requests { get; set; } = new List<Request>();
    }
}
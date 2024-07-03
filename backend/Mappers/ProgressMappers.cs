using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Progress;
using backend.Models;

namespace backend.Mappers
{
    public static class ProgressMappers
    {
        public static ProgressDto ToProgressDto(this Progress progressModel)
        {
            return new ProgressDto{
                Id = progressModel.Id,
                Title = progressModel.Title,
                Requests = progressModel.Requests.Select(c => c.ToRequestDto()).ToList()
            };
        }

        public static Progress ToProgressFromProgressDto(this CreateProgressDto progressDto)
        {
            return new Progress
            {
                Title = progressDto.Title
            };
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Request;
using backend.Models;

namespace backend.Mappers
{
    public static class RequestMappers
    {
        public static RequestDto ToRequestDto(this Request requestModel)
        {
            return new RequestDto
            {
                Id = requestModel.Id,
                Title = requestModel.Title,
                Location = requestModel.Location,
                Detail = requestModel.Detail,
                StartTime = requestModel.StartTime,
                FinishTime = requestModel.FinishTime,
                Action = requestModel.Action,
                UrgencyId = requestModel.UrgencyId,
                DepartmentId = requestModel.DepartmentId
            };
        }
    }
}
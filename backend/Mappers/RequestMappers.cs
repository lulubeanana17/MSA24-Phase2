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
                UrgencyId = requestModel.UrgencyId,
                DepartmentId = requestModel.DepartmentId,
                ProgressId = requestModel.ProgressId
            };
        }

        public static Request ToRequestFromCreate(this CreateRequestDto requestDto, int UrgencyId, int DepartmentId, int ProgressId)
        {
            return new Request
            {
                Title = requestDto.Title,
                Location = requestDto.Location,
                Detail = requestDto.Detail,
                UrgencyId = UrgencyId,
                DepartmentId = DepartmentId,
                ProgressId = ProgressId
            };
        }
    }
}
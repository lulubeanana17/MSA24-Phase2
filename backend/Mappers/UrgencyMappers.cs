using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Urgency;
using backend.Models;

namespace backend.Mappers
{
    public static class UrgencyMappers
    //filter for data transactions
    {
        public static UrgencyDto ToUrgencyDto(this Urgency urgencyModel)
        {
            return new UrgencyDto
            {
                Id = urgencyModel.Id,
                Title = urgencyModel.Title
            };
        }

        public static Urgency ToUrgencyFromUrgencyDto(this CreateUrgencyDto urgencyDto)
        {
            return new Urgency
            {
                Title = urgencyDto.Title
            };
        }
    }
}
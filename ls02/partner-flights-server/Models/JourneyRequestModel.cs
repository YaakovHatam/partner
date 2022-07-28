using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class JourneyRequestModel
    {
        public PassengerModel[] passengers { get; set; }
        public FlightModel flight { get; set; }
    }
}
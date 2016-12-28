using MyAngApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyAngApp.Controllers
{
    public class StockQueryController : ApiController
    {
        [HttpPost()]
        public GetStockLevelResponse GetStockLevel(GetStockLevelRequest request)
        {
            System.Threading.Thread.Sleep(2000);
            List<StockLevelItem> output = new List<StockLevelItem>();
            LocationsController locationController = new LocationsController();
            List<Models.Location> locations = (List<Models.Location>)locationController.GetLocations();
            Models.Location location = locations.Find(x => x.LocationID.Equals(request.LocationId));
            for (int i = 0; i < request.EntriesPerPage;i++)
            {
                int newProductSuffix = (i + (request.EntriesPerPage * (request.PageNumber - 1)));
                output.Add(new Models.StockLevelItem()
                {
                    SKU = "SKU00" + newProductSuffix.ToString(),
                    Due = i,
                    OnOrder = i,
                    Location = location.LocationName,
                    ProductTitle = "ProductTitle" + newProductSuffix.ToString(),
                    StockLevel = i
                });
            }
            return new GetStockLevelResponse()
            {
                rows = output,
                TotalItems = 762
            };
        }

        public class GetStockLevelResponse
        {
            public int TotalItems;
            public List<StockLevelItem> rows = new List<StockLevelItem>();
        }

        public class GetStockLevelRequest
        {
            public string LocationId;
            public int PageNumber;
            public int EntriesPerPage;
        }
    }
}
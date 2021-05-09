using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ReactCandidates.Data
{
    public class CandidatesContextFactory: IDesignTimeDbContextFactory<CandidatesDbContext>
    {      
            public CandidatesDbContext CreateDbContext(string[] args)
            {
                var config = new ConfigurationBuilder()
                    .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}ReactCandidates.Web"))
                    .AddJsonFile("appsettings.json")
                    .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

                return new CandidatesDbContext(config.GetConnectionString("ConStr"));
            }
       
    }
}

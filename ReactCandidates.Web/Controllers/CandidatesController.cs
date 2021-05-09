using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactCandidates.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCandidates.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private string _connectionString;
        public CandidatesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }


        [HttpPost]
        [Route("AddCandidate")]
        public void AddCandidate(Candidate c)
        {
            var repo = new CandidatesRepository(_connectionString);
            c.Status = Status.Pending;
            repo.AddCandidate(c);
        }
        [HttpGet]
        [Route("getPendingPpl")]
        public List<Candidate> GetPendingPpl()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetPending();
        }
        [HttpGet]
        [Route("getConfirmedPpl")]
        public List<Candidate> GetConfirmedPpl()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetConfirmed();
        }
        [HttpGet]
        [Route("getRefusedPpl")]
        public List<Candidate> GetRefusedPpl()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetRefused();
        }
        [HttpGet]
        [Route("getCandidate")]
        public Candidate GetCandidate(int id)
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetPendingCandidate(id);
        }
        [HttpPost]
        [Route("changeStatus")]
        public void ChangeStatus(Candidate c)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.ChangeStatus(c);
        }
        [HttpGet]
        [Route("getCounts")]
        public CountsModel GetCounts()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetCounts();
        }
    }
}

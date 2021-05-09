using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ReactCandidates.Data
{
    public class CandidatesRepository
    {
        private readonly string _connectionString;
        public CandidatesRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddCandidate(Candidate c)
        {
            using var context = new CandidatesDbContext(_connectionString);
            context.Candidates.Add(c);
            context.SaveChanges();
        }
        public List<Candidate> GetPending()
        {
            using var context = new CandidatesDbContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Pending).ToList();
        }
        public List<Candidate> GetConfirmed()
        {
            using var context = new CandidatesDbContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Confirmed).ToList();
        }
        public List<Candidate> GetRefused()
        {
            using var context = new CandidatesDbContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Refused).ToList();
        }
        public Candidate GetPendingCandidate(int id)
        {
            using var context = new CandidatesDbContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public void ChangeStatus(Candidate c)
        {
            using var context = new CandidatesDbContext(_connectionString);
            context.Candidates.Attach(c);
            context.Entry(c).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            context.SaveChanges();
        }
        public CountsModel GetCounts()
        {
            using var context = new CandidatesDbContext(_connectionString);
            return new CountsModel()
            {
                Confirmed = context.Candidates.Where(c => c.Status == Status.Confirmed).Count(),
                Refused = context.Candidates.Where(c => c.Status == Status.Refused).Count(),
                Pending = context.Candidates.Where(c => c.Status == Status.Pending).Count()
            };

        }

    }
    public class CountsModel
    {
        public int Pending { get; set; }
        public int Confirmed { get; set; }
        public int Refused { get; set; }
    }

}

using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Repositories.Tests
{
    [TestClass]
    public class DoctorsTests
    {
        [TestMethod]
        public void Repositories_Doctors_Retrieve()
        {
            Doctors.Retrieve();
        }

        [TestMethod]
        public void Repositories_Doctors_Persist()
        {
            Doctors.Persist(new Doctor
            {
                Id = Guid.NewGuid(),
                FirstName = "John"
            });
        }
    }
}
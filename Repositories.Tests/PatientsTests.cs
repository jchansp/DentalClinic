using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Repositories.Tests
{
    [TestClass]
    public class PatientsTests
    {
        [TestMethod]
        public void Repositories_Patients_Retrieve()
        {
            Patients.Retrieve();
        }

        [TestMethod]
        public void Repositories_Patients_Persist()
        {
            Patients.Persist(new Patient
            {
                Id = Guid.NewGuid(),
                FirstName = "John"
            });
        }
    }
}
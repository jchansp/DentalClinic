using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Repositories.Tests
{
    [TestClass]
    public class PeopleTests
    {
        [TestMethod]
        public void Repositories_People_Retrieve()
        {
            People.Retrieve();
        }

        [TestMethod]
        public void Repositories_People_Persist()
        {
            People.Persist(new Person
            {
                Id = Guid.NewGuid(),
                FirstName = "John"
            });
        }
    }
}
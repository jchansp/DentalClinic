using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Entities.Tests
{
    [TestClass]
    public class UserTests
    {
        [TestMethod]
        public void Entities_User_Login()
        {
            new User()
            {
                Id = Guid.NewGuid(),
                FirstName = "John"
            }.Login();
        }
    }
}
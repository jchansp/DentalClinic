using System;

namespace Entities
{
    public class User : Person
    {
        private string UserName { get; set; }
        private string Password { get; set; }

        public virtual void Register()
        {
            Persist();
        }

        protected override Repositories.Person ToRepository()
        {
            return new Repositories.User
            {
                Id = Id,
                FirstName = FirstName,
                UserName = UserName,
                Password = Password
            };
        }

        public void Login()
        {
            throw new NotImplementedException();
        }
    }
}
using System;
using Repositories;

namespace Entities
{
    public class Person : Entity
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }

        protected void Persist()
        {
            People.Persist(ToRepository());
        }

        private Repositories.Person ToRepository()
        {
            return new Repositories.Person
            {
                Id = Id,
                FirstName = FirstName
            };
        }
    }
}
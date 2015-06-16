using Repositories;

namespace Entities
{
    public class Doctor : Employee
    {
        public override void Register()
        {
            Doctors.Persist(ToRepository());
        }

        private Repositories.Doctor ToRepository()
        {
            return new Repositories.Doctor
            {
                Id = Id,
                FirstName = FirstName
            };
        }
    }
}
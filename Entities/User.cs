namespace Entities
{
    public class User : Person
    {
        public string UserName { get; set; }
        public string Password { get; set; }

        public virtual void Register()
        {
            Persist();
        }

        private Repositories.User ToRepository()
        {
            return new Repositories.User
            {
                Id = Id,
                FirstName = FirstName,
                UserName = UserName,
                Password = Password,
            };
        }
    }
}
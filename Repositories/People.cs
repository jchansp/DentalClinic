using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Repositories
{
    public static class People
    {
        private static readonly string ConnectionString =
            ConfigurationManager.ConnectionStrings["Database"].ConnectionString;

        public static List<Person> Retrieve()
        {
            var people = new List<Person>();
            using (var sqlConnection = new SqlConnection(ConnectionString))
            {
                const string cmdText = "RetrievePeople";
                using (var sqlCommand = new SqlCommand(cmdText, sqlConnection)
                {
                    CommandType = CommandType.StoredProcedure
                })
                {
                    sqlConnection.Open();
                    var sqlDataReader = sqlCommand.ExecuteReader();
                    while (sqlDataReader.Read())
                    {
                        people.Add(Person.FromDataReader(sqlDataReader));
                    }
                    sqlDataReader.Close();
                    sqlConnection.Close();
                }
            }
            return people;
        }

        public static void Persist(Person person)
        {
            using (var sqlConnection = new SqlConnection(ConnectionString))
            {
                const string cmdText = "PersistPeople";
                using (var sqlCommand = new SqlCommand(cmdText, sqlConnection)
                {
                    CommandType = CommandType.StoredProcedure
                })
                {
                    sqlConnection.Open();
                    var sqlParameter = sqlCommand.Parameters.AddWithValue("@People", person.ToDataTable());
                    sqlParameter.SqlDbType = SqlDbType.Structured;
                    sqlParameter.TypeName = "Person";
                    sqlCommand.ExecuteNonQuery();
                    sqlConnection.Close();
                }
            }
        }
    }
}
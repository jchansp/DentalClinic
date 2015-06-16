using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Repositories
{
    public static class Doctors
    {
        private static readonly string ConnectionString =
            ConfigurationManager.ConnectionStrings["Database"].ConnectionString;

        public static List<Doctor> Retrieve()
        {
            var doctors = new List<Doctor>();
            using (var sqlConnection = new SqlConnection(ConnectionString))
            {
                const string cmdText = "RetrieveDoctors";
                using (var sqlCommand = new SqlCommand(cmdText, sqlConnection)
                {
                    CommandType = CommandType.StoredProcedure
                })
                {
                    sqlConnection.Open();
                    var sqlDataReader = sqlCommand.ExecuteReader();
                    while (sqlDataReader.Read())
                    {
                        doctors.Add(Doctor.FromDataReader(sqlDataReader));
                    }
                    sqlDataReader.Close();
                    sqlConnection.Close();
                }
            }
            return doctors;
        }

        public static void Persist(Doctor person)
        {
            using (var sqlConnection = new SqlConnection(ConnectionString))
            {
                const string cmdText = "PersistDoctors";
                using (var sqlCommand = new SqlCommand(cmdText, sqlConnection)
                {
                    CommandType = CommandType.StoredProcedure
                })
                {
                    sqlConnection.Open();
                    var sqlParameter = sqlCommand.Parameters.AddWithValue("@Doctors", person.ToDataTable());
                    sqlParameter.SqlDbType = SqlDbType.Structured;
                    sqlParameter.TypeName = "Doctor";
                    sqlCommand.ExecuteNonQuery();
                    sqlConnection.Close();
                }
            }
        }
    }
}
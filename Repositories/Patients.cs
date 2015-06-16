using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Repositories
{
    public static class Patients
    {
        private static readonly string ConnectionString =
            ConfigurationManager.ConnectionStrings["Database"].ConnectionString;

        public static List<Patient> Retrieve()
        {
            var doctors = new List<Patient>();
            using (var sqlConnection = new SqlConnection(ConnectionString))
            {
                const string cmdText = "RetrievePatients";
                using (var sqlCommand = new SqlCommand(cmdText, sqlConnection)
                {
                    CommandType = CommandType.StoredProcedure
                })
                {
                    sqlConnection.Open();
                    var sqlDataReader = sqlCommand.ExecuteReader();
                    while (sqlDataReader.Read())
                    {
                        doctors.Add(Patient.FromDataReader(sqlDataReader));
                    }
                    sqlDataReader.Close();
                    sqlConnection.Close();
                }
            }
            return doctors;
        }

        public static void Persist(Patient patient)
        {
            using (var sqlConnection = new SqlConnection(ConnectionString))
            {
                const string cmdText = "PersistPatients";
                using (var sqlCommand = new SqlCommand(cmdText, sqlConnection)
                {
                    CommandType = CommandType.StoredProcedure
                })
                {
                    sqlConnection.Open();
                    var sqlParameter = sqlCommand.Parameters.AddWithValue("@Patients", patient.ToDataTable());
                    sqlParameter.SqlDbType = SqlDbType.Structured;
                    sqlParameter.TypeName = "Patient";
                    sqlCommand.ExecuteNonQuery();
                    sqlConnection.Close();
                }
            }
        }
    }
}
using System;
using System.Data;
using System.Data.SqlClient;

namespace Repositories
{
    public class Patient : User
    {
        public override DataTable ToDataTable()
        {
            var dataTable = new DataTable();
            dataTable.Columns.Add("Id", typeof (Guid));
            dataTable.Columns.Add("FirstName", typeof (string));
            dataTable.Rows.Add(Id, FirstName);
            return dataTable;
        }

        public static Patient FromDataReader(SqlDataReader sqlDataReader)
        {
            return new Patient
            {
                Id = (Guid) sqlDataReader["Id"],
                FirstName = (string) sqlDataReader["FirstName"]
            };
        }
    }
}
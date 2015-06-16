using System;
using System.Data;
using System.Data.SqlClient;

namespace Repositories
{
    public class User : Person
    {
        public string UserName { get; set; }
        public string Password { get; set; }

        public override DataTable ToDataTable()
        {
            var dataTable = new DataTable();
            dataTable.Columns.Add("Id", typeof (Guid));
            dataTable.Columns.Add("FirstName", typeof (string));
            dataTable.Rows.Add(Id, FirstName);
            return dataTable;
        }

        public static User FromDataReader(SqlDataReader sqlDataReader)
        {
            return new User
            {
                Id = (Guid) sqlDataReader["Id"],
                FirstName = (string) sqlDataReader["FirstName"]
            };
        }
    }
}
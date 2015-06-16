using System;
using System.Data;
using System.Data.SqlClient;

namespace Repositories
{
    public class Person : Entity
    {
        public string FirstName { get; set; }

        public override DataTable ToDataTable()
        {
            var dataTable = new DataTable();
            dataTable.Columns.Add("Id", typeof (Guid));
            dataTable.Columns.Add("FirstName", typeof (string));
            dataTable.Rows.Add(Id, FirstName);
            return dataTable;
        }

        public static Person FromDataReader(SqlDataReader sqlDataReader)
        {
            return new Person
            {
                Id = (Guid) sqlDataReader["Id"],
                FirstName = (string) sqlDataReader["FirstName"]
            };
        }
    }
}
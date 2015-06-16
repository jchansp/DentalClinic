using System;
using System.Data;
using System.Data.SqlClient;

namespace Repositories
{
    public class Entity
    {
        public Guid Id { protected get; set; }

        public virtual DataTable ToDataTable()
        {
            var dataTable = new DataTable();
            dataTable.Columns.Add("Id", typeof (Guid));
            dataTable.Rows.Add(Id);
            return dataTable;
        }

        public static Entity FromDataReader(SqlDataReader sqlDataReader)
        {
            return new Entity
            {
                Id = (Guid) sqlDataReader["Id"]
            };
        }
    }
}
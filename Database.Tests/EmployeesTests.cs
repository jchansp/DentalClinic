using System;
using System.ComponentModel;
using System.Diagnostics;
using Microsoft.Data.Tools.Schema.Sql.UnitTesting;
using Microsoft.Data.Tools.Schema.Sql.UnitTesting.Conditions;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Database.Tests
{
    [TestClass]
    public class EmployeesTests : SqlDatabaseTestClass
    {
        private SqlDatabaseTestActions Database_PersistEmployeesData;

        public EmployeesTests()
        {
            InitializeComponent();
        }

        [TestInitialize]
        public void TestInitialize()
        {
            InitializeTest();
        }

        [TestCleanup]
        public void TestCleanup()
        {
            CleanupTest();
        }

        #region Designer support code

        /// <summary>
        ///     Required method for Designer support - do not modify
        ///     the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            SqlDatabaseTestAction Database_PersistEmployees_TestAction;
            var resources = new ComponentResourceManager(typeof (EmployeesTests));
            ExecutionTimeCondition executionTimeCondition1;
            Database_PersistEmployeesData = new SqlDatabaseTestActions();
            Database_PersistEmployees_TestAction = new SqlDatabaseTestAction();
            executionTimeCondition1 = new ExecutionTimeCondition();
            // 
            // Database_PersistEmployeesData
            // 
            Database_PersistEmployeesData.PosttestAction = null;
            Database_PersistEmployeesData.PretestAction = null;
            Database_PersistEmployeesData.TestAction = Database_PersistEmployees_TestAction;
            // 
            // Database_PersistEmployees_TestAction
            // 
            Database_PersistEmployees_TestAction.Conditions.Add(executionTimeCondition1);
            resources.ApplyResources(Database_PersistEmployees_TestAction, "Database_PersistEmployees_TestAction");
            // 
            // executionTimeCondition1
            // 
            executionTimeCondition1.Enabled = true;
            executionTimeCondition1.ExecutionTime = TimeSpan.Parse("00:00:01");
            executionTimeCondition1.Name = "executionTimeCondition1";
        }

        #endregion

        [TestMethod]
        public void Database_PersistEmployees()
        {
            var testActions = Database_PersistEmployeesData;
            // Execute the pre-test script
            // 
            Trace.WriteLineIf((testActions.PretestAction != null), "Executing pre-test script...");
            var pretestResults = TestService.Execute(PrivilegedContext, PrivilegedContext, testActions.PretestAction);
            try
            {
                // Execute the test script
                // 
                Trace.WriteLineIf((testActions.TestAction != null), "Executing test script...");
                var testResults = TestService.Execute(ExecutionContext, PrivilegedContext, testActions.TestAction);
            }
            finally
            {
                // Execute the post-test script
                // 
                Trace.WriteLineIf((testActions.PosttestAction != null), "Executing post-test script...");
                var posttestResults = TestService.Execute(PrivilegedContext, PrivilegedContext,
                    testActions.PosttestAction);
            }
        }

        #region Additional test attributes

        //
        // You can use the following additional attributes as you write your tests:
        //
        // Use ClassInitialize to run code before running the first test in the class
        // [ClassInitialize()]
        // public static void MyClassInitialize(TestContext testContext) { }
        //
        // Use ClassCleanup to run code after all tests in a class have run
        // [ClassCleanup()]
        // public static void MyClassCleanup() { }
        //

        #endregion
    }
}
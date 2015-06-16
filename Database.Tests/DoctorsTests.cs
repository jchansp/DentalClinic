using System;
using System.ComponentModel;
using System.Diagnostics;
using Microsoft.Data.Tools.Schema.Sql.UnitTesting;
using Microsoft.Data.Tools.Schema.Sql.UnitTesting.Conditions;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Database.Tests
{
    [TestClass]
    public class DoctorsTests : SqlDatabaseTestClass
    {
        private SqlDatabaseTestActions Database_PersistDoctorsData;
        private SqlDatabaseTestActions Database_RetrieveDoctorsData;

        public DoctorsTests()
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
            SqlDatabaseTestAction Database_PersistDoctors_TestAction;
            var resources = new ComponentResourceManager(typeof (DoctorsTests));
            ExecutionTimeCondition executionTimeCondition1;
            SqlDatabaseTestAction Database_RetrieveDoctors_TestAction;
            ExecutionTimeCondition executionTimeCondition2;
            Database_PersistDoctorsData = new SqlDatabaseTestActions();
            Database_RetrieveDoctorsData = new SqlDatabaseTestActions();
            Database_PersistDoctors_TestAction = new SqlDatabaseTestAction();
            executionTimeCondition1 = new ExecutionTimeCondition();
            Database_RetrieveDoctors_TestAction = new SqlDatabaseTestAction();
            executionTimeCondition2 = new ExecutionTimeCondition();
            // 
            // Database_PersistDoctorsData
            // 
            Database_PersistDoctorsData.PosttestAction = null;
            Database_PersistDoctorsData.PretestAction = null;
            Database_PersistDoctorsData.TestAction = Database_PersistDoctors_TestAction;
            // 
            // Database_PersistDoctors_TestAction
            // 
            Database_PersistDoctors_TestAction.Conditions.Add(executionTimeCondition1);
            resources.ApplyResources(Database_PersistDoctors_TestAction, "Database_PersistDoctors_TestAction");
            // 
            // executionTimeCondition1
            // 
            executionTimeCondition1.Enabled = true;
            executionTimeCondition1.ExecutionTime = TimeSpan.Parse("00:00:01");
            executionTimeCondition1.Name = "executionTimeCondition1";
            // 
            // Database_RetrieveDoctorsData
            // 
            Database_RetrieveDoctorsData.PosttestAction = null;
            Database_RetrieveDoctorsData.PretestAction = null;
            Database_RetrieveDoctorsData.TestAction = Database_RetrieveDoctors_TestAction;
            // 
            // Database_RetrieveDoctors_TestAction
            // 
            Database_RetrieveDoctors_TestAction.Conditions.Add(executionTimeCondition2);
            resources.ApplyResources(Database_RetrieveDoctors_TestAction, "Database_RetrieveDoctors_TestAction");
            // 
            // executionTimeCondition2
            // 
            executionTimeCondition2.Enabled = true;
            executionTimeCondition2.ExecutionTime = TimeSpan.Parse("00:00:01");
            executionTimeCondition2.Name = "executionTimeCondition2";
        }

        #endregion

        [TestMethod]
        public void Database_PersistDoctors()
        {
            var testActions = Database_PersistDoctorsData;
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

        [TestMethod]
        public void Database_RetrieveDoctors()
        {
            var testActions = Database_RetrieveDoctorsData;
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
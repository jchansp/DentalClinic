using System;
using System.ComponentModel;
using System.Diagnostics;
using Microsoft.Data.Tools.Schema.Sql.UnitTesting;
using Microsoft.Data.Tools.Schema.Sql.UnitTesting.Conditions;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Database.Tests
{
    [TestClass]
    public class PatientsTests : SqlDatabaseTestClass
    {
        private SqlDatabaseTestActions Database_PersistPatientsData;
        private SqlDatabaseTestActions Database_RetrievePatientsData;

        public PatientsTests()
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
            SqlDatabaseTestAction Database_PersistPatients_TestAction;
            var resources = new ComponentResourceManager(typeof (PatientsTests));
            ExecutionTimeCondition executionTimeCondition1;
            SqlDatabaseTestAction Database_RetrievePatients_TestAction;
            ExecutionTimeCondition executionTimeCondition2;
            Database_PersistPatientsData = new SqlDatabaseTestActions();
            Database_RetrievePatientsData = new SqlDatabaseTestActions();
            Database_PersistPatients_TestAction = new SqlDatabaseTestAction();
            executionTimeCondition1 = new ExecutionTimeCondition();
            Database_RetrievePatients_TestAction = new SqlDatabaseTestAction();
            executionTimeCondition2 = new ExecutionTimeCondition();
            // 
            // Database_PersistPatientsData
            // 
            Database_PersistPatientsData.PosttestAction = null;
            Database_PersistPatientsData.PretestAction = null;
            Database_PersistPatientsData.TestAction = Database_PersistPatients_TestAction;
            // 
            // Database_PersistPatients_TestAction
            // 
            Database_PersistPatients_TestAction.Conditions.Add(executionTimeCondition1);
            resources.ApplyResources(Database_PersistPatients_TestAction, "Database_PersistPatients_TestAction");
            // 
            // executionTimeCondition1
            // 
            executionTimeCondition1.Enabled = true;
            executionTimeCondition1.ExecutionTime = TimeSpan.Parse("00:00:01");
            executionTimeCondition1.Name = "executionTimeCondition1";
            // 
            // Database_RetrievePatientsData
            // 
            Database_RetrievePatientsData.PosttestAction = null;
            Database_RetrievePatientsData.PretestAction = null;
            Database_RetrievePatientsData.TestAction = Database_RetrievePatients_TestAction;
            // 
            // Database_RetrievePatients_TestAction
            // 
            Database_RetrievePatients_TestAction.Conditions.Add(executionTimeCondition2);
            resources.ApplyResources(Database_RetrievePatients_TestAction, "Database_RetrievePatients_TestAction");
            // 
            // executionTimeCondition2
            // 
            executionTimeCondition2.Enabled = true;
            executionTimeCondition2.ExecutionTime = TimeSpan.Parse("00:00:01");
            executionTimeCondition2.Name = "executionTimeCondition2";
        }

        #endregion

        [TestMethod]
        public void Database_PersistPatients()
        {
            var testActions = Database_PersistPatientsData;
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
        public void Database_RetrievePatients()
        {
            var testActions = Database_RetrievePatientsData;
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
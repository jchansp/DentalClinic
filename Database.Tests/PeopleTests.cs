using System;
using System.ComponentModel;
using System.Diagnostics;
using Microsoft.Data.Tools.Schema.Sql.UnitTesting;
using Microsoft.Data.Tools.Schema.Sql.UnitTesting.Conditions;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Database.Tests
{
    [TestClass]
    public class PeopleTests : SqlDatabaseTestClass
    {
        private SqlDatabaseTestActions Database_PersistPeopleData;
        private SqlDatabaseTestActions Database_RetrievePeopleData;

        public PeopleTests()
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
            SqlDatabaseTestAction Database_PersistPeople_TestAction;
            var resources = new ComponentResourceManager(typeof (PeopleTests));
            ExecutionTimeCondition executionTimeCondition2;
            SqlDatabaseTestAction Database_RetrievePeople_TestAction;
            ExecutionTimeCondition executionTimeCondition1;
            Database_PersistPeopleData = new SqlDatabaseTestActions();
            Database_RetrievePeopleData = new SqlDatabaseTestActions();
            Database_PersistPeople_TestAction = new SqlDatabaseTestAction();
            executionTimeCondition2 = new ExecutionTimeCondition();
            Database_RetrievePeople_TestAction = new SqlDatabaseTestAction();
            executionTimeCondition1 = new ExecutionTimeCondition();
            // 
            // Database_PersistPeople_TestAction
            // 
            Database_PersistPeople_TestAction.Conditions.Add(executionTimeCondition2);
            resources.ApplyResources(Database_PersistPeople_TestAction, "Database_PersistPeople_TestAction");
            // 
            // executionTimeCondition2
            // 
            executionTimeCondition2.Enabled = true;
            executionTimeCondition2.ExecutionTime = TimeSpan.Parse("00:00:01");
            executionTimeCondition2.Name = "executionTimeCondition2";
            // 
            // Database_RetrievePeople_TestAction
            // 
            Database_RetrievePeople_TestAction.Conditions.Add(executionTimeCondition1);
            resources.ApplyResources(Database_RetrievePeople_TestAction, "Database_RetrievePeople_TestAction");
            // 
            // executionTimeCondition1
            // 
            executionTimeCondition1.Enabled = true;
            executionTimeCondition1.ExecutionTime = TimeSpan.Parse("00:00:01");
            executionTimeCondition1.Name = "executionTimeCondition1";
            // 
            // Database_PersistPeopleData
            // 
            Database_PersistPeopleData.PosttestAction = null;
            Database_PersistPeopleData.PretestAction = null;
            Database_PersistPeopleData.TestAction = Database_PersistPeople_TestAction;
            // 
            // Database_RetrievePeopleData
            // 
            Database_RetrievePeopleData.PosttestAction = null;
            Database_RetrievePeopleData.PretestAction = null;
            Database_RetrievePeopleData.TestAction = Database_RetrievePeople_TestAction;
        }

        #endregion

        [TestMethod]
        public void Database_PersistPeople()
        {
            var testActions = Database_PersistPeopleData;
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
        public void Database_RetrievePeople()
        {
            var testActions = Database_RetrievePeopleData;
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
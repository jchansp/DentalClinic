using System;
using System.ComponentModel;
using System.Diagnostics;
using Microsoft.Data.Tools.Schema.Sql.UnitTesting;
using Microsoft.Data.Tools.Schema.Sql.UnitTesting.Conditions;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Database.Tests
{
    [TestClass]
    public class EntitiesTests : SqlDatabaseTestClass
    {
        private SqlDatabaseTestActions Database_PersistEntitiesData;

        public EntitiesTests()
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
            SqlDatabaseTestAction Database_PersistEntities_TestAction;
            var resources = new ComponentResourceManager(typeof (EntitiesTests));
            ExecutionTimeCondition executionTimeCondition1;
            Database_PersistEntitiesData = new SqlDatabaseTestActions();
            Database_PersistEntities_TestAction = new SqlDatabaseTestAction();
            executionTimeCondition1 = new ExecutionTimeCondition();
            // 
            // Database_PersistEntitiesData
            // 
            Database_PersistEntitiesData.PosttestAction = null;
            Database_PersistEntitiesData.PretestAction = null;
            Database_PersistEntitiesData.TestAction = Database_PersistEntities_TestAction;
            // 
            // Database_PersistEntities_TestAction
            // 
            Database_PersistEntities_TestAction.Conditions.Add(executionTimeCondition1);
            resources.ApplyResources(Database_PersistEntities_TestAction, "Database_PersistEntities_TestAction");
            // 
            // executionTimeCondition1
            // 
            executionTimeCondition1.Enabled = true;
            executionTimeCondition1.ExecutionTime = TimeSpan.Parse("00:00:01");
            executionTimeCondition1.Name = "executionTimeCondition1";
        }

        #endregion

        [TestMethod]
        public void Database_PersistEntities()
        {
            var testActions = Database_PersistEntitiesData;
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
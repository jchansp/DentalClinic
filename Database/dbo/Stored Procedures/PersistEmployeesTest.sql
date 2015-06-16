CREATE PROCEDURE PersistEmployeesTest
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @Employees Employee;

	INSERT @Employees (
		Id
		,FirstName
		)
	VALUES (
		NEWID()
		,'John'
		);

	EXEC PersistEmployees @Employees;
END;

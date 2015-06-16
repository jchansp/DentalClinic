CREATE PROCEDURE PersistPeopleTest
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @People Person;

	INSERT @People (
		Id
		,FirstName
		)
	VALUES (
		NEWID()
		,'John'
		);

	EXEC PersistPeople @People;
END;

CREATE PROCEDURE PersistUsersTest
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @Users [User];

	INSERT @Users (
		Id
		,FirstName
		)
	VALUES (
		NEWID()
		,'John'
		);

	EXEC PersistUsers @Users;
END;

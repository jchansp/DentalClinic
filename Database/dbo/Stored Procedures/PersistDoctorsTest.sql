CREATE PROCEDURE PersistDoctorsTest
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @Doctors Doctor;

	INSERT @Doctors (
		Id
		,FirstName
		)
	VALUES (
		NEWID()
		,'John'
		);

	EXEC PersistDoctors @Doctors;
END;

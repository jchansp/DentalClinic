CREATE PROCEDURE PersistPatientsTest
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @Patients Patient;

	INSERT @Patients (
		Id
		,FirstName
		)
	VALUES (
		NEWID()
		,'John'
		);

	EXEC PersistPatients @Patients;
END;

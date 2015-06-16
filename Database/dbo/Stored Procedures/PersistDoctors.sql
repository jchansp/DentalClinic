CREATE PROCEDURE PersistDoctors @Doctors Doctor READONLY
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRAN;

	BEGIN TRY
		DECLARE @Employees Employee;

		INSERT @Employees
		SELECT *
		FROM @Doctors;

		EXEC PersistEmployees @Employees;

		MERGE Doctors AS Target
		USING @Doctors AS Source
			ON (Target.Id = Source.Id)
		WHEN NOT MATCHED
			THEN
				INSERT (Id)
				VALUES (Source.Id);

		--OUTPUT deleted.*
		--	,$ACTION
		--	,inserted.*
		--INTO #MyTempTable;
		COMMIT TRAN;
	END TRY

	BEGIN CATCH
		ROLLBACK TRAN;

		THROW;
	END CATCH;
END;

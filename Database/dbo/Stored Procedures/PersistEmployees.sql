CREATE PROCEDURE PersistEmployees @Employees Employee READONLY
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRAN;

	BEGIN TRY
		DECLARE @Users [User];

		INSERT @Users
		SELECT *
		FROM @Employees;

		EXEC PersistUsers @Users;

		MERGE Employees AS Target
		USING @Employees AS Source
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

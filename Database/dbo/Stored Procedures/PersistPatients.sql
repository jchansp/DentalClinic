CREATE PROCEDURE PersistPatients @Patients Patient READONLY
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRAN;

	BEGIN TRY
		DECLARE @Users [User];

		INSERT @Users
		SELECT *
		FROM @Patients;

		EXEC PersistUsers @Users;

		MERGE Patients AS Target
		USING @Patients AS Source
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

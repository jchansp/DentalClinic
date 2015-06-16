CREATE PROCEDURE PersistPeople @People Person READONLY
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRAN;

	BEGIN TRY
		DECLARE @Entities Entity;

		INSERT @Entities
		SELECT Id
		FROM @People;

		EXEC PersistEntities @Entities;

		MERGE People AS Target
		USING @People AS Source
			ON (Target.Id = Source.Id)
		WHEN MATCHED
			THEN
				UPDATE
				SET FirstName = Source.FirstName
					--			,CountryCode = Source.CountryCode
		WHEN NOT MATCHED
			THEN
				INSERT (
					Id
					,FirstName
					)
				--,CountryCode
				VALUES (
					Source.Id
					,Source.FirstName
					--,Source.CountryCode
					);

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

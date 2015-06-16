CREATE PROCEDURE PersistEntitiesTest
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @Entities Entity;

	INSERT @Entities (Id)
	VALUES (NEWID());

	EXEC PersistEntities @Entities;
END;

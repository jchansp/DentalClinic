CREATE PROCEDURE RetrievePatients
AS
SELECT p1.Id
	,p.FirstName
FROM Patients p1
JOIN People p ON p.Id = p1.Id;

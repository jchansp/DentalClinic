CREATE PROCEDURE RetrieveDoctors
AS
SELECT d.Id
	,p.FirstName
FROM Doctors d
JOIN People p ON p.Id = d.Id;

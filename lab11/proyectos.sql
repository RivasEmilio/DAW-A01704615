BULK INSERT a1704615.a1704615.[Proyectos]

		FROM 'e:\wwwroot\rcortese\proyectos.csv'
		WITH
			(
			CODEPAGE = 'ACP',
			FIELDTERMINATOR = ',',
			ROWTERMINATOR='\n'
			
			)
	
SELECT * FROM Proyectos
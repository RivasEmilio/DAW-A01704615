BULK INSERT a1704615.a1704615.[Materiales]

		FROM 'e:\wwwroot\rcortese\materiales.csv'
		WITH
			(
			CODEPAGE = 'ACP',
			FIELDTERMINATOR = ',',
			ROWTERMINATOR='\n'
			
			)
	
SELECT * FROM Materiales
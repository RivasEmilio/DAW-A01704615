BULK INSERT a1704615.a1704615.[Proveedores]

		FROM 'e:\wwwroot\rcortese\proveedores.csv'
		WITH
			(
			CODEPAGE = 'ACP',
			FIELDTERMINATOR = ',',
			ROWTERMINATOR='\n'
			
			)
SELECT * FROM Proveedores
	
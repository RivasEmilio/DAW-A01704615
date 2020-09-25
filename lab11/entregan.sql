SET DATEFORMAT dmy

BULK INSERT a1704615.a1704615.[Entregan]
FROM 'e:\wwwroot\rcortese\entregan.csv'
WITH 
(
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
)

SELECT * FROM Entregan
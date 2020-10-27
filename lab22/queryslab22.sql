  IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'creaMaterial' AND type = 'P')
                DROP PROCEDURE creaMaterial
            GO

            CREATE PROCEDURE creaMaterial
                @uclave NUMERIC(5,0),
                @udescripcion VARCHAR(50),
                @ucosto NUMERIC(8,2)
            AS
                INSERT INTO Materiales VALUES(@uclave, @udescripcion, @ucosto)
            GO

 IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'modificaMaterial' AND type = 'P')
                DROP PROCEDURE modificaMaterial
            GO

            CREATE PROCEDURE modificaMaterial
                @uclave NUMERIC(5,0),
                @udescripcion VARCHAR(50),
                @ucosto NUMERIC(8,2)
            AS
               UPDATE Materiales 
			   SET Descripcion=@udescripcion, Costo=@ucosto
			   WHERE Clave = @uclave
            GO

 IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'eliminaMaterial' AND type = 'P')
                DROP PROCEDURE eliminaMaterial
            GO

            CREATE PROCEDURE eliminaMaterial
                @uclave NUMERIC(5,0)
            AS
               DELETE FROM Materiales WHERE Clave = @uclave
            GO

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'creaProyecto' AND type = 'P')
                DROP PROCEDURE creaProyecto
            GO

            CREATE PROCEDURE creaProyecto
                @unumero NUMERIC(5,0),
                @udenominacion VARCHAR(50)
            AS
                INSERT INTO Proyectos VALUES(@unumero, @udenominacion)
            GO

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'modificaproyecto' AND type = 'P')
                DROP PROCEDURE modificaproyecto
            GO

            CREATE PROCEDURE modificaproyecto
                @unumero NUMERIC(5,0),
                @udenominacion VARCHAR(50)
            AS
				UPDATE Proyectos 
				SET Denominacion=@udenominacion 
				WHERE Numero=@unumero
            GO

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'eliminaproyecto' AND type = 'P')
                DROP PROCEDURE eliminaproyecto
            GO

            CREATE PROCEDURE eliminaproyecto
                @unumero NUMERIC(5,0)
            AS
				DELETE FROM Proyectos WHERE Numero=@unumero
            GO


EXECUTE creaMaterial 5000,'Martillos Acme',250

EXECUTE modificaMaterial 5000,'Clavos Acme',333

EXECUTE eliminaMaterial 5000

EXECUTE creaProyecto 5020,'Protector de pies contra peseros'

EXECUTE modificaproyecto 5020,'Tuneado de tsurus e italikas'

EXECUTE eliminaproyecto 5020

SELECT * FROM Materiales
SELECT * FROM Proyectos


  IF EXISTS (SELECT name FROM sysobjects
                                       WHERE name = 'queryMaterial' AND type = 'P')
                                DROP PROCEDURE queryMaterial
                            GO

                            CREATE PROCEDURE queryMaterial
                                @udescripcion VARCHAR(50),
                                @ucosto NUMERIC(8,2)

                            AS
                                SELECT * FROM Materiales WHERE descripcion
                                LIKE '%'+@udescripcion+'%' AND costo > @ucosto
                            GO

EXECUTE queryMaterial 'Lad',20
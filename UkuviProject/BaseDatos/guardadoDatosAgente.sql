UPDATE LandingPage2 SET Aseguradora_1 = NULL,  Aseguradora_2 = NULL,  Aseguradora_3 = NULL,  Aseguradora_4 = NULL,  Aseguradora_5 = NULL,  Aseguradora_6 = NULL,  Aseguradora_7 = NULL  
WHERE ID_Page = 11 AND Ramo LIKE 'Auto'

Select * from LandingPage2 
Select * from AgenteSLandingP

 IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'addDireccion' AND type = 'P')
                DROP PROCEDURE addDireccion
			GO

            CREATE PROCEDURE addDireccion
                @udominio VARCHAR(100),
				@udcorta VARCHAR(255)
            AS
				DECLARE @id int

				Select @id = A.ID_Agente from AgenteSLandingP A WHERE SubDominio_Page = @udominio

				UPDATE AgenteSeguros SET DireccionCorta = @udcorta WHERE ID_Agente = @id

            GO

Select * from AgenteSeguros

EXECUTE addDireccion 'test', 'Santa fe 107'

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'clearAgente' AND type = 'P')
                DROP PROCEDURE clearAgente
			GO

            CREATE PROCEDURE clearAgente
                @udominio VARCHAR(100)
            AS
				DECLARE @id int

				Select @id = A.ID_Agente from AgenteSLandingP A WHERE SubDominio_Page = @udominio

				UPDATE AgenteSeguros SET CorreoElectronico_1 = NULL, CorreoElectronico_2 = NULL, CorreoElectronico_3 = NULL,  Telefono_1 = NULL,
				Telefono_2 = NULL, Telefono_3 = NULL, Telefono_4 = NULL, Telefono_5 = NULL,  DireccionCorta = NULL, Dir_Estado = NUll,
				Dir_MuniDele = NUll, Dir_Calle = NUll, Dir_Colonia = NUll, Dir_CP = NUll, Dir_NoInt = NUll, Dir_NoExt = NUll, Facebook = NUll, Instagram = NUll,
				LinkedIn = NUll, Twitter = NUll, Youtube = NUll
				WHERE ID_Agente = @id

            GO

DECLARE @id INT Select @id = A.ID_Agente from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%testnum%' UPDATE AgenteSeguros SET Telefono_1 ='1111111111' WHERE ID_Agente = @id

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'dirExa' AND type = 'P')
                DROP PROCEDURE dirExa
			GO

            CREATE PROCEDURE dirExa
                @udominio VARCHAR(100),
				@uestado VARCHAR(30),
				@umuni VARCHAR(30),
				@ucalle VARCHAR(30),
				@ucolonia VARCHAR(30),
				@unint VARCHAR(10),
				@unext VARCHAR(10),
				@ucp VARCHAR(10)
            AS
				DECLARE @id int

				Select @id = A.ID_Agente from AgenteSLandingP A WHERE SubDominio_Page = @udominio

				UPDATE AgenteSeguros SET Dir_Estado = @uestado, Dir_MuniDele = @umuni, Dir_Calle = @ucalle, Dir_Colonia = @ucolonia, Dir_CP = @ucp, Dir_NoInt = @unint, Dir_NoExt = @unext
				WHERE ID_Agente = @id

            GO

ALTER TABLE AgenteSeguros
DROP COLUMN WhatsAPP;
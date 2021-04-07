drop table AgenteSLandingP
CREATE TABLE AgenteSLandingP
(
	ID_Agente int not null,
	ID_Page Int IDENTITY(1,1),
	SubDominio_Page varchar(100) not null,

	CONSTRAINT PK_AS_LP PRIMARY KEY(ID_Page),
	CONSTRAINT FK_ID_Agente FOREIGN KEY(ID_Agente) references AgenteSeguros(ID_Agente)

)


 IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'crearAgente' AND type = 'P')
                DROP PROCEDURE crearAgente
			GO

            CREATE PROCEDURE crearAgente
                @udominio VARCHAR(100)
            AS

                INSERT INTO AgenteSeguros(Nombre,Apellido,Dominio) VALUES('Agente','Seguros', @udominio);

				DECLARE @id int

				Select @id = A.ID_Agente from AgenteSeguros A WHERE Dominio = @udominio

				INSERT INTO AgenteSLandingP(ID_Agente,SubDominio_Page) values(@id,@udominio)

            GO

execute crearAgente 'bananas'

SELECT * FROM  AgenteSLandingP

SELECT * FROM  AgenteSeguros

 IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'findName2' AND type = 'P')
                DROP PROCEDURE findName2
			GO

            CREATE PROCEDURE findName2
                @udominiopage VARCHAR(100)
            AS
				IF EXISTS (SELECT SubDominio_Page FROM AgenteSLandingP WHERE  SubDominio_Page =  @udominiopage)
				BEGIN
					SELECT 1
				END
				ELSE
				BEGIN
				    SELECT 0
				END
                
            GO

execute findName2 'bananas'

CREATE Table LandingPage2
(
	ID_Page int ,
	Ramo varchar(100) not null,
	Plantilla int not null,
	Color int not null,
	Imagen int not null,
	Titulo_Profesional varchar(100),
	Mensaje_1 varchar(80),
	Mensaje_2 varchar(120),
	Aseguradora_1 varchar(30),
	Aseguradora_2 varchar(30),
	Aseguradora_3 varchar(30),
	Aseguradora_4 varchar(30),
	Aseguradora_5 varchar(30),
	Aseguradora_6 varchar(30),
	Aseguradora_7 varchar(30)

	CONSTRAINT FK_ID_Page FOREIGN KEY(ID_Page) references AgenteSLandingP(ID_Page),

)

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'addName2' AND type = 'P')
                DROP PROCEDURE addName2
			GO

            CREATE PROCEDURE addName2
				@udominiopage VARCHAR(100),
                @uramo VARCHAR(100),
                @uplantilla NUMERIC(1,0),
				@ucolor NUMERIC(1,0),
				@uimagen NUMERIC(1,0),
				@utituloprofesional VARCHAR(100)
            AS
				DECLARE @id INT
				Select @id = A.ID_Page from AgenteSLandingP A WHERE SubDominio_Page = @udominiopage

				IF EXISTS (SELECT Ramo FROM LandingPage2 WHERE ID_Page = @id and  Ramo =  @uramo)
				BEGIN
					SELECT 'This record already exists!'
					UPDATE LandingPage2 set Plantilla = @uplantilla, Color = @ucolor, Imagen = @uimagen, Titulo_Profesional = @utituloprofesional WHERE Ramo =  @uramo and ID_Page =  @id
				END
				ELSE
				BEGIN
				  INSERT LandingPage2(ID_Page,Ramo,Plantilla,Color,Imagen,Titulo_Profesional) VALUES(@id,@uramo, @uplantilla, @ucolor, @uimagen, @utituloprofesional);
				END
                
            GO

EXECUTE addName2 'prueba','GMM',1,3,1,'Agente de Seguros'

Select*from LandingPage2

delete from AgenteSLandingP

delete from LandingPage2

delete from AgenteSeguros

DECLARE @id INT
Select @id = A.ID_Page from AgenteSLandingP A WHERE SubDominio_Page = 'bananas'
UPDATE LandingPage2 SET Aseguradora_1 ='axxa' WHERE ID_Page = @id AND Ramo LIKE 'auto'
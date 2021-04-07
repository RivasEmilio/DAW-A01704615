IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'addRedes' AND type = 'P')
                DROP PROCEDURE addRedes
			GO
			CREATE PROCEDURE addRedes
			@udominio VARCHAR(100),
			@ufacebook VARCHAR(100) = null,
			@utwitter VARCHAR(100) = null,
			@uinstagram VARCHAR(100) = null,
			@uyoutube VARCHAR(100) = null,
			@ulinkedin VARCHAR(100) = null
		AS
			UPDATE AgenteSeguros SET Facebook=@ufacebook, LinkedIn=@ulinkedin, Youtube=@uyoutube, Twitter=@utwitter, Instagram=@uinstagram WHERE @udominio=Dominio
			
	GO

SELECT *
FROM AgenteSeguros
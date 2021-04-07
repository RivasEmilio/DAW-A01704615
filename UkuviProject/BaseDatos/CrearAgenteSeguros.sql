sp_helpconstraint AgenteSeguros

drop table AgenteSeguros

CREATE TABLE AgenteSeguros
(
	ID_Agente Int IDENTITY(1,1) PRIMARY KEY,
	Nombre varchar(50) not null,
	Apellido varchar(50) not null,
	Foto_logo VARCHAR(100),
	CorreoElectronico_1 varchar(255),
	CorreoElectronico_2 varchar(255),
	CorreoElectronico_3 varchar(255),
	Telefono_1 char(10),
	Telefono_2 char(10),
	Telefono_3 char(10),
	Telefono_4 char(10),
	Telefono_5 char(10),
	DireccionCorta varchar(255),
	Dir_Estado varchar(30),
	Dir_MuniDele varchar(30),
	Dir_Colonia varchar(30),
	Dir_Calle varchar(30),
	Dir_NoInt varchar(10),
	Dir_NoExt varchar(10),
	Dir_CP varchar(10),
	Facebook varchar(100),
	Instagram varchar(100),
	LinkedIn varchar(100),
	Twitter varchar(100),
	Youtube varchar(100),
	Dominio varchar(100) not null

)


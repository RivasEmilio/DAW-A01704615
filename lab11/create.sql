CREATE TABLE Materiales
(
  Clave numeric(5),
  Descripcion varchar(50),
  Costo numeric(8,2)
)

CREATE Table Entregan
(
    Clave numeric(5),
    RFC Char(13),
    Numero NUMERIC(5),
    Fecha DATETIME,
    Cantidad NUMERIC(8,2)


)

CREATE Table Proveedores
(
    RFC Char(13),
    RazonSocial VARCHAR(50)

)

CREATE Table Proyectos
(
    Numero NUMERIC(5),
    Denominacion VARCHAR(50)


)

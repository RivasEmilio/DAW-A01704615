
/*
IF EXISTS (SELECT name FROM sysobjects
		WHERE name = 'REGISTRAR_RETIRO_CAJERO' AND type = 'P')
    DROP PROCEDURE REGISTRAR_RETIRO_CAJERO
GO
*/

CREATE PROCEDURE REGISTRAR_RETIRO_CAJERO
	@noCuenta varchar(255),
	@Monto int
AS
	BEGIN TRANSACTION RetiroCajero
	INSERT INTO Clientes_Movimiento VALUES(@noCuenta, 'A', GETDATE(), @Monto)

	IF @@ERROR = 0
	COMMIT TRANSACTION RetiroCajero
	ELSE
	BEGIN
	PRINT 'A transaction needs to be rolled back'
	ROLLBACK TRANSACTION RetiroCajero
	END
GO

CREATE PROCEDURE REGISTRAR_DEPOSITO_VENTANILLA
	@noCuenta varchar(255),
	@Monto int
AS
	BEGIN TRANSACTION DepositoVentanilla
	INSERT INTO Clientes_Movimiento VALUES(@noCuenta, 'B', GETDATE(), @Monto)

	IF @@ERROR = 0
	COMMIT TRANSACTION DepositoVentanilla
	ELSE
	BEGIN
	PRINT 'No pudo realizarse el deposito'
	ROLLBACK TRANSACTION DepositoVentanilla
	END
GO


CREATE TABLE Clientes(
	noCuenta varchar(255) not null,
	Nombre varchar(255),
	Saldo int,
	PRIMARY KEY (noCuenta)
)

CREATE TABLE tipoMovimiento(
	Clave varchar(255) not null,
	Descripcion varchar(255),
	PRIMARY KEY (Clave)
)

CREATE TABLE Clientes_Movimiento(
	noCuenta varchar(255) not null,
	Clave varchar(255) not null,
	Fecha datetime,
	Monto int
	FOREIGN KEY (noCuenta) REFERENCES Clientes(noCuenta),
	FOREIGN KEY (Clave) REFERENCES tipoMovimiento(Clave)
)

BEGIN TRANSACTION PRUEBA1
INSERT INTO Clientes VALUES('001', 'Manuel Rios Maldonado', 9000);
INSERT INTO Clientes VALUES('002', 'Pablo Perez Ortiz', 5000);
INSERT INTO Clientes VALUES('003', 'Luis Flores Alvarado', 8000);
COMMIT TRANSACTION PRUEBA1

SELECT * FROM Clientes

BEGIN TRANSACTION PRUEBA2
INSERT INTO Clientes VALUES('004','Ricardo Rios Maldonado',19000);
INSERT INTO Clientes VALUES('005','Pablo Ortiz Arana',15000);
INSERT INTO Clientes VALUES('006','Luis Manuel Alvarado',18000);

SELECT * FROM Clientes

ROLLBACK TRANSACTION PRUEBA2

SELECT * FROM Clientes

BEGIN TRANSACTION PRUEBA3
INSERT INTO tipoMovimiento VALUES('A','Retiro Cajero Automatico');
INSERT INTO tipoMovimiento VALUES('B','Deposito Ventanilla');
COMMIT TRANSACTION PRUEBA3

BEGIN TRANSACTION PRUEBA4
INSERT INTO Clientes_Movimiento VALUES('001','A',GETDATE(),500);
UPDATE Clientes SET SALDO = SALDO -500
WHERE NoCuenta='001'
COMMIT TRANSACTION PRUEBA4

Select * FROM tipoMovimiento

Select * FROM Clientes_Movimiento

BEGIN TRANSACTION PRUEBA5
INSERT INTO Clientes VALUES('005','Rosa Ruiz Maldonado',9000);
INSERT INTO Clientes VALUES('006','Luis Camino Ortiz',5000);
INSERT INTO Clientes VALUES('001','Oscar Perez Alvarado',8000);

IF @@ERROR = 0
COMMIT TRANSACTION PRUEBA5
ELSE
BEGIN
PRINT 'A transaction needs to be rolled back'
ROLLBACK TRANSACTION PRUEBA5
END

SELECT * FROM Clientes_Movimiento

EXECUTE REGISTRAR_RETIRO_CAJERO '002',500

EXECUTE REGISTRAR_DEPOSITO_VENTANILLA '003',900
-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 28, 2020 at 10:50 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id15254856_db`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`id15254856_emilioadmin`@`%` PROCEDURE `addState` (IN `id` VARCHAR(6), IN `state` VARCHAR(50))  NO SQL
INSERT INTO estado_zombie (`id`,`nestado`) VALUES (id,state)$$

CREATE DEFINER=`id15254856_emilioadmin`@`%` PROCEDURE `createZombie` (IN `name` VARCHAR(255) CHARSET utf8, IN `id` VARCHAR(6) CHARSET utf8)  MODIFIES SQL DATA
    DETERMINISTIC
INSERT INTO zombie VALUES (name,id)$$

CREATE DEFINER=`id15254856_emilioadmin`@`%` PROCEDURE `getDate` ()  NO SQL
SELECT * from estado_zombie ORDER BY fecha DESC$$

CREATE DEFINER=`id15254856_emilioadmin`@`%` PROCEDURE `getEstados` ()  NO SQL
SELECT * FROM estados$$

CREATE DEFINER=`id15254856_emilioadmin`@`%` PROCEDURE `getID` (IN `name` VARCHAR(255))  NO SQL
SELECT id_z FROM zombie WHERE nomCom = name$$

CREATE DEFINER=`id15254856_emilioadmin`@`%` PROCEDURE `getZname` (IN `idn` VARCHAR(6))  NO SQL
SELECT nomCom from zombie where id_z = idn$$

CREATE DEFINER=`id15254856_emilioadmin`@`%` PROCEDURE `getZombienum` (IN `state` VARCHAR(50))  NO SQL
SELECT COUNT(E.id) from estado_zombie as E WHERE E.nestado = state$$

CREATE DEFINER=`id15254856_emilioadmin`@`%` PROCEDURE `updateState` (IN `state` VARCHAR(50), IN `idn` VARCHAR(6))  NO SQL
UPDATE estado_zombie
SET `nestado` = state
WHERE `id` = idn$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `estados`
--

CREATE TABLE `estados` (
  `nestado` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `estados`
--

INSERT INTO `estados` (`nestado`) VALUES
('desmayo'),
('desorientación'),
('infección'),
('transformación'),
('violencia');

-- --------------------------------------------------------

--
-- Table structure for table `estado_zombie`
--

CREATE TABLE `estado_zombie` (
  `id` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `nestado` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `estado_zombie`
--

INSERT INTO `estado_zombie` (`id`, `nestado`, `fecha`) VALUES
('dsa123', 'desmayo', '2020-10-28 12:35:14'),
('poi123', 'transformación', '2020-10-28 22:48:21'),
('dfg456', 'desorientación', '2020-10-27 13:15:16'),
('qwe123', 'infección', '2020-10-29 13:15:16'),
('qwe456', 'desorientación', '2020-10-28 13:15:56'),
('asd123', 'infeccion', '2020-10-28 22:35:21'),
('dsa321', 'desmayo', '2020-10-28 22:46:41'),
('tyu123', 'violencia', '2020-10-28 22:05:01');

-- --------------------------------------------------------

--
-- Table structure for table `zombie`
--

CREATE TABLE `zombie` (
  `nomCom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_z` varchar(6) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `zombie`
--

INSERT INTO `zombie` (`nomCom`, `id_z`) VALUES
('emilio', 'asd123'),
('carlos', 'bgt678'),
('fernando', 'cvb345'),
('Matute', 'dfg456'),
('bernie', 'dsa123'),
('sebas', 'dsa321'),
('Frank', 'poi123'),
('Paco', 'qwe123'),
('Sol', 'qwe456'),
('adrian', 'tyu123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`nestado`);

--
-- Indexes for table `estado_zombie`
--
ALTER TABLE `estado_zombie`
  ADD KEY `FK_NESTADO` (`nestado`),
  ADD KEY `FK_idZ` (`id`);

--
-- Indexes for table `zombie`
--
ALTER TABLE `zombie`
  ADD PRIMARY KEY (`id_z`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `estado_zombie`
--
ALTER TABLE `estado_zombie`
  ADD CONSTRAINT `FK_NESTADO` FOREIGN KEY (`nestado`) REFERENCES `estados` (`nestado`),
  ADD CONSTRAINT `FK_idZ` FOREIGN KEY (`id`) REFERENCES `zombie` (`id_z`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

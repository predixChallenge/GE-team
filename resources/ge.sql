-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3307
-- Generation Time: Mar 14, 2017 at 08:57 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ge`
--

-- --------------------------------------------------------

--
-- Table structure for table `tank`
--

CREATE TABLE `tank` (
  `id` int(11) NOT NULL,
  `tank_Volume` int(20) NOT NULL,
  `tank_Percentage` int(20) NOT NULL,
  `tank_Name` varchar(20) NOT NULL,
  `tank_PumpState` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tank`
--

INSERT INTO `tank` (`id`, `tank_Volume`, `tank_Percentage`, `tank_Name`, `tank_PumpState`) VALUES
(1, 200, 10, 'Rambo - Akonnor', 1),
(2, 500, 55, 'Rambo - Akonnor', 0),
(3, 800, 75, 'Rambo -Akonnor', 0),
(4, 850, 80, 'Rambo - Akonnor', 0),
(5, 350, 25, 'Ratu', 1),
(6, 450, 55, 'GE', 0),
(7, 260, 15, 'Rambo', 1)

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tank`
--
ALTER TABLE `tank`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tank`
--

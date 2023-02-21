-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 21, 2023 at 07:58 PM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meb_bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `bookId` int(11) NOT NULL,
  `bookname` varchar(255) NOT NULL,
  `author` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `cover` varchar(200) DEFAULT NULL,
  `rating` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`bookId`, `bookname`, `author`, `price`, `cover`, `rating`) VALUES
(1, 'REvenge:reVOLUTION', 'poonthenew', 1, 'https://fbi.dek-d.com/27/0748/8824/131369759', 2),
(4, 'Darwin Game Vol.24', 'LIPFLOPs', 130, 'https://pbs.twimg.com/media/E9Tnm67VgAgqUS4?format=jpg&name=4096x4096', 4.25),
(5, 'Bocchi the rock', 'Aki Hamaji', 75, 'https://64.media.tumblr.com/ed27452689a63a13273c957e261fde10/bbfeb994b3d02db0-51/s1280x1920/368cf5fe059f6f770240bf186a288adeb37921b8.jpg', 5),
(6, 'Chainsaw man Vol.12', 'ฟูจิโมโตะ ทัตสึกิ', 95, 'https://pbs.twimg.com/media/FdMNYFkWAAAxu4k.jpg', 3.5),
(7, 'JoJo ', 'Hirohiko Arak', 79, 'https://upload.wikimedia.org/wikipedia/en/f/f7/JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg', 3.5),
(8, 'Baki', 'Keisuke Itagaki', 95, 'https://du.lnwfile.com/_/du/_raw/te/s6/y7.jpg', 4.25),
(9, 'The Wold in furture', 'poonthenew', 69, 'https://cdn.discordapp.com/attachments/998415903601467445/1077676713770758264/126965903.png', 3.5),
(10, 'คุณอาเรียโต๊ะข้างๆ พูดรัสเซียหวาน ฯ', 'ซันซันซัน', 243, 'https://upload.wikimedia.org/wikipedia/th/f/fe/Tokidoki_Bosotto_Russia-go_de_Dereru_Tonari_no_Aalya-san.jpg', 4),
(112, 'Spy x Family', 'Tatsuya Endo', 80, 'https://storage.naiin.com/system/application/bookstore/resource/product/202005/505269/6000039480_front_XXL.jpg?imgname=SPY-X-FAMILY-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-2', 4.25),
(113, '86', 'อาซาโตะ อาซาโตะ', 159, 'https://www.phoenixnext.com/img/600/744/resize/catalog/product/8/6/86_vol1_jacket.jpg', 3.5),
(114, 'ขาดคุณนางฟ้าข้างห้องไป ผมคงมีชีวิตต่อ ฯ', 'ซาเอกิซัง', 275, 'https://cdn-local.mebmarket.com/meb/server1/175112/Thumbnail/book_detail_large.gif?5', 5),
(115, 'ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา', 'ไดสุเกะ ไอซาวะ', 159, 'https://www.phoenixnext.com/img/600/744/resize/catalog/product/_/l/_ln_kage_no_jitsuryoukusha_vol1_jacket_cover.jpg', 3),
(116, 'ดารายอดอัจฉริยะ', 'ชิโระ อุซาซากิ', 60, 'https://upload.wikimedia.org/wikipedia/en/d/db/Actageshonenjump.jpg', 4),
(117, 'สุดยอดมือสังหาร อวตารมาต่างโลก', 'Rui Tsukiyo', 70, 'https://cdn-local.mebmarket.com/meb/server1/154275/Thumbnail/book_detail_large.gif?2', 3.5),
(118, 'หนุ่มเย็บผ้ากับสาวนักคอสเพลย์', 'ชินอิจิ ฟูกูดะ', 120, 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Sono_Bisque_Doll_wa_Koi_wo_Suru%2C_Volume_1.jpg/220px-Sono_Bisque_Doll_wa_Koi_wo_Suru%2C_Volume_1.jpg', 4);

-- --------------------------------------------------------

--
-- Table structure for table `categorized`
--

CREATE TABLE `categorized` (
  `bookId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `userlevel` char(1) NOT NULL DEFAULT 'm',
  `valid` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `username`, `password`, `firstname`, `lastname`, `userlevel`, `valid`) VALUES
(5, 'Gay Lord', '123', '', '', 'm', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`bookId`);

--
-- Indexes for table `categorized`
--
ALTER TABLE `categorized`
  ADD PRIMARY KEY (`bookId`,`categoryId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `bookId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categorized`
--
ALTER TABLE `categorized`
  ADD CONSTRAINT `categorized_ibfk_1` FOREIGN KEY (`bookId`) REFERENCES `book` (`bookId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `categorized_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `category` (`categoryId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

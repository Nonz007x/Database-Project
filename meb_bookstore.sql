-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 13, 2023 at 02:21 PM
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
  `bookname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `author` varchar(50) NOT NULL,
  `cover` varchar(200) DEFAULT NULL,
  `rating` float NOT NULL,
  `date` datetime DEFAULT NULL,
  `synopsis` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci,
  `category` int(11) NOT NULL,
  `price` float NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`bookId`, `bookname`, `author`, `cover`, `rating`, `date`, `synopsis`, `category`, `price`) VALUES
(0, 'คุณอาเรียโต๊ะข้างๆพูดรัสเซียหวานใส่ซะหัวใจจะวาย เล่ม 1', 'ซันซันซัน', 'https://cdn-local.mebmarket.com/meb/server1/174544/Thumbnail/book_detail_large.gif?7', 0, '2023-03-01 03:28:19', 'คุณอาเรียโต๊ะข้างๆพูดรัสเซียหวานใส่ซะหัวใจจะวาย\nArya Sometimes Hides Her Feelings in Russian\nTokidoki Bosotto Russia-go de Dereru Tonari no Aalya-san\n\n\n“หา? พูดว่าไง?”\n“เปล่านี่? ก็แค่บอกว่า 【หมอนี่โง่จริงๆเลย】 แค่นั้นเอง”\n“เลิกด่าเป็นภาษารัสเซียได้มั้ย!?” คุณอารยา สาวสวยผมเงินไม่เป็นสองรองใครที่นั่งข้างผมผุดยิ้มกระหยิ่ม\n\n…แต่ความจริงมันไม่ใช่อย่างนั้น ภาษารัสเซียเมื่อกี้ เธอพูดว่า 【สนใจฉันหน่อย】 ต่างหาก!', 0, 249),
(1, 'คุณอาเรียโต๊ะข้างๆพูดรัสเซียหวานใส่ซะหัวใจจะวาย เล่ม 2', 'ซันซันซัน', 'https://cdn-local.mebmarket.com/meb/server1/184347/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:29:04', 'คุณอาเรียโต๊ะข้างๆพูดรัสเซียหวานใส่ซะหัวใจจะวาย\nArya Sometimes Hides Her Feelings in Russian\nTokidoki Bosotto Russia-go de Dereru Tonari no Aalya-san\n\n\n“ชะ...ชอบ? ชอบเหรอ เอ๊ะ? ไม่ใช่สักหน่อย ไม่ใช่น้าาาา～!”\n“ทำมาเป็น～ ‘ฉันจะเป็นกำลังให้เอง’ โอ๊ย～เรานี่มันน่าขนลุก สะเหล่อ!”\nจากเหตุการณ์ลับที่รู้กันสองคนซึ่งเกิดขึ้นในสวนโรงเรียนยามอาทิตย์อัสดง\nทั้งอาเรียและมาซาจิกะต่างกลุ้มใจกันทั้งคู่\nแต่ทั้งสองก็ได้สัญญาแล้วว่าจะจับคู่กันเพื่อลงชิงชัยในสนามเลือกตั้งประธานนักเรียน\n\nอาเรียและมาซาจิกะจึงเริ่มประชุมวางแผนเพื่อเผชิญหน้ากับสุโอ ยูกิ\nตัวเก็งผู้ลงสมัครเลือกตั้งประธานนักเรียนสมัยหน้า ซึ่งมีเสน่ห์ดึงดูดใจมหาศาล แต่ทว่า—\n“เอาละ...งั้นก็ เรื่องเลือกตั้งประธานน่ะนะ”\n“…Круто♡”\n‘อ๊อก!’ เสียงกระซิบหวานๆภาษารัสเซียทำเอาใจเต้นซะได้!?\nนึกว่าจะประณามหยาดเหยียดกัน แต่ดันหวานใส่เฉย\nเรื่องราวเลิฟคอเมดี้วัยใส\nกับนักเรียนสาวมัธยมปลายชาวรัสเซียผู้สวยเลิศเลอ\nที่ทำให้ต้องยิ้มแก้มปริ เล่ม 2!\n', 0, 269),
(2, 'SPY x FAMILY เล่ม 01', 'Tatsuya Endo', 'https://cdn-local.mebmarket.com/meb/server1/114476/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:30:30', 'สุดยอดสปาย <สนธยา> ได้รับคำสั่งให้สร้าง \"ครอบครัว\" เพื่อลอบเข้าไปในโรงเรียนชื่อดัง แต่ \"ลูกสาว\" ที่เขาได้พบ ดันเป็นผู้มีพลังจิตอ่านใจคน! \"ภรรยา\" เป็นมือสังหาร!?\nโฮมคอเมดี้สุดฮาของครอบครัวปลอมๆ ที่ต่างฝ่ายต่างปกปิดตัวจริงของกันและกัน ที่ต้องเผชิญหน้ากับการสอบเข้าและปกป้องโลก!!', 0, 69),
(3, 'ไอดอลสาวสุดปังกับผมแต่งงานกันในเกมออนไลน์ เล่ม 1', 'อาโบน', 'https://cdn-local.mebmarket.com/meb/server1/218293/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:32:05', 'อายาโนะโคจิ คาซึโตะ หนุ่มนักเรียนมัธยมปลายธรรมดาๆ มีภรรยาแล้ว แต่เธอก็เป็นแค่ภรรยาในเกมออนไลน์เท่านั้นและในวันนี้ พอได้เล่นเกมกับภรรยาในเกมออนไลน์คนนั้น…ก็พิสูจน์ได้ว่าเธอคือไอดอลชื่อดังผู้เป็นที่ใฝ่ฝัน “มิซึกิ รินกะ”! แถมคาซึโตะกับรินกะยังเป็นเพื่อนร่วมชั้นกันอีกด้วย ว่ากันว่า ไอดอลสาวควบตำแหน่งภรรยาในเกมออนไลน์\nซึ่งเรียนอยู่ห้องเดียวกันคนนี้ “เกลียดผู้ชาย” แต่เธอกลับพูดว่า “…หลังจากนี้ แม้แต่ในชีวิตจริงก็อยู่ด้วยกันได้แล้วนะ” และเริ่มทำตัวเป็นภรรยาของคาซึโตะกระทั่งในโลกความเป็นจริงด้วย!? ทั้งทำข้าวกล่องให้ และบางครั้งก็ยังหึงเพื่อน (หนุ่ม) ในเกมออนไลน์อีก…\n\nเลิฟคอเมดี้วัยรุ่นชวนหน้ามืดตามัว ที่ตีแผ่การใช้เวลากับ “ภรรยา” สุดคูลแต่คลั่งรัก!', 0, 250),
(4, 'ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา เล่ม 1', 'ไดสุเกะ ไอซาวะ', 'https://cdn-local.mebmarket.com/meb/server1/110815/Thumbnail/book_detail_large.gif?6', 0, '2023-03-01 03:33:43', 'ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา\nKage No Jitsuryokusha Ni Naritakute!\nThe Eminence in Shadow\n\nเด็กหนุ่ม ‘ซิด’ หลงใหลในการเป็นตัวละครลับที่แฝงตัวสำแดงพลังอยู่เบื้องหลัง หรือที่เรียกกันว่า ‘พลังในเงามืด’...หลังจากไปเกิดใหม่ที่ต่างโลก เขาพยายามทำตัวเป็นพลังในเงามืดที่คอยกำจัดลัทธิชั่วร้าย (ในจินตนาการ) ก่อนจะได้รู้ว่าลัทธินั้นดันมีอยู่จริง!? เรื่องราวซีเรียสปนกลิ่นกาวของกลุ่ม ‘ชาโดว์การ์เดน’ ภายใต้การนำของซิดจึงอุบัติขึ้นตั้งแต่วันนั้น—!!', 0, 289),
(5, 'ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา เล่ม 2', 'ไดสุเกะ ไอซาวะ', 'https://cdn-local.mebmarket.com/meb/server1/116070/Thumbnail/book_detail_large.gif?9', 0, '2023-03-01 03:35:20', 'ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา\nKage No Jitsuryokusha Ni Naritakute!\nThe Eminence in Shadow\n\nซิดถูกชวนไปร่วมอีเวนต์ บททดสอบของเทพธิดา\nณ ดินแดนศักดิ์สิทธิ์ลินด์วูร์ม\nกระทั่งได้พบกับ แม่มดแห่งภัยพิบัติ ออโรร่า\nซึ่งว่ากันว่าเป็นผู้ที่นำพาความโกลาหล\nและความหายนะมาสู่โลกเมื่อครั้งอดีตกาล\nเมื่อผู้ยิ่งใหญ่ทั้งสองโคจรมาพบกัน\nประตูสู่ เขตแดนศักดิ์สิทธิ์ จึงเปิดออก\nความจริงของ ปีศาจสิงสู่...เป้าหมายของ ลัทธิเดียโบลอส...\nอดีตของ วีรชนโอลิเวียร์...ค่อยๆเปิดเผย\nในขณะที่ซิดยังคงตั้งเป้าเป็น พลังในเงามืด ต่อไปโดยไม่รู้เรื่องอะไรเลย!!', 0, 289),
(6, 'เกิดใหม่เป็นลูกโอชิ 01', 'AKA AKASAKA, MENGO YOKOYARI', 'https://cdn-local.mebmarket.com/meb/server1/225615/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:37:57', '\"ในวงการนี้น่ะคำโกหกก็คืออาวุธนั่นแหละ\"\n\nโกโร่ ชายหนุ่มผู้ทำงาน\nเป็นสูตินารีแพทย์ในเมืองชนบท\nชั่วชีวิตไม่เคยข้องแวะกับวงการบันเทิง อีกด้านหนึ่ง\nโฮชิโนะ ไอ ไอดอลผู้เป็น \"โอชิ\" ของโกโร่\nก็กำลังขึ้นแท่นเป็นดาวดวงเด่นของวงการ\nการพานพบที่ \"เลวร้ายที่สุด\" ระหว่างทั้งสองคน\nทำให้ชะตากรรมค่อยๆ เริ่มเคลื่อนไหว...!?\n\nผลงานสะเทือนอารมณ์ที่บอกเล่าเรื่องราวใน \"วงการบันเทิง\" ผ่านมุมมองใหม่ของจากฝีมือสองนักเขียนมือทอง \"อากะ อาคาซากะ x เม็งโกะ โยโกยาริ\" บัดนี้เปิดม่านแล้ว!!', 0, 55),
(7, 'เกิดใหม่เป็นลูกโอชิ 02', 'AKA AKASAKA, MENGO YOKOYARI', 'https://cdn-local.mebmarket.com/meb/server1/225616/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:38:17', '\"ในวงการนี้น่ะคำโกหกก็คืออาวุธนั่นแหละ\"\n\nอควอกับรูบี้ฝาแฝดชายหญิงกลับมาเกิดใหม่เป็น \"ลูก ของโฮซึโนะ ไอ\nไอดอลที่พวกตัวเองตามหาโอชิอยู่โดยที่ยังมีความทรงจำในชาติก่อนครบถ้วน\nและเพลิดเพลินกับ \"ชีวิตในฐานะเด็กทารก\" เสียจนชุ่มปอด!\nทว่าช่วงเวลานั้นกลับต้องสิ้นสุดลงเมื่อไอถูกสตอล์กเกอร์ฆ่าตาย...\nและแล้วเมื่อเวลาผ่านไปจนคู่แฝดถึงวัยเข้าเรียนม.ปลาย ทั้งสองก็ตัดสินใจท้าชนกับ\n\"วงการบันเทิง\" โดยมีอควอมีเป้าหมายเพื่อ \"ล้างแค้น\" ในขณะที่รูบี้มีเป้าหมาย\nเพื่อให้ตนเองให้ \"เจิดจรัส\" ในวงการบันเทิง...!\n\nผลงานสะเทือนอารมณ์ที่บอกเล่าเรื่องราวใน \"วงการบันเทิง\" ผ่านมุมมองใหม่ของจากฝีมือสองนักเขียนมือทอง\n\"อากะ อาคาซากะ x เม็งโกะ โยโกยาริ\" บัดนี้มาถึงเล่ม 2 แล้ว!!', 0, 55),
(8, 'BLUE LOCK ขังดวลแข้ง เล่ม 1', 'MUNEYUKI KANESHIRO', 'https://cdn-local.mebmarket.com/meb/server1/100207/Thumbnail/book_detail_large.gif?3', 0, '2023-03-01 03:39:18', 'ขังดวลแข้ง\nBuru Rokku\nBLUELOCK\n\n\nการเป็นเบอร์ 1 ของโลกมันน่าจะเป็นความฝันไม่ใช่เหรอ!!\nสไตรเกอร์ที่เป็นพวกอีโก้อิซซึ่ม 300 คน ถูกพามารวมตัวกัน!!\n\nทีมชาติญี่ปุ่นตกรอบ 16 ทีมสุดท้ายฟุตบอลโลก 2018...สมาพันธ์ฟุตบอลญี่ปุ่นยอมรับเรื่องนี้และได้สร้าง “บลูล็อค” หอพักที่รวบรวมกองหน้าระดับ ม.ปลาย 300 คน มาเลี้ยงดูเพื่อพาทีมชาติญี่ปุ่นไปเป็นแชมป์ฟุตบอลโลก เอโกะ จินปาจิ ชายผู้ทําหน้าที่เป็นโค้ชประกาศอย่างชัดเจนว่าสิ่งที่จําเป็นสําหรับทีมชาติญี่ปุ่นคือ “ศูนย์หน้าที่เปี่ยมไปด้วยความทะนงตัว” พวกของ อิซางิ โยอิจิ ซึ่งเป็นกองหน้าที่ไร้ชื่อเสียงนั้นกําลังท้าทายกับการฝึกซ้อม เพื่อเปลี่ยนแปลงตัวเองให้กลายเป็นผู้เล่นที่ทะนงตัว โดยต้องกําจัดคู่แข่งไปพร้อมกัน!\n\nจงตายไปซะฟุตบอลญี่ปุ่น!\nเพื่อจะได้มีความฝันครั้งใหม่อีกครั้ง!!\n\n\nสารบัญ : BLUE LOCK ขังดวลแข้ง เล่ม 1\nตอนที่ 1 \"ความฝัน\"\nตอนที่ 2 \"เข้าหอพัก\"\nตอนที่ 3 \"สัตว์ประหลาด\"\nตอนที่ 4 \"ตอนนี้นี่แหละ\"', 0, 59),
(9, 'Kimetsu no Yaiba ดาบพิฆาตอสูร เล่ม 1', 'Koyoharu Gotouge', 'https://cdn-local.mebmarket.com/meb/server1/102020/Thumbnail/book_detail_large.gif?4', 0, '2023-03-01 03:40:39', 'ดาบพิฆาตอสูร เล่ม 1 - โศกนาฏกรรม\nKimetsu no Yaiba\nDemon Slayer\n\n\nเรื่องราวในยุคไทโช (1912-1926) ทันจิโร่เด็กหนุ่มขายถ่านผู้แสนอ่อนโยน วันหนึ่งครอบครัวของเขาถูกอสูรฆ่าตายเพื่อหาทางช่วยเนซึโกะ น้องสาวที่โดนเปลี่ยนเป็นอสูรให้กลับมาเป็นมนุษย์อีกครั้ง เขาจึงออกเดินทางเพื่อตามล่าอสูรที่ฆ่าครอบครัวของเขา การเดินทางของทันจิโร่และเนซึโกะ!! เรื่องราวการต่อสู้ท่ามกลางฝนเลือดได้เริ่มต้นขึ้นแล้ว!!\n\n\nสารบัญ : Kimetsu no Yaiba ดาบพิฆาตอสูร เล่ม 1\nตอนที่ 1 โศกนาฏกรรม\nตอนที่ 2 คนแปลกหน้า\nตอนที่ 3 จะกลับมาก่อนรุ่งอรุณ\nตอนที่ 4 บันทึกของทันจิโร่ บทต้น\nตอนที่ 5 บันทึกของทันจิโร่ บทท้าย\nตอนที่ 6 มือที่มากมาย\nตอนที่ 7 วิญญาณผู้ล่วงลับ', 0, 69),
(10, 'Kimetsu no Yaiba ดาบพิฆาตอสูร เล่ม 2', 'Koyoharu Gotouge', 'https://cdn-local.mebmarket.com/meb/server1/102022/Thumbnail/book_detail_large.gif?7', 0, '2023-03-01 03:41:05', 'ดาบพิฆาตอสูร เล่ม 2 - แกคือ\nKimetsu no Yaiba\nDemon Slayer\n\n\nการคัดเลือกเข้ากลุ่มพิฆาตอสูร ทันจิโร่ใช้เพลงดาบที่ร่ำเรียนจากอาจารย์อุโรโกะดาคิฟาดฟันอสูรที่มีรูปร่างประหลาดลงได้!! สุดท้ายแล้วเขาจะผ่านการคัดเลือกหรือไม่!? และทันจิโร่ที่เอาชีวิตรอดจนกลับมาหาอุโรโกะดาคิ และเนซึโกะที่เพิ่งลืมตาตื่นก็ต้องออกเดินทางไปยังเมืองหนึ่งที่มีหญิงสาวหายตัวไปทุกค่ำคืน...\n\n\nสารบัญ : Kimetsu no Yaiba ดาบพิฆาตอสูร เล่ม 2\nตอนที่ 8 พี่ฮะ\nตอนที่ 9 กลับมาแล้ว\nตอนที่ 10 บึงกินคน\nตอนที่ 11 มนตร์สะกด\nตอนที่ 12 บอกไม่ได้\nตอนที่ 13 แกคือ\nตอนที่ 14 ความโกรธเกรี้ยวของคิบุซึจิ\nตอนที่ 15 ความเห็นของหมอ\nตอนที่ 16 มาเล่นบอลกัน', 0, 69),
(11, 'Kimetsu no Yaiba ดาบพิฆาตอสูร เล่ม 3', 'Koyoharu Gotouge', 'https://cdn-local.mebmarket.com/meb/server1/102023/Thumbnail/book_detail_large.gif?7', 0, '2023-03-01 03:41:35', 'ดาบพิฆาตอสูร เล่ม 3 - ปลุกใจตนเอง\nKimetsu no Yaiba\nDemon Slayer\n\n\nอสูรสองตนที่ใช้ลูกบอลและลูกศรบอกว่า พวกตนคือ 12 จันทราอสูรที่อยู่ภายใต้บังคับบัญชาของคิบุซึจิ ปรากฏตัวต่อหน้าทันจิโร่และเนซึโกะ จำต้องประจันหน้ากับศัตรู โดยได้รับความช่วยเหลือจากทามาโยะและยูชิโร่!! พวกเขาจะเอาชนะและได้เบาะแสอะไรเกี่ยวกับคิบุซึจิหรือไม่!?\n\n\nสารบัญ : Kimetsu no Yaiba ดาบพิฆาตอสูร เล่ม 3\nตอนที่ 17 อสูรผู้ใช้ลูกศร\nตอนที่ 18 คำสาป\nตอนที่ 19 อยู่ด้วยกันตลอดไป\nตอนที่ 20 อางาซึมะ เซนอิทซึ\nตอนที่ 21 บ้านกลอง\nตอนที่ 22 หมูป่า\nตอนที่ 23 หมูป่าถอดเขี้ยวกับเซนอิทซึผู้หลับใหล\nตอนที่ 24 อดีต 12 จันทราอสูร\nตอนที่ 25 ปลุกใจตนเอง', 0, 69),
(12, 'Kimetsu no Yaiba ดาบพิฆาตอสูร เล่ม 4', 'Koyoharu Gotouge', 'https://cdn-local.mebmarket.com/meb/server1/102024/Thumbnail/book_detail_large.gif?7', 0, '2023-03-01 03:41:52', 'ดาบพิฆาตอสูร เล่ม 4 - ดาบที่แข็งแกร่ง\r\nKimetsu no Yaiba\r\nDemon Slayer\r\n\r\n\r\nทันจิโร่ที่ออกมาจากบ้านของอสูรเจออางาซึมะ เซนอิทซึ กำลังโดนเด็กหนุ่มหัวหมูป่าทุบตีอยู่ฝ่ายเดียว ทันจิโร่เข้าไปห้ามปรามเด็กหนุ่มคนนั้นแต่...!? และหลังจากพักรักษาตัว พวกทันจิโร่ก็ได้รับคำสั่งด่วนจากกลุ่มพิฆาตอสูรให้มุ่งหน้าไปยังภูเขาที่น่าขนลุก!! สิ่งที่ซ่อนตัวอยู่ที่นั่นคือ...!?\r\n\r\n\r\nสารบัญ : Kimetsu no Yaiba ดาบพิฆาตอสูร เล่ม 4\r\nตอนที่ 26 ทะเลาะต่อยตี\r\nตอนที่ 27 ฮาชิบิระ อิโนะสุเกะ\r\nตอนที่ 28 เรียกตัวด่วน\r\nตอนที่ 29 เขานาตะงุโมะ\r\nตอนที่ 30 หุ่นเชิด\r\nตอนที่ 31 ผลักดันใครสักคนที่ไม่ใช่ตนเอง\r\nตอนที่ 32 กลิ่นฉุน\r\nตอนที่ 33 ล้มลุกคลุกคลานก้าวต่อไป\r\nตอนที่ 34 ดาบที่แข็งแกร่ง', 0, 69),
(13, 'HELL MODE อยากเล่นโหด ขอโหมดนรก เล่ม 1', 'HAMUO', 'https://cdn-local.mebmarket.com/meb/server1/191387/Thumbnail/book_detail_large.gif?3', 0, '2023-03-01 03:43:13', 'เรื่องราวของยามาดะ เคนอิจิ ผู้ชื่นชอบเกมที่ต้องทุ่มเทเวลาและความอุตสาหะเพื่อเลี้ยงตัวละครให้เก่งกาจ\nแต่เกมใหม่ๆทุกวันนี้กลับมีแต่เกมสายชิล ไม่ต้องใช้เวลาหรือความพยายามอะไรมากก็เทพได้อย่างง่ายดาย\nเขาผิดหวังมากจนกระทั่งได้พบกับเกมออนไลน์ปริศนาซึ่งไม่มีแม้กระทั่งชื่อ\nจากระดับความยากทั้งหมด เขาเลือก ‘เฮลโหมด’ ความยากระดับนรกอย่างไม่ลังเล แล้วก็ได้ไปเกิดใหม่ที่ต่างโลกในฐานะชาวนาผู้ยากไร้ ต้องใช้ชีวิตลำเค็ญ จะอัปเลเวลก็ลำบากกว่าชาวบ้านและยากนรกอย่างสาแก่ใจ ขอเลือกใหม่ตอนนี้ทันไหมเนี่ย!?\nเขาจะไต่เต้าจนได้เป็น \'นักอัญเชิญ\' ซึ่งเป็นเป้าหมายสูงสุดได้หรือไม่!?\nเรื่องนี้คงต้องใช้เวลาทั้งชีวิตตามติดไปยาวๆ', 0, 269),
(14, 'สกิลโกงไร้เทียมทาน สร้างตำนานในสองโลก 1', 'มิคุ', 'https://cdn-local.mebmarket.com/meb/server1/148636/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:44:21', 'เท็นโจ ยูยะ เป็นเด็กหนุ่มที่ถูกกลั่นแกล้งอย่างทารุณมาตั้งแต่วัยเด็ก แต่อยู่มาวันหนึ่ง ‘ประตูสู่ต่างโลก’ ก็ปรากฏขึ้นต่อหน้าเขาที่กำลังสิ้นหวัง! อีกฟากของประตูนั้นคือ ‘เขตแดนปีศาจ’ ที่มีปีศาจน่ากลัวอาศัยอยู่—\nยูยะได้รับสกิลสุดโกงจากการเป็นผู้มาเยือนต่างโลกครั้งแรก เขาปราบเหล่าปีศาจและอัปเลเวลไปเรื่อยๆ…จนกระทั่งกลายเป็นเด็กหนุ่มไร้พ่ายผู้มีสมรรถภาพทางกายสุดแกร่ง!\nยูยะที่กลายเป็นคนใหม่ช่วยองค์หญิงในต่างโลกจากเงื้อมมือของปีศาจจนกลายเป็นข่าวลือแพร่สะพัดไปทั่วอาณาจักร แถมในโลกปัจจุบันก็เริ่มถูกสาวๆรุกเข้าหาอย่างร้อนแรงอีกด้วย…?\nเรื่องราว ของเด็กหนุ่มผู้อัปเลเวลจนไร้เทียมทานในทั้งสองโลกเปิดฉากขึ้นแล้ว!', 0, 259),
(15, 'สุดยอดมือสังหาร อวตารมาต่างโลก 1', 'รุย สึกิโยะ', 'https://cdn-local.mebmarket.com/meb/server1/154275/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:45:13', 'สุดยอดมือสังหาร อวตารมาต่างโลก\nSekai Saiko No Ansatsusha, Isekai Kizoku Ni Tensei Suru\nThe world\'s best assassin, To reincarnate in a different world aristocrat\n\nนักฆ่ามือหนึ่งของโลกมาเกิดใหม่เป็นบุตรชายคนโตของตระกูลขุนนางนักฆ่า ภารกิจที่เขาได้รับมอบหมายเมื่อมายังต่างโลกมีเพียงหนึ่งเดียว ‘สังหาร ‘ผู้ผิดแผก (ผู้กล้า)’ ที่มีคำทำนายว่าจะนำมหันตภัยมาสู่มนุษย์’ เพื่อปฏิบัติหน้าที่แสนสำคัญนี้ให้ลุล่วง เขาจึงออกปฏิบัติการในต่างโลกไปพร้อมกับเหล่าผู้ติดตามแสนสวย\nด้วยความรู้ที่กว้างขวางและประสบการณ์โชกโชนในการลอบสังหาร ประกอบกับวิชาลับและเวทมนตร์ของตระกูลนักฆ่าที่ว่ากันว่าแกร่งที่สุดในต่างโลก เขาจึงค่อยๆเติบโตขึ้นเป็นนักฆ่าแห่งยุค—\n“น่าสนุก ไม่นึกเลยว่าเกิดใหม่แล้วก็ยังต้องฆ่าคนอีก”\n‘นักฆ่าในตำนาน’ ผู้กลับมาเกิดใหม่จะทะยานขึ้นสู่ความสุดยอดยิ่งกว่าเก่า!\nเรื่องราวแฟนตาซีของนักฆ่าผู้ก้าวข้ามทุกขีดจำกัด!!', 0, 269),
(16, 'สุดยอดมือสังหาร อวตารมาต่างโลก 2', 'รุย สึกิโยะ', 'https://cdn-local.mebmarket.com/meb/server1/160969/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:46:57', 'ลูกก์ขับไล่ชายผู้มีพลังเวทเหนือจินตนาการไปได้ด้วยไม้ตายวิชาสังหารจากโลกปัจจุบัน และแล้วข่าวการถือกำเนิดของ ‘ผู้กล้า’ ซึ่งเป็นเป้าหมายก็ส่งมาถึงเขาจนได้ ผู้กล้ามีกำหนดจะเข้าเรียนในโรงเรียนอัศวินหลวง ซึ่งเป็นแหล่งรวมยอดฝีมือทั่วอาณาจักร เขาจึงเข้าสอบพร้อมกับเดียและทาร์ต แม้จะเป็นที่จับตามองจากสาธารณชนด้วยความแข็งแกร่งและสติปัญญาอันเหนือชั้น ขนาดยังไม่ได้ใช้ท่าไม้ตายก็ยังไม่มีใครเทียบได้ หรือต้องเผชิญหน้ากับ ‘สัตว์ประหลาด (ผู้กล้า)’ ผู้ได้ชื่อว่าแข็งแกร่งไม่เป็นสองรองใคร นักฆ่าผู้นี้ก็ยังคงเยือกเย็น—\n\n“ถ้าเป็นเพื่อนกันก็จะลอบสังหารได้ง่ายขึ้น จะล้วงความลับให้หมดเปลือกเลย”\n\n‘นักฆ่าในตำนาน’ ที่กลับชาติมาเกิดใหม่ แม้อยู่ในโรงเรียนที่เต็มไปด้วยหัวกะทิแล้วก็ยังไม่เป็นรองใคร! เรื่องราวแฟนตาซีนักฆ่าที่ทั้งแกร่ง x ไร้เทียมทาน องก์ที่ 2 เปิดฉากแล้ว!!', 0, 269),
(17, 'โนเกม โนไลฟ์ (NO GAME NO LIFE) เล่ม 1', 'ยู คามิยะ', 'https://cdn-local.mebmarket.com/meb/server1/157909/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:48:16', 'โซระและชิโระเป็นสองพี่น้องที่เล่นเกมเก่งระดับเทพ แต่ก็เป็นนีทและฮิคิโคโมริด้วย วันหนึ่งพวกเขาถูกเชิญไปที่โลกต่างมิติ ที่นั่นเป็นโลกที่ตัดสินทุกอย่างด้วยเกม ไม่ว่าจะเป็นอาหาร เงินทอง หรือแม้แต่เขตแดนประเทศ!\n\nแม้จะเป็นคนไม่ได้เรื่องในความเป็นจริง แต่สองพี่น้องจะช่วยเผ่ามนุษย์ในต่างโลกให้รอดพ้นจากวิกฤติได้หรือไม่?\n\nเอาล่ะ มาเริ่มเกมกันเถอะ!', 0, 150),
(18, 'โนเกม โนไลฟ์ (NO GAME NO LIFE) เล่ม 2', 'ยู คามิยะ', 'https://cdn-local.mebmarket.com/meb/server1/157910/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:48:37', 'หลังจากช่วยเผ่ามนุษย์ที่กำลังจะล่มสลาย โซระกับชิโระก็กลายเป็นราชากับราชินีแห่งอิมานิตี้ ทั้งสองเริ่มเก็บรวบรวมข้อมูลของเผ่าต่างๆ ด้วยการท้าสู้กับคนของเผ่าปีกสวรรค์ผู้รอบรู้ในเมืองเอลเคีย และไปท้าพนันกับเผ่าครึ่งคนครึ่งสัตว์จากประเทศพันธมิตรตะวันออก เพื่อชิงดินแดนที่เคยเป็นของเผ่ามนุษย์กลับคืนมา!!\n\nเอาล่ะ มายึดครองอาณาจักรสาวน้อยหูสัตว์กันเถอะ!', 0, 150),
(19, 'โนเกม โนไลฟ์ (NO GAME NO LIFE) เล่ม 3', 'ยู คามิยะ', 'https://cdn-local.mebmarket.com/meb/server1/157911/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:48:54', 'ณ ‘ดิสบอร์ด’ โลกที่ทุกสิ่งตัดสินด้วยเกม สองพี่น้องเกมเมอร์อัจฉริยะจากต่างโลก ได้กลายเป็นราชาของเผ่ามนุษย์ และเริ่มเล่นเกมเพื่อฟื้นจากสภาพสิ้นหวัง\nโดยเดิมพันทุกสิ่งทุกอย่างบนแผ่นดินใหญ่ของประเทศอันดับสาม ‘พันธมิตรตะวันออก’ ด้วย ‘สิทธิทั้งหมดของเผ่ามนุษย์’ ทว่า หลังจากนั้นโซระกลับหายไปโดยทิ้งคำพูดปริศนาไว้—\n\n...เกมเมอร์สองคนรวมเป็นหนึ่ง ‘ (คูฮะคุ)’ ถูกแยกจากกัน\nเจตนาของโซระที่หายไป ชิโระที่ถูกทิ้งไว้ ชะตากรรมของมนุษย์นั้น!\nและหนทางของสวนสวรรค์ล่ะ—!?\n\n“บอกไปแล้วนี่ว่า ‘เชคเมท’ ไงล่ะพวกแกน่ะ...ถึงทางตันแล้ว” สู่ผลตัดสินของศึกเวอร์บีสต์\n\n—แผนการอันตรายราวกับเดินบนแผ่นน้ำแข็งบางๆ เริ่มเป็นรูปเป็นร่าง แฟนตาซีต่างโลกชื่อดังเล่มที่สาม!', 0, 150),
(20, 'โนเกม โนไลฟ์ (NO GAME NO LIFE) เล่ม 4', 'ยู คามิยะ', 'https://cdn-local.mebmarket.com/meb/server1/157912/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:49:18', '‘ดิสบอร์ด’ โลกที่ทุกสิ่งตัดสินด้วยเกม เปิดศึกกับศัตรูที่ใช้ทั้งเวทมนตร์และพลังพิเศษอย่างต่อเนื่อง แต่สองพี่น้องเกมเมอร์ก็ยังคงไร้พ่าย ทว่า ความจริงแล้วเกมที่ทั้งสองไม่สามารถเคลียได้ก็ยังมีอยู่‘สองชนิด’และผู้ที่มาหาทั้งสองซึ่งพักผ่อนพันธมิตรตะวันออกก็คือ พลัม ซึ่งเป็นเผ่าปีศาจดูดเลือดแดมพีร์ โซระกับชิโระที่ต้องไปช่วยเผ่าพันธุ์ให้พ้นจากอันตราย\n\nทว่า เนื้อหาของเกมนั้นกลับเป็นหนึ่งในเกมที่ทั้งสองยังไม่สามารถเคลียร์ได้\n‘เกมความรักของจริง’ นั้นเองเวทีคือทะเลสีฟ้า!ดอกไม้แห่งความรักจะผลิบานหรือไม่!\n\nคราวนี้จะดำเนินไปอย่างเบาๆ เป็นแฟนตาซีต่างโลกแบบเบาๆ เล่มสี่......?!', 0, 150),
(21, 'ซ่อนคมเวทเจ็ดดาบมาร เล่ม 1', 'โบคุโตะ อุโนะ', 'https://cdn-local.mebmarket.com/meb/server1/116092/Thumbnail/book_detail_large.gif?5', 0, '2023-03-01 03:50:24', 'ฤดูใบไม้ผลิ—ปีนี้เองเหล่านักเรียนใหม่ก็ได้เดินทางมายังคิมเบอร์ลี่โรงเรียนเวทมนตร์ชื่อดัง พวกเขาสวมชุดคลุมสีดำ ไม้กายสิทธิ์หนึ่งด้ามและไม้เท้าซ่อนดาบหนึ่งเล่มที่ข้างเอว พร้อมกับความภาคภูมิและภารกิจที่เก็บไว้ในใจ สิ่งที่รอต้อนรับเหล่าผู้ใช้เวทมนตร์ฝึกหัดอยู่ก็คือฟลาวเวอร์โร้ดที่มีซากุระล่องลอยและขบวนพาเหรดสัตว์เวทมนตร์\nทว่าตื่นเต้นดีใจไปกับความหวังได้เพียงไม่นาน ภัยอันตรายหลากหลายที่แทรกซึมอยู่ทั่วคิมเบอร์ลี่ก็จู่โจมพวกเขา เขาวงกตใต้ดินที่ดูดกลืนนักเรียนเข้าไปตามใจชอบ เหล่านักเรียนชั้นปีสูงที่ราวกับสัตว์ประหลาด การปะทะกันของสองฝ่ายเกี่ยวกับสิทธิมนุษยชนของอมนุษย์—\nเพื่อเอาชีวิตรอดไปพร้อมกับผองเพื่อนภายใต้สภาพแวดล้อมที่อันตรายนั้น โอลิเวอร์ได้สานสัมพันธ์กับเด็กสาวคนหนึ่ง ซามูไรสาวผู้มาพร้อมกับดาบญี่ปุ่นที่ข้างเอว—นานาโอะ\nเรื่องราวเกี่ยวกับดาบมารทั้งสอง ได้เริ่มขึ้นแล้ว ณ บัดนี้', 0, 309),
(22, 'ซ่อนคมเวทเจ็ดดาบมาร เล่ม 2', 'โบคุโตะ อุโนะ', 'https://cdn-local.mebmarket.com/meb/server1/124121/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:51:07', 'เมื่อเหตุการณ์ที่เกิดขึ้นในโรงเรียนคลี่คลายลง นานาโอะกับโอลิเวอร์จึงถูกจับตามอง\nทว่านั่นกลับกลายเป็นการจุดไฟให้กับเกียรติยศและความทะเยอทะยานของเหล่าเพื่อนร่วมชั้น\nที่ทุ่มเทให้กับการฝึกฝนเรียนรู้ในฐานะผู้ใช้เวทมนตร์ ใครแข็งแกร่งที่สุดในหมู่นักเรียนชั้นปีที่ 1\nการต่อสู้อย่างไร้กฎเกณฑ์เพื่อแย่งชิงเหรียญของกันและกันจึงเปิดฉากขึ้นเพื่อหาข้อสรุปให้กับคำถามนั้น\nเหล่าผู้กล้าคนเก่งทยอยกันเสนอตัวเพื่อหวังจะล้มนานาโอะกับโอลิเวอร์\nและยังมีใครอีกคนที่เริ่มเคลื่อนไหวเพื่อใช้ประโยชน์จากโอกาสนี้—\nหากท่ามกลางสถานการณ์อันน่าตื่นเต้น ความเปลี่ยนแปลงครั้งใหญ่ก็เข้าจู่โจมพีท\nความลับที่ถูกซ่อนไว้ในร่างกายของเขาถูกเปิดเผย\nศักยภาพแห่งความเป็นไปได้มากมายเกิดขึ้นกับเด็กหนุ่ม ทว่า—\nดาบมารแห่งพรหมลิขิต เวทมนตร์ชั้นสูง x ศิลปะการต่อสู้ด้วยดาบ\nเปิดม่านแบทเทิลแฟนตาซีครั้งที่ 2!', 0, 269),
(23, 'ขาดคุณนางฟ้าข้างห้องไป ผมคงมีชีวิตต่อไปไม่ได้อีกแล้ว เล่ม 1', 'ซาเอกิซัง', 'https://cdn-local.mebmarket.com/meb/server1/175112/Thumbnail/book_detail_large.gif?5', 0, '2023-03-01 03:51:54', 'ขาดคุณนางฟ้าข้างห้องไป ผมคงมีชีวิตต่อไปไม่ได้อีกแล้ว\nOtonari no Tenshi-sama ni Itsu no Ma ni ka Dame Ningen ni Sareteita Ken\nThe Angel Next Door Spoils Me Rotten\n\n\nคนข้างห้องในแมนชั่นที่ฟุจิมิยะ อามาเนะอาศัยอยู่ตอนนี้คือสาวงามอันดับหนึ่งของโรงเรียน ชิอินะ มาฮิรุ พวกเขาทั้งสองไม่มีความเกี่ยวข้องอะไรกันเลยแต่นับจากวันที่เขายื่นร่มให้เธอซึ่งเปียกปอนจากสายฝน ความสัมพันธ์ที่ไม่มีชื่อเรียกก็เริ่มต้นขึ้น มาฮิรุคอยมาทำอาหาร และช่วยดูแลเรื่องต่างๆ โดยไม่สามารถวางใจให้อามาเนะใช้ชีวิตเรื่อยเปื่อยตามลำพัง เธอและเขาต่างค่อยๆ เปิดใจให้แก่กัน แม้จะไม่ใช่หนทางที่ซื่อตรงนัก แต่ระยะห่างของทั้งสองก็ค่อยๆ ลดลงทีละน้อย…\n\nเรื่องราวความรักแสนหวาน กับคนข้างห้องสุดน่ารักที่ชวนให้ใจเต้นตึกตึก', 0, 250),
(24, 'ขาดคุณนางฟ้าข้างห้องไป ผมคงมีชีวิตต่อไปไม่ได้อีกแล้ว เล่ม 2', 'ซาเอกิซัง', 'https://cdn-local.mebmarket.com/meb/server1/191970/Thumbnail/book_detail_large.gif?9', 0, '2023-03-01 03:52:30', 'ขาดคุณนางฟ้าข้างห้องไป ผมคงมีชีวิตต่อไปไม่ได้อีกแล้ว\nOtonari no Tenshi-sama ni Itsu no Ma ni ka Dame Ningen ni Sareteita Ken\nThe Angel Next Door Spoils Me Rotten\n\n\nอามาเนะที่อาศัยอยู่ตัวคนเดียวและใช้ชีวิตแบบไม่ดูแลตัวเอง กับสาวงามที่สุดในโรงเรียนผู้มีฉายา “ท่านนางฟ้า” มาฮิรุ ทั้งสองคนที่ไม่เกี่ยวข้องกันนั้นอยู่ดีๆ ก็ได้มาสานสัมพันธ์กันโดยไม่ตั้งใจ\n\nทั้งมาทานอาหารร่วมกัน อยู่ด้วยกันในวันส่งท้ายปี ไปวัดครั้งแรกของปีใหม่ และพบเจอความวุ่นวายของวาเลนไทน์ด้วยกัน แม้มาฮิรุจะยังเคอะเขิน แต่ท่าทีของอามาเนะ รวมถึงความสัมพันธ์ที่เธอมีต่อคนรอบตัวของอามาเนะ\nก็ทำให้หัวใจอันเย็นชาของมาฮิรุค่อยๆ หลอมละลาย\n\nเรื่องราวความรักอันแสนหวานและร้อนรุ่มกับเพื่อนบ้านที่น่ารักและสบายๆ เล่ม 2', 0, 250),
(25, '86 -เอทตี้ซิกซ์- เล่ม 1', 'อาซาโตะ อาซาโตะ', 'https://cdn-local.mebmarket.com/meb/server1/96859/Thumbnail/book_detail_large.gif?6', 0, '2023-03-01 03:53:22', '86 -เอทตี้ซิกซ์\n86 -Eighty Six-\n\n86 -เอทตี้ซิกซ์-\nสาธารณรัฐซันแมกโนเลียถูก ‘จักรวรรดิ’ ซึ่งเป็นดินแดนข้างเคียงส่งจักรกลรบไร้พลขับ ‘ลีเจี้ยน’ เข้ามารุกรานไม่เว้นแต่ละวัน สาธารณรัฐจึงคิดค้นอาวุธรูปแบบเดียวกันขึ้นเพื่อการตอบโต้ และในที่สุดก็สามารถขับไล่ภัยคุกคามสิ้นไปโดยไม่มีผู้ใดต้องสละชีพ\nใช่―เพียงเปลือกนอก\nความจริงแล้วหาใช่ปราศจากการหลั่งเลือดเนื้อ ‘เขต86ไร้ซึ่งตัวตน’ ตั้งอยู่นอก85เขตของสาธารณรัฐ ทุกวันคืน เหล่าหนุ่มสาวอันถูกตีตรา ‘เอทตี้ซิกซ์’ ได้เข้าต่อสู้ในฐานะ ‘จักรกลมีพลขับ’ ตลอดมา―\nเด็กหนุ่มนามว่าชิน ผู้นำเหล่าหนุ่มสาวเข้าสู่ดินแดนแห่งความตาย และเด็กสาวนามเรน่า ผู้เป็นแฮนด์เลอร์-ผู้บังคับบัญชาการ ออกคำสั่งพวกเขาผ่านการสื่อสารพิเศษจากแนวหลังอันห่างไกล เรื่องราวของทั้งสอง...การต่อสู้ซึ่งเป็นโศกนาฏกรรมแสนทารุณและจากลานับนิรันดร์เริ่มต้นขึ้นแล้ว―!\n\nผลงานชิ้นเอก เจ้าของรางวัลเกียรติยศ ‘รางวัลชนะเลิศ’ การประกวดเด็งเกคิโนเวลไพร์ซครั้งที่ 23 เดินหน้าเข้าประจัญบานอย่างสมศักดิ์ศรี!', 0, 259),
(26, '86 -เอทตี้ซิกซ์- เล่ม 2', 'อาซาโตะ อาซาโตะ', 'https://cdn-local.mebmarket.com/meb/server1/96860/Thumbnail/book_detail_large.gif?5', 0, '2023-03-01 03:53:48', '86 -เอทตี้ซิกซ์\n86 -Eighty Six-\n\nหลังการลาจากอย่างกะทันหันกับเลน่าผู้เป็นแฮนด์เลอร์ของสาธารณรัฐ\nเหล่า ‘เอทตี้ซิกซ์’ ทุกคนที่ดั้นด้นมาถึงประเทศเพื่อนบ้านอย่างสหพันธรัฐเกียเด\nได้รับการคุ้มครองและพบกับช่วงเวลาอันสงบสุขชั่วระยะหนึ่ง\nทว่า—พวกเขาเลือกหวนคืนสู่สนามรบ\nเสนอตัวให้กองทัพสหพันธรัฐเพื่อกลับมายืนที่แนวหน้าสุดของขุมนรกอีกครั้ง\nพวกเขาต่อกรกับการจู่โจมอันหนักหน่วงของ ‘ลีเจี้ยน’ ที่รู้ล่วงหน้าโดย ‘ความสามารถ’ ของชินอย่างไม่หยุดหย่อน\nพร้อมด้วยพรรคพวกคนใหม่นาม ‘เฟรเดอริกา โรเซนฟอลต์’ สาวน้อยผู้อ่อนวัยยิ่งกว่าพวกตน\nเหตุใดพวกเขาจึงต่อสู้ และหนทางใดจะสามารถปัดเป่าภัยคุกคามของ ‘ลีเจี้ยน’ ที่กำลังคืบใกล้เข้ามา—?\n\nพบกับศึกที่ 2 แห่งเกียรติภูมิ ‘รางวัลชนะเลิศ’ การประกวดเด็งเกคิโนเวลไพร์ซครั้งที่ 23!\nจุดเริ่มต้นของ ‘ภาคสหพันธรัฐเกียเด’\nเรื่องราวนับแต่การจากลาของชินและเลน่าสู่การพบพานแห่งปาฏิหาริย์!\n\n—เมื่อยมทูตถูกเชื้อเชิญสู่สถานที่ของตน—', 0, 249),
(27, 'CHAIN SAW MAN เล่ม 01', 'Tatsuki Fujimoto', 'https://cdn-local.mebmarket.com/meb/server1/114703/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:54:48', 'CHAIN SAW MAN เล่ม 01 - สุนัขกับเลื่อยยนต์\n\nเชนซอว์แมน\nChenso Man\nChainsaw Man\n\n\nเด็นจิเด็กหนุ่มที่จนกรอบยิ่งกว่ากรอบโดนจิกหัวใช้ในฐานะนักล่าปิศาจร่วมกับปิศาจโปจิตะ ชีวิตในแต่ละวันที่ย่ำแย่ต่ำเตี้ยติดดินเปลี่ยนไปในพริบตาจากการทรยศที่แสนโหดร้าย!! เรื่องแอ็กชันของฮีโร่สายดาร์กสมัยใหม่ ผู้ให้ปิศาจสิงสู่ร่าง ล่าล้างปิศาจ เปิดฉาก!\n\n\nสารบัญ : CHAIN SAW MAN เล่ม 01\nบทที่ 1 สุนัขกับเลื่อยยนต์\nบทที่ 2 โปจิตะไปไหน\nบทที่ 3 มาถึงโตเกียว\nบทที่ 4 พาวเวอร์\nบทที่ 5 หาทางจับหน้าอก\nบทที่ 6 ใช้งาน\nบทที่ 7 น้องเหมียวไปไหน\n', 0, 69),
(28, 'CHAIN SAW MAN เล่ม 02', 'Tatsuki Fujimoto', 'https://cdn-local.mebmarket.com/meb/server1/114704/Thumbnail/book_detail_large.gif?2', 0, '2023-03-01 03:55:21', 'เชนซอว์แมน\nChenso Man\nChainsaw Man\n\n\n\"จับหน้าอก!!\"\n\nเด็นจิต่อสู้กับปิศาจค้างคาวอย่างดุเดือด โดยมีกิเลสอันท่วมท้นเป็นพลังขับเคลื่อน!! และผลของศึก...เขาก็ได้จับหน้าอก!? หรือไม่ได้...!? แล้วยัง \"ปิศาจปืน\" ศัตรูของมนุษยชาติที่มาคิมะพูดถึงอีก!? การต่อสู้ของเด็นจิ สุนัขรับใช้ของนักล่าปิศาจของทางการดำเนินไปในด้านใหม่!!\n\n\nสารบัญ : CHAIN SAW MAN เล่ม 02\nบทที่ 8 เลื่อยยนต์ VS ค้างคาว\nบทที่ 9 ช่วยเหลือ\nบทที่ 10 ค่ง\nบทที่ 11 ประนีประนอม\nบทที่ 12 จับหน้าอก\nบทที่ 13 ปิศาจปืน', 0, 69),
(29, 'หนุ่มเย็บผ้ากับสาวนักคอสเพลย์ เล่ม 1', 'Tatsuki Fujimoto', 'https://cdn1.mangaqube.com/EKN7CLL7V0Q2N1QU_l', 0, '2023-03-01 03:58:02', 'ความสัมพันธ์ลับๆกับสาวแกลตัวแม่ของคลาสเรียน...? คิตะกาวะ มาริน สาวแกลสุดสวยที่มักจะเป็นศูนย์กลางในกลุ่มเพื่อนเสมอ โกะโจ วากานะ ซึ่งเป็นเพื่อนร่วมคลาสนั้นคิดว่าเธอเป็น \"คนที่อยู่กันคนละโลก\" กับเขา ขณะที่วากานะซึ่งตั้งเป้าหมายจะเป็นช่างปั้นหน้าตุ๊กตาฮินะกำลังใช้ห้องปฏิบัติการหัตถกรรมในการทำงานนั้นเอง ผู้ที่โผล่เข้ามาในห้อง...คือคนที่คาดไม่ถึง!? \"ช่วยทำชุดคอสเพลย์ให้ฉันทีได้ไหม...!?\" คอสเพลย์สคูลไลฟ์ที่เต็มไปด้วยเรื่องชวนใจเต้น เริ่มแล้วจ้า!!', 0, 77),
(30, 'เกิดชาตินี้พี่ต้องเทพ เล่ม 1 - (Mushoku Tensei)', 'Rifujin na Magonote', 'https://cdn-local.mebmarket.com/meb/server1/92885/Thumbnail/book_detail_large.gif?5', 0, '2023-03-01 04:00:39', '\"หนุ่มว่างงานอายุ 34 ปีที่เกาะพ่อแม่กินไปวัน ๆ เมื่อพ่อแม่จากไป พี่น้องก็ทนไม่ไหวไล่ตะเพิดเขาออกจากบ้าน ขณะกำลังสิ้นหวังและนึกเสียใจ เขาก็ถูกรถบรรทุกชนตาย...\n\nทว่าเมื่อลืมตาตื่นขึ้นอีกครั้ง ก็พบว่าตัวเองเกิดใหม่ในโลกต่างมิติแห่งดาบและเวทมนตร์ !? แม้ช่วงแรกจะรู้สึกสับสน แต่เขาก็ตัดสินใจใช้ความรู้และประสบการณ์ที่หลงเหลือจากชาติที่แล้ว...เพื่อเริ่มชีวิตใหม่ให้เป็นผู้เป็นคน !\n\nนิยายแฟนตาซีแนวกลับชาติมาเกิดใหม่เพื่อแก้ไขชีวิตให้เป็นดั่งใจหวัง ได้เปิดฉากขึ้นแล้ว!\"', 0, 259),
(31, 'เกิดชาตินี้พี่ต้องเทพ เล่ม 2 - (Mushoku Tensei)', 'Rifujin na Magonote', 'https://cdn-local.mebmarket.com/meb/server1/92886/Thumbnail/book_detail_large.gif?5', 0, '2023-03-01 04:01:01', '\"อดีตหนุ่มตกงานอายุ 34 ปี ผู้ได้กลับชาติมาเกิดใหม่ในดินแดนแห่งเวทมนตร์และคมดาบ ในร่างเด็กชายนาม \'รูเดียส\"\"\nเพื่อเก็บเงินเข้าเรียนในมหาวิทยาลัยเวทมนตร์ เขาจึงรับมงานเป็นครูสอนหนังสือให้บุตรสารของตระกูลใหญ่ในโรอา เมืองใหญ่ที่สุด แห่งแคว้นฟีเตอร์ ทว่าเส้นทางแห่งความฝันนั้นไม่หอมหวาน เมื่อ \'เอริส\' คุณหนูคนงามกลับเป็น จอมอาละวาด รูเดียสตัดสินใจวางแผนบางอย่างเพื่อกำราบเธอ!? งานสอนพิเศษเสี่ยงตาย (?) จึงเริ่มขึ้น\nเล่ม 2 ของนิยายแฟนตาซีแนวกลับชาติมาเกิดใหม่เพื่อแก้ไขชีวิตให้เป็นดั่งใจหวังมาตามคำเรียกร้องแล้ว!!\"', 0, 259),
(32, 'เกิดชาตินี้พี่ต้องเทพ เล่ม 3 - (Mushoku Tensei)', 'Rifujin na Magonote', 'https://cdn-local.mebmarket.com/meb/server1/92887/Thumbnail/book_detail_large.gif?6', 0, '2023-03-01 04:01:48', '\"อดีตหนุ่มไร้งานวัย 34 ปี ผู้ได้กลับชาติมาเกิดใหม่ในดินแดนแห่งเวทมนตร์และคมดาบ ในร่างเด็กชายนาม ‘รูเดียส’\nหลังโดนลูกหลงจากภัยพิบัติทางเวทมนตร์ที่ไม่รู้สาเหตุ รูเดียสก็ลืมตาตื่นในดินแดนที่ตนไม่รู้จัก พร้อมกับเอริส ผู้เป็นคุณหนูและลูกศิษย์ ตอนนั้นเอง เขาสังเกตเห็นเงาร่างลึกลับที่อยู่ข้างๆ...ชายหนุ่มผิวขาวผู้มีเส้นผมสีเขียวมรกตและอัญมณีสีแดงตรงหน้าผาก นั่นคือ ‘เผ่าสเปิร์ด’ ที่ได้ชื่อว่าเป็นปีศาจน่าสะพรึงกลัว!!รูเดียสและเอริสถูกส่งมาอยู่ที่ไหน และจะเอาตัวรอดจากสถานการณ์นี้ได้อย่างไร!?\nเล่มที่ 3 ของนิยายแฟนตาซีแนวกลับชาติมาเกิดใหม่เพื่อแก้ไขช่วิตให้เป็นดั่งหวังมาแล้ว!\"', 0, 259),
(33, 'เกิดชาตินี้พี่ต้องเทพ เล่ม 4 - (Mushoku Tensei)', 'Rifujin na Magonote', 'https://cdn-local.mebmarket.com/meb/server1/92888/Thumbnail/book_detail_large.gif?5', 0, '2023-03-01 04:02:10', '\"หลังรอนแรมอยู่นานนับปี ในที่สุดรูเดียส เอริส และรุยเจิร์ดก็เดินทางมาถึง‘เวนพอร์ท’ อันเป็นเมืองท่าของทวีปปิศาจ แต่หากจะขึ้นเรือกลับไปยังทวีปกลาง พวกเขาต้องใช้เงินมหาศาล ระหว่างที่กำลังกลุ้มใจอยู่นั้นเอง รูเดียสก็ได้พบกับบุคคลที่ไม่คาดฝัน! พวกเขาจะฝ่าฟันอุปสรรคครั้งนี้ได้อย่างไร และกลับไปดินแดนของมนุษย์ได้สำเร็จหรือไม่!?\nเรื่องราวของชายหนุ่มวัย 34 ผู้ไม่เอาไหน ซึ่งกลับชาติมาเกิดใหม่ในโลกแห่งเวทมนตร์และคมดาบ มาถึงเล่มที่ 4 แล้ว!\"', 0, 259),
(34, 'Slime เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 01', 'Fuse , Mitz Vah', 'https://cdn-local.mebmarket.com/meb/server1/114030/Thumbnail/book_detail_large.gif?6', 3.33333, '2023-03-01 04:10:36', 'เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว\nTensei Shitara Slime Datta Ken\nRegarding Reincarnated to Slime\n\nทั้งที่คิดว่าตัวเองถูกคนร้ายแปลกหน้าแทงตายไปแล้วแต่กลับกลายเป็นว่าได้มาเกิดใหม่เป็นสไลม์ต่างโลกไปซะงั้น!? ความสามารถในการช่วงชิงความสามารถของศัตรู \"\"นักล่าเหยื่อ\"\" และความสามารถในการล่วงรู้หลักการของโลก \"\"มหาปราชญ์\"\" ด้วยความสามารถสุดพิเศษทั้งสองนี้เอง การผจญภัยครั้งยิ่งใหญ่ของสไลม์ตัวนี้จึงได้เริ่มต้นขึ้น !', 1, 180),
(35, 'Slime เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 02', 'Fuse , Mitz Vah', 'https://cdn-local.mebmarket.com/meb/server1/115803/Thumbnail/book_detail_large.gif?5', 0, '2023-03-01 04:05:36', 'เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว\nTensei Shitara Slime Datta Ken\nRegarding Reincarnated to Slime\n\nทั้งที่คิดว่าตัวเองถูกคนร้ายแปลกหน้าแทงตายไปแล้วแต่กลับกลายเป็นว่าได้มาเกิดใหม่เป็นสไลม์ต่างโลกไปซะงั้น!? ความสามารถในการช่วงชิงความสามารถของศัตรู \"นักล่าเหยื่อ\" และความสามารถในการล่วงรู้หลักการของโลก \"มหาปราชญ์\" ด้วยความสามารถสุดพิเศษทั้งสองนี้เอง การผจญภัยครั้งยิ่งใหญ่ของสไลม์ตัวนี้จึงได้เริ่มต้นขึ้น !', 0, 190),
(36, 'ขาดคุณนางฟ้าข้างห้องไป ผมคงมีชีวิตต่อไปไม่ได้อีกแล้ว เล่ม 3', 'ซาเอกิซัง', 'https://cdn-local.mebmarket.com/meb/server1/191971/Thumbnail/book_detail_large.gif?6', 3, '2023-03-01 04:06:22', 'ขาดคุณนางฟ้าข้างห้องไป ผมคงมีชีวิตต่อไปไม่ได้อีกแล้ว\nOtonari no Tenshi-sama ni Itsu no Ma ni ka Dame Ningen ni Sareteita Ken\nThe Angel Next Door Spoils Me Rotten\n\n\n“ทั้งที่ทุกคนสนิทกับอามาเนะคุงแท้ๆ แต่ดูเหมือนจะมีแค่ฉันคนเดียวที่อยู่นอกวงเลยค่ะ” เมื่อเลื่อนชั้นสู่ ม.5 อามาเนะกับมาฮิรุได้มาอยู่ห้องเดียวกัน ตรงกันข้ามกับมาฮิรุที่ค่อยๆ ลดระยะห่างเข้ามาแม้จะอยู่ที่โรงเรียน อามาเนะนั้นกลับรักษาระยะห่าง ไม่เข้าใกล้ “ท่านนางฟ้า” ขณะเฝ้ามองมาฮิรุที่ระยะห่างระหว่างเธอกับเพื่อนร่วมห้องค่อยๆ ลดลง\nเพราะความเฟรนด์ลี่ของจิโตเสะ อามาเนะก็ค่อยๆ หวนนึกถึงแผลเก่าที่เคยรักษาหายแล้ว...\n\nเรื่องราวความรักอันแสนหวานกับเพื่อนบ้านสุดน่ารัก ซึ่งได้รับการสนับสนุนอย่างมากบนเว็บได้มาถึงเล่มที่สามแล้ว', 0, 250),
(37, 'ขาดคุณนางฟ้าข้างห้องไป ผมคงมีชีวิตต่อไปไม่ได้อีกแล้ว เล่ม 4', 'ซาเอกิซัง', 'https://cdn-local.mebmarket.com/meb/server1/218299/Thumbnail/book_detail_large.gif?2', 4, '2023-03-01 04:06:47', 'ขาดคุณนางฟ้าข้างห้องไป ผมคงมีชีวิตต่อไปไม่ได้อีกแล้ว\nOtonari no Tenshi-sama ni Itsu no Ma ni ka Dame Ningen ni Sareteita Ken\nThe Angel Next Door Spoils Me Rotten\n\n“สำหรับฉันแล้ว...เขาคือคนที่สำคัญที่สุดค่ะ” ในห้องเรียนตกอยู่ในความอลหม่านทันทีที่มาฮิรุเอ่ยคำพูดทิ้งระเบิด อามาเนะซึ่งกำลังดิ้นรนเพื่อเข้าใจความรู้สึกของเธอ ตัดสินใจจะเป็นคนที่เหมาะสมเพื่อยืนเคียงข้างมาฮิรุ เขาตั้งใจเรียนไปพร้อม ๆ กับฝึกฝนร่างกาย เพื่อไล่ตามความเชื่อใจของมาฮิรุผู้หน้าตาดี ฉลาดเฉลียว ไร้ข้อเสียโดยสิ้นเชิง ไม่รู้ว่ามาฮิรุเข้าใจความรู้สึกของอามาเนะหรือไม่ แต่เธอเองก็มีความคิดจะก้าวไปสู่การตั้งใจเปลี่ยนแปลงความสัมพันธ์เช่นกัน—\n\nเรื่องราวความรักอันแสนหวานกับเพื่อนบ้านสุดน่ารัก ซึ่งได้รับการสนับสนุนอย่างมากบนเว็บ ได้มาถึงเล่มที่สี่แล้ว', 0, 250),
(38, 'มหาศึกคนชนเทพ 1 - Shumatsu no Walkure', 'อาจิจิกะ', 'https://cdn-local.mebmarket.com/meb/server1/112386/Thumbnail/book_detail_large.gif?4', 1, '2023-03-01 04:08:17', 'มหาศึกคนชนเทพ\nShumatsu no Walkure\nRecord Of Ragnarok\n\n\nแนว : การ์ตูนแอ็กชัน\n\n\nในที่สุดก็เจอศัตรูที่ทำให้ข้าต้องสู้แบบพลีกายถวายชีวิต!!\n\nใน ‘การประชุมชี้ชะตามนุษยชาติ’ ซึ่งจัดขึ้นบนสวรรค์พันปีครั้ง เหล่าทวยเทพต่างลงมติให้ล้างบางเผ่าพันธุ์มนุษย์ ทำให้ 13 คนที่แข็งแกร่งที่สุดในประวัติศาสตร์มนุษยชาติต้องลุกขึ้นต่อต้านมติที่ว่า โดยการเผชิญหน้ากับ 13 เทพที่แข็งแกร่งที่สุดในสวรรค์ สงครามที่เดิมพันด้วยความเป็นความตายของมนุษย์กำลังจะเริ่มต้นขึ้น ณ บัดนี้—!!!\n\nเหล่าทวยเทพ VS ยอดคนและยอดนักรบจากทั่วโลก!!!\n\n\nสารบัญ : มหาศึกคนชนเทพ 1 - Shumatsu no Walkure (ฉบับการ์ตูน)\nตอนที่ 1 ‘ศึกสุดท้ายระหว่างเทพ vs มนุษย์’\nตอนที่ 2 ‘สุดยอดเทพ vs สุดยอดคน’\nตอนที่ 3 ‘คู่ปรับ’\nตอนที่ 4 ‘13 เทพ กับ 13 มนุษย์’', 0, 129),
(39, 'เกิดชาตินี้พี่ต้องเทพ เล่ม 5 - (Mushoku Tensei)', 'Rifujin na Magonote', 'https://cdn-local.mebmarket.com/meb/server1/92889/Thumbnail/book_detail_large.gif?5', 5, '2023-03-01 04:09:08', '\"ในที่สุดพวกรูเดียสก็เดินทางมาถึง ‘ทวีปมิลิส’ อันเป็นแผ่นดินของมนุษย์และจุดเชื่อมสู่ทวีปกลาง ที่นั่นรูเดียสได้พบกับ ‘เปาโล’ พ่อของเขาหลังจากไม่ได้พบหน้ากันถึงห้าปี แต่เปาโลในเวลานี้กลับเปลี่ยนไปราวกับคนละคน เกิดอะไรขึ้นในช่วงที่ไม่ได้พบกัน? หนำซ้ำพวกเขายังมีเรื่องทะเลาะกันใหญ่โตแบบนี้แล้วความสัมพันธ์ของสองพ่อลูกจะกลับมาเป็นเหมือนเดิมได้หรือไม่...\nเรื่องราวของชายหนุ่มวัย 34 ผู้ไม่เอาไหนซึ่งกลับชาติมาเกิดใหม่ในโลกแห่งเวทมนตร์และคมดาบ มาถึงเล่มที่ 5 แล้ว!\"', 0, 259);

-- --------------------------------------------------------

--
-- Table structure for table `cart_inventory`
--

CREATE TABLE `cart_inventory` (
  `cartId` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `bookId` int(11) NOT NULL,
  `price` float NOT NULL,
  `createDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cart_inventory`
--

INSERT INTO `cart_inventory` (`cartId`, `username`, `bookId`, `price`, `createDate`) VALUES
(5, 'adray', 37, 250, '2023-03-12 13:54:24'),
(16, 'adray', 34, 180, '2023-03-12 16:29:45'),
(17, 'adray', 39, 259, '2023-03-12 16:47:10'),
(18, 'adray', 36, 250, '2023-03-12 16:47:14'),
(19, 'nitid', 36, 250, '2023-03-12 16:47:25'),
(20, 'nitid', 38, 129, '2023-03-12 18:04:46');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`categoryId`, `categoryName`) VALUES
(0, 'นวนิยาย'),
(1, 'การ์ตูนทั่วไป');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `bookId` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `comment` text,
  `rating` tinyint(1) NOT NULL DEFAULT '0',
  `time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`bookId`, `username`, `comment`, `rating`, `time`) VALUES
(38, 'adray', 'กระจอกสัส\n', 1, '2023-03-11 16:00:45'),
(38, 'nitid', 'ฟหก', 1, '2023-03-10 20:03:04');

-- --------------------------------------------------------

--
-- Table structure for table `creditcard`
--

CREATE TABLE `creditcard` (
  `id` int(11) NOT NULL,
  `username` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cardNumber` varchar(16) NOT NULL,
  `cardHolderName` varchar(255) NOT NULL,
  `expiry_month` int(11) NOT NULL,
  `expiry_year` int(11) NOT NULL,
  `cvv` varchar(4) NOT NULL,
  `billingAddress` varchar(255) NOT NULL,
  `createDate` date NOT NULL,
  `updatedDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `creditcard`
--

INSERT INTO `creditcard` (`id`, `username`, `cardNumber`, `cardHolderName`, `expiry_month`, `expiry_year`, `cvv`, `billingAddress`, `createDate`, `updatedDate`) VALUES
(4, 'nitid', '1234567891234567', 'Nitd Dewsurin', 1, 2025, '1987', 'Hadyai', '2023-03-13', '2023-03-13');

-- --------------------------------------------------------

--
-- Table structure for table `favorite`
--

CREATE TABLE `favorite` (
  `username` varchar(30) NOT NULL,
  `bookId` int(11) NOT NULL,
  `favDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(11) NOT NULL,
  `bookId` int(11) NOT NULL,
  `pageNumber` int(11) NOT NULL,
  `format` enum('comic','novel') NOT NULL,
  `imagePath` varchar(255) DEFAULT NULL,
  `textPath` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `role` enum('admin','user') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'user',
  `valid` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `email`, `password`, `firstname`, `lastname`, `role`, `valid`) VALUES
('adray', 'adray@hentai.com', '123', 'adray', 'adray', 'admin', 1),
('gay', '123', 'hay@meil.com', '', '', 'user', 1),
('nitid', 'nitid1987@gmail.com', '123', '', '', 'user', 1),
('undefined', 'undefined@mail.com', '123', '', '', 'user', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`bookId`);

--
-- Indexes for table `cart_inventory`
--
ALTER TABLE `cart_inventory`
  ADD PRIMARY KEY (`cartId`),
  ADD KEY `bookId` (`bookId`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryId`,`categoryName`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`bookId`,`username`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `creditcard`
--
ALTER TABLE `creditcard`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`username`,`bookId`),
  ADD KEY `fk_bookId` (`bookId`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bookId` (`bookId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart_inventory`
--
ALTER TABLE `cart_inventory`
  MODIFY `cartId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `creditcard`
--
ALTER TABLE `creditcard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart_inventory`
--
ALTER TABLE `cart_inventory`
  ADD CONSTRAINT `cart_inventory_ibfk_1` FOREIGN KEY (`bookId`) REFERENCES `book` (`bookId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_inventory_ibfk_2` FOREIGN KEY (`username`) REFERENCES `user` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`bookId`) REFERENCES `book` (`bookId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`username`) REFERENCES `user` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `creditcard`
--
ALTER TABLE `creditcard`
  ADD CONSTRAINT `creditcard_ibfk_1` FOREIGN KEY (`username`) REFERENCES `user` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pages`
--
ALTER TABLE `pages`
  ADD CONSTRAINT `pages_ibfk_1` FOREIGN KEY (`bookId`) REFERENCES `book` (`bookId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

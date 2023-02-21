-- 1)
CREATE DATABASE meb_bookstore
-- 2)
CREATE TABLE `meb_bookstore`.`user` ( `uid` INT NOT NULL AUTO_INCREMENT , 
`username` VARCHAR(30) NOT NULL , 
`password` VARCHAR(255) NOT NULL , 
`firstname` VARCHAR(50) NOT NULL , `lastname` VARCHAR(50) NOT NULL , 
`userlevel` CHAR(1) NOT NULL DEFAULT 'm' , 
`valid` TINYINT(1) NOT NULL DEFAULT '1' , 
PRIMARY KEY (`uid`), UNIQUE (`username`)) ENGINE = InnoDB

CREATE TABLE `meb_bookstore`.`book` ( `bookId` INT NOT NULL AUTO_INCREMENT , `bookname` VARCHAR(255) NOT NULL , 
`author` VARCHAR(50) NOT NULL , 
`price` FLOAT NOT NULL , 
PRIMARY KEY (`bookId`)) ENGINE = InnoDB;

CREATE TABLE `meb_bookstore`.`category` ( `categoryId` INT NOT NULL AUTO_INCREMENT , 
`categoryName` VARCHAR(50) NOT NULL , 
PRIMARY KEY (`categoryId`)) ENGINE = InnoDB;

CREATE TABLE `meb_bookstore`.`categorized` ( `bookId` INT NOT NULL , 
`categoryId` INT NOT NULL , 
PRIMARY KEY (`bookId`,`categoryId`)) ENGINE = InnoDB;
-- 3)
ALTER TABLE `categorized` ADD FOREIGN KEY (`bookId`) REFERENCES `book`(`bookId`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `categorized` ADD FOREIGN KEY (`categoryId`) REFERENCES `category`(`categoryId`) ON DELETE CASCADE ON UPDATE CASCADE;
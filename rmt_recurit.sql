-- phpMyAdmin SQL Dump
-- version 4.4.8
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2015-07-29 13:50:56
-- 服务器版本： 5.6.20
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `rmt_recurit`
--
CREATE DATABASE IF NOT EXISTS `rmt_recurit` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `rmt_recurit`;

-- --------------------------------------------------------

--
-- 表的结构 `rmtr_admin`
--

CREATE TABLE IF NOT EXISTS `rmtr_admin` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `department` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `rmtr_freshman`
--

CREATE TABLE IF NOT EXISTS `rmtr_freshman` (
  `id` int(11) NOT NULL,
  `name` tinytext NOT NULL,
  `xh` char(9) NOT NULL,
  `sex` enum('男','女') NOT NULL,
  `birthday` date NOT NULL,
  `tel` bigint(11) NOT NULL,
  `qq` bigint(12) NOT NULL,
  `email` tinytext NOT NULL,
  `dorm` tinytext NOT NULL,
  `college` enum('通信与信息工程学院','电子科学与工程学院','光电工程学院','计算机学院、软件学院','自动化学院','材料科学与工程学院','物联网学院','理学院','地理与生物信息学院','传媒与艺术学院（文化艺术中心）','管理学院','经济学院','马克思主义学院','人文与社会科学学院','外国语学院','教育科学与技术学院','贝尔英才学院','海外教育学院') NOT NULL,
  `spec` tinytext NOT NULL,
  `city` tinytext NOT NULL,
  `department` enum('新闻采编部','视觉部','播音部','技术部','策划部','运营部') NOT NULL,
  `award` text NOT NULL,
  `exp` text NOT NULL,
  `reason` text NOT NULL,
  `accepted` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `rmtr_freshman`
--

INSERT INTO `rmtr_freshman` (`id`, `name`, `xh`, `sex`, `birthday`, `tel`, `qq`, `email`, `dorm`, `college`, `spec`, `city`, `department`, `award`, `exp`, `reason`, `accepted`) VALUES
(1, 'aaa', 'bbb', '男', '1988-03-09', 2222, 3333, '3@qq.com', '27#<><>', '外国语学院', 'hhhh', 'shsh', '新闻采编部', 'null', '''', ' OR 1=1', 0),
(2, 'qqq', 'qqq', '女', '1992-04-03', 0, 0, 'qqq', 'qqq', '马克思主义学院', 'qqq', 'qq', '播音部', 'qqq', 'qqq', 'qqq', 0),
(3, 'qqq', 'qqq', '女', '1992-04-03', 0, 0, 'qqq', 'qqq', '马克思主义学院', 'qqq', 'qq', '播音部', 'qqq', 'qqq', 'qqq', 0),
(4, '', '', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(5, '', '', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(6, '', '', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(7, '', '', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(8, '111', '', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(9, '111', '', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(10, '', '', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(11, '啊啊啊', '', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(12, '啊啊啊·亲亲亲亲亲', '', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(13, '啊啊啊·亲亲亲亲亲请求', '', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(14, '啊www啊啊·亲亲亲亲亲请求', '', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(15, '啊啊啊-亲亲亲亲亲请求', '', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(16, '啊啊啊-亲亲亲亲亲请求23', '', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(17, '啊啊', 'B12345678', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(18, '啊啊', 'b12345678', '女', '0000-00-00', 0, 0, '', '', '', '', '', '', '', '', '', 0),
(19, '啊啊', 'B11111111', '男', '1994-04-06', 13812112121, 1111111, '11@ww.com', 'qwqwq', '材料科学与工程学院', 'weqweqwe', 'qweqwe', '', 'adqsd', 'adcad', 'ascascascqc', 0),
(20, '啊啊', 'B11111111', '男', '1994-04-06', 13812112121, 1111111, '11@ww.com', 'qwqwq', '材料科学与工程学院', 'weqweqwe', 'qweqwe', '', 'adqsd', 'adcad', 'ascascascqc', 0),
(21, '啊得得', 'B12121212', '男', '1992-03-06', 13333333333, 44444444, '333@qq.com', 'dorn', '管理学院', 'spec', 'city', '', 'award', 'exp ', 'reason', 0),
(22, '阿达', 'B11111111', '女', '1991-03-06', 13344445555, 1111111, '22@qq.com', 'asdasd', '贝尔英才学院', 'asdsad', 'asdasd', '技术部', 'asdasdasda', 'asdasd', 'asdasdadasda', 0),
(23, '阿达', 'B11111111', '女', '1991-03-06', 13344445555, 1111111, '22@qq.com', 'asdasd', '贝尔英才学院', 'asdsad', 'asdasd', '技术部', 'asdasdasda', 'asdasd', 'asdasdadasda', 0),
(24, '阿达', 'B11111111', '女', '1991-03-06', 13344445555, 1111111, '22@qq.com', 'asdasd', '贝尔英才学院', 'asdsad', 'asdasd', '技术部', 'asdasdasda', 'asdasd', 'asdasdadasda', 0),
(25, '阿达', 'B11111112', '女', '1991-03-06', 13344445555, 1111111, '22@qq.com', 'asdasd', '贝尔英才学院', 'asdsad', 'asdasd', '技术部', 'asdasdasda', 'asdasd', 'asdasdadasda', 0),
(26, '啊啊', 'B11111111', '女', '1991-02-04', 13111111111, 1111111, '22@qq.com.cn', 'asdasd', '传媒与艺术学院（文化艺术中心）', 'sss', 'ccc', '', 'aaa', 'wwww', 'wwwww', 0),
(27, '啊啊', 'B11111111', '女', '1991-02-04', 13111111111, 1111111, '22@qq.com.cn', 'asdasd', '传媒与艺术学院（文化艺术中心）', 'sss', 'ccc', '', 'aaa', 'wwww', 'wwwww', 0),
(28, '啊啊', 'B11111111', '女', '1991-02-04', 13111111111, 1111111, '22@qq.com.cn', 'asdasd', '传媒与艺术学院（文化艺术中心）', 'sss', 'ccc', '', 'aaa', 'wwww', 'wwwww', 0),
(29, '啊啊', 'B10000000', '女', '1991-02-04', 13111111111, 1111111, '22@qq.com.cn', 'asdasd', '传媒与艺术学院（文化艺术中心）', 'sss', 'ccc', '', 'aaa', 'wwww', 'wwwww', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rmtr_admin`
--
ALTER TABLE `rmtr_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rmtr_freshman`
--
ALTER TABLE `rmtr_freshman`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rmtr_admin`
--
ALTER TABLE `rmtr_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `rmtr_freshman`
--
ALTER TABLE `rmtr_freshman`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=30;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

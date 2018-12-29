/*
Navicat MySQL Data Transfer

Source Server         : feng
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : goodlist

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-29 11:19:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for gouwuche
-- ----------------------------
DROP TABLE IF EXISTS `gouwuche`;
CREATE TABLE `gouwuche` (
  `idx` int(255) NOT NULL,
  `qty` int(11) NOT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gouwuche
-- ----------------------------
INSERT INTO `gouwuche` VALUES ('3', '5');
SET FOREIGN_KEY_CHECKS=1;

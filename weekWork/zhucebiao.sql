/*
Navicat MySQL Data Transfer

Source Server         : feng
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : goodlist

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-29 11:19:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for zhucebiao
-- ----------------------------
DROP TABLE IF EXISTS `zhucebiao`;
CREATE TABLE `zhucebiao` (
  `idx` int(11) NOT NULL AUTO_INCREMENT,
  `haoma` varchar(255) NOT NULL,
  `mima` varchar(255) NOT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhucebiao
-- ----------------------------
INSERT INTO `zhucebiao` VALUES ('1', '13111111111', '1111111');
INSERT INTO `zhucebiao` VALUES ('2', '18111111111', '2222222');
INSERT INTO `zhucebiao` VALUES ('3', '15111111111', '44444444444');
INSERT INTO `zhucebiao` VALUES ('4', '18122222222', '2222222');
SET FOREIGN_KEY_CHECKS=1;

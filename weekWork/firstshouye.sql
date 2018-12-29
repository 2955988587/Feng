/*
Navicat MySQL Data Transfer

Source Server         : feng
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : goodlist

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-29 11:19:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for firstshouye
-- ----------------------------
DROP TABLE IF EXISTS `firstshouye`;
CREATE TABLE `firstshouye` (
  `idx` int(11) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `chenjiao` varchar(255) NOT NULL,
  `dizhi` varchar(255) NOT NULL,
  `timer` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idx`)
) ENGINE=MyISAM AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of firstshouye
-- ----------------------------
INSERT INTO `firstshouye` VALUES ('2', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/102894/1_220.png', '53°茅台酒股份公司茅台飞天（2015年份）500ml', '1999.00', '2453', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('3', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/109626/1_220.png', '42度天佑德2018第17界环湖赛纪念酒150ml*6（礼盒）', '198.00', '45343', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('4', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/107497/1_220.png', '53°茅台酒股分公司迎宾酒（2013新版）500ml(6瓶装整箱)', '708.00', '21312', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('5', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/80766/1_220.png', '马克斯威酒庄精选美国加利福尼亚州纳帕谷赤霞珠干红2012 750ml', '1480.00', '453', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('6', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/505/Products/112381/1_220.png', '42度纳曲青稞酒750ml', '228.00', '5345', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('7', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/1946/1_220.png', '52°五粮液1995专卖店 500ml', '299.00', '453', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('8', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/81224/1_220.png', '52° 五粮液股份有限公司 五星级 500ml', '129.00', '45343', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('9', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4329/1_220.png', '48度天佑德青稞酒海拔3600 500ml', '288.00', '4343', '天天转你', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('10', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1_220.png', '拉菲珍藏波尔多 750ml（2瓶装）', '199.00', '43453', '平多多', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('11', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/421/5_220.png', '46°洋河天之蓝 480ml', '549.00', '6763', '淘宝', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('12', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/326/Products/95463/4_220.png', '52度天佑德青稞酒生态五星500ml', '1477.00', '532', '京东', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('13', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3570/4_220.png', '52°泸州老窖头曲 500ml（6瓶装）', '455.00', '8888', '西天', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('14', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2183/1_220.png', 'bacardi百加得白朗姆酒 750ml', '755.00', '553', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('15', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/250/Products/94568/1_220.png', '44度天佑德青稞酒银标出口型750ml', '356.00', '4567', '天佑德西宁虎台专卖店', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('16', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1_220.png', '拉菲珍藏波尔多 750ml（2瓶装）', '199.00', '43453', '平多多', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('17', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/102894/1_220.png', '53°茅台酒股份公司茅台飞天（2015年份）500ml', '1999.00', '2453', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('18', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/109626/1_220.png', '42度天佑德2018第17界环湖赛纪念酒150ml*6（礼盒）', '198.00', '45343', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('19', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/107497/1_220.png', '53°茅台酒股分公司迎宾酒（2013新版）500ml(6瓶装整箱)', '708.00', '21312', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('20', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/80766/1_220.png', '马克斯威酒庄精选美国加利福尼亚州纳帕谷赤霞珠干红2012 750ml', '1480.00', '453', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('21', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/505/Products/112381/1_220.png', '42度纳曲青稞酒750ml', '228.00', '5345', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('22', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/1946/1_220.png', '52°五粮液1995专卖店 500ml', '299.00', '453', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('23', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/81224/1_220.png', '52° 五粮液股份有限公司 五星级 500ml', '129.00', '45343', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('24', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4329/1_220.png', '48度天佑德青稞酒海拔3600 500ml', '288.00', '4343', '天天转你', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('25', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1_220.png', '拉菲珍藏波尔多 750ml（2瓶装）', '199.00', '43453', '平多多', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('26', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/421/5_220.png', '46°洋河天之蓝 480ml', '549.00', '6763', '淘宝', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('27', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/326/Products/95463/4_220.png', '52度天佑德青稞酒生态五星500ml', '1477.00', '532', '京东', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('28', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3570/4_220.png', '52°泸州老窖头曲 500ml（6瓶装）', '455.00', '8888', '西天', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('29', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2183/1_220.png', 'bacardi百加得白朗姆酒 750ml', '755.00', '553', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('30', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/250/Products/94568/1_220.png', '44度天佑德青稞酒银标出口型750ml', '356.00', '4567', '天佑德西宁虎台专卖店', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('31', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/1946/1_220.png', '52°五粮液1995专卖店 500ml', '299.00', '453', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('32', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/81224/1_220.png', '52° 五粮液股份有限公司 五星级 500ml', '129.00', '45343', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('33', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/107497/1_220.png', '53°茅台酒股分公司迎宾酒（2013新版）500ml(6瓶装整箱)', '708.00', '21312', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('34', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/95390/1_220.png', '42度天佑德青稞酒小黑125ml×4', '119.00', '2218', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('35', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1_220.png', '拉菲珍藏波尔多 750ml（2瓶装）', '199.00', '43453', '平多多', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('36', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/80766/1_220.png', '马克斯威酒庄精选美国加利福尼亚州纳帕谷赤霞珠干红2012 750ml', '1480.00', '453', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('37', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/81224/1_220.png', '52° 五粮液股份有限公司 五星级 500ml', '129.00', '45343', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('38', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1_220.png', '拉菲珍藏波尔多 750ml（2瓶装）', '199.00', '43453', '平多多', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('39', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/102894/1_220.png', '53°茅台酒股份公司茅台飞天（2015年份）500ml', '1999.00', '2453', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('40', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/421/5_220.png', '46°洋河天之蓝 480ml', '549.00', '6763', '淘宝', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('41', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1_220.png', '拉菲珍藏波尔多 750ml（2瓶装）', '199.00', '43453', '平多多', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('42', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/80766/1_220.png', '马克斯威酒庄精选美国加利福尼亚州纳帕谷赤霞珠干红2012 750ml', '1480.00', '453', '中酒自营', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('43', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3570/4_220.png', '52°泸州老窖头曲 500ml（6瓶装）', '455.00', '8888', '西天', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('44', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4329/1_220.png', '48度天佑德青稞酒海拔3600 500ml', '288.00', '4343', '天天转你', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('45', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1_220.png', '拉菲珍藏波尔多 750ml（2瓶装）', '199.00', '43453', '平多多', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('46', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/421/5_220.png', '46°洋河天之蓝 480ml', '549.00', '6763', '淘宝', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('47', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/326/Products/95463/4_220.png', '52度天佑德青稞酒生态五星500ml', '1477.00', '532', '京东', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('48', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3570/4_220.png', '52°泸州老窖头曲 500ml（6瓶装）', '455.00', '8888', '西天', '2018-12-27 19:34:29');
INSERT INTO `firstshouye` VALUES ('49', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2183/1_220.png', 'bacardi百加得白朗姆酒 750ml', '755.00', '553', '中酒自营', '2018-12-27 19:35:25');
INSERT INTO `firstshouye` VALUES ('50', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/250/Products/94568/1_220.png', '44度天佑德青稞酒银标出口型750ml', '356.00', '4567', '天佑德西宁虎台专卖店', '2018-12-27 19:33:46');
INSERT INTO `firstshouye` VALUES ('51', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1_220.png', '拉菲珍藏波尔多 750ml（2瓶装）', '199.00', '43453', '平多多', '2018-12-27 19:32:45');
INSERT INTO `firstshouye` VALUES ('52', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/102894/1_220.png', '53°茅台酒股份公司茅台飞天（2015年份）500ml', '1999.00', '2453', '中酒自营', '2018-12-27 19:31:43');
INSERT INTO `firstshouye` VALUES ('53', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/109626/1_220.png', '42度天佑德2018第17界环湖赛纪念酒150ml*6（礼盒）', '198.00', '45343', '中酒自营', '2018-12-27 19:30:29');
INSERT INTO `firstshouye` VALUES ('54', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/107497/1_220.png', '53°茅台酒股分公司迎宾酒（2013新版）500ml(6瓶装整箱)', '708.00', '21312', '中酒自营', '2018-12-27 19:29:44');
INSERT INTO `firstshouye` VALUES ('55', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/80766/1_220.png', '马克斯威酒庄精选美国加利福尼亚州纳帕谷赤霞珠干红2012 750ml', '1480.00', '453', '中酒自营', '2018-12-27 19:28:22');
INSERT INTO `firstshouye` VALUES ('56', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/505/Products/112381/1_220.png', '42度纳曲青稞酒750ml', '228.00', '5345', '中酒自营', '2018-12-27 19:27:29');
INSERT INTO `firstshouye` VALUES ('57', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/1946/1_220.png', '52°五粮液1995专卖店 500ml', '299.00', '453', '中酒自营', '2018-12-27 19:26:41');
INSERT INTO `firstshouye` VALUES ('58', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/81224/1_220.png', '52° 五粮液股份有限公司 五星级 500ml', '129.00', '45343', '中酒自营', '2018-12-27 19:25:42');
INSERT INTO `firstshouye` VALUES ('59', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4329/1_220.png', '48度天佑德青稞酒海拔3600 500ml', '288.00', '4343', '天天转你', '2018-12-27 19:24:03');
INSERT INTO `firstshouye` VALUES ('60', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1_220.png', '拉菲珍藏波尔多 750ml（2瓶装）', '199.00', '43453', '平多多', '2018-12-27 19:23:29');
INSERT INTO `firstshouye` VALUES ('61', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/421/5_220.png', '46°洋河天之蓝 480ml', '549.00', '6763', '淘宝', '2018-12-27 19:22:29');
INSERT INTO `firstshouye` VALUES ('62', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/326/Products/95463/4_220.png', '52度天佑德青稞酒生态五星500ml', '1477.00', '532', '京东', '2018-12-27 19:21:29');
INSERT INTO `firstshouye` VALUES ('63', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3570/4_220.png', '52°泸州老窖头曲 500ml（6瓶装）', '455.00', '8888', '西天', '2018-12-27 19:20:29');
INSERT INTO `firstshouye` VALUES ('64', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2183/1_220.png', 'bacardi百加得白朗姆酒 750ml', '755.00', '553', '中酒自营', '2018-12-27 19:19:24');
INSERT INTO `firstshouye` VALUES ('65', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/250/Products/94568/1_220.png', '44度天佑德青稞酒银标出口型750ml', '356.00', '4567', '天佑德西宁虎台专卖店', '2018-12-27 19:18:29');
INSERT INTO `firstshouye` VALUES ('66', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/1946/1_220.png', '52°五粮液1995专卖店 500ml', '299.00', '453', '中酒自营', '2018-12-27 19:17:29');
INSERT INTO `firstshouye` VALUES ('67', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/81224/1_220.png', '52° 五粮液股份有限公司 五星级 500ml', '129.00', '45343', '中酒自营', '2018-12-27 19:16:12');
INSERT INTO `firstshouye` VALUES ('68', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/107497/1_220.png', '53°茅台酒股分公司迎宾酒（2013新版）500ml(6瓶装整箱)', '708.00', '21312', '中酒自营', '2018-12-27 19:15:29');
INSERT INTO `firstshouye` VALUES ('69', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/95390/1_220.png', '42度天佑德青稞酒小黑125ml×4', '119.00', '2218', '中酒自营', '2018-12-27 19:14:29');
INSERT INTO `firstshouye` VALUES ('70', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1_220.png', '拉菲珍藏波尔多 750ml（2瓶装）', '199.00', '43453', '平多多', '2018-12-27 19:13:13');
INSERT INTO `firstshouye` VALUES ('71', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/80766/1_220.png', '马克斯威酒庄精选美国加利福尼亚州纳帕谷赤霞珠干红2012 750ml', '1480.00', '453', '中酒自营', '2018-12-27 19:12:29');
INSERT INTO `firstshouye` VALUES ('72', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/81224/1_220.png', '52° 五粮液股份有限公司 五星级 500ml', '129.00', '45343', '中酒自营', '2018-12-27 19:11:29');
INSERT INTO `firstshouye` VALUES ('73', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1_220.png', '拉菲珍藏波尔多 750ml（2瓶装）', '199.00', '43453', '平多多', '2018-12-27 19:10:14');
INSERT INTO `firstshouye` VALUES ('74', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/102894/1_220.png', '53°茅台酒股份公司茅台飞天（2015年份）500ml', '1999.00', '2453', '中酒自营', '2018-12-27 19:09:15');
INSERT INTO `firstshouye` VALUES ('75', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/421/5_220.png', '46°洋河天之蓝 480ml', '549.00', '6763', '淘宝', '2018-12-27 19:08:29');
INSERT INTO `firstshouye` VALUES ('76', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1_220.png', '拉菲珍藏波尔多 750ml（2瓶装）', '199.00', '43453', '平多多', '2018-12-27 19:07:17');
INSERT INTO `firstshouye` VALUES ('77', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/80766/1_220.png', '马克斯威酒庄精选美国加利福尼亚州纳帕谷赤霞珠干红2012 750ml', '1480.00', '453', '中酒自营', '2018-12-27 19:06:17');
INSERT INTO `firstshouye` VALUES ('78', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4329/1_220.png', '48度天佑德青稞酒海拔3600 500ml', '288.00', '4343', '天天转你', '2018-12-27 19:35:29');
INSERT INTO `firstshouye` VALUES ('79', 'http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1_220.png', '拉菲珍藏波尔多 750ml（2瓶装）', '199.00', '43453', '平多多', '2018-12-27 19:35:19');
INSERT INTO `firstshouye` VALUES ('80', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/421/5_220.png', '46°洋河天之蓝 480ml', '549.00', '6763', '淘宝', '2018-12-27 19:55:10');
SET FOREIGN_KEY_CHECKS=1;

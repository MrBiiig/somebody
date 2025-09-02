import fs from "fs"; // 导入文件系统模块
import path from "path"; // 导入路径处理模块

import 基础信息 from "./1-基础信息.js";
import 个人优势 from "./2-个人优势.js";
import 求职期望 from "./3-求职期望.js";

import hisense from "./4-工作经历/1-hisense.js";
import haier from "./4-工作经历/2-haier.js";
import neusoft from "./4-工作经历/3-neusoft.js";

import 职业能力认证系统 from "./5-项目经历/1-职业能力认证系统.js";
import 自组织系统 from "./5-项目经历/2-自组织系统.js";
import 移动应用自动化测试平台 from "./5-项目经历/3-移动应用自动化测试平台.js";
import 庄元海外网络代购平台 from "./5-项目经历/4-庄元海外网络代购平台.js";
import 浙江舟山渔船检验综合服务管理平台 from "./5-项目经历/5-浙江舟山渔船检验综合服务管理平台.js";
import 蔬菜配送系统 from "./5-项目经历/6-蔬菜配送系统.js";
import P2P网络借贷平台 from "./5-项目经历/7-P2P网络借贷平台.js";

import 教育经历 from "./6-教育经历.js";
import 资格证书 from "./7-资格证书.js";
import 志愿者服务经历 from "./8-志愿者服务经历.js";

const outputData = {
  基础信息,
  个人优势,
  求职期望,
  工作经历: [hisense, haier, neusoft],
  项目经历: [
    职业能力认证系统,
    自组织系统,
    移动应用自动化测试平台,
    庄元海外网络代购平台,
    浙江舟山渔船检验综合服务管理平台,
    蔬菜配送系统,
    P2P网络借贷平台,
  ],
  教育经历,
  资格证书,
  志愿者服务经历,
};

// 定义输出文件路径（例如项目根目录下的 result.txt）
const outputPath = path.join(process.cwd(), "result.txt");
// 将数据转换为字符串（JSON 格式便于阅读）
const content = JSON.stringify(outputData, null, 2); // 第三个参数 2 表示格式化缩进
// 写入文件
fs.writeFile(outputPath, content, (err) => {
  if (err) {
    console.error("写入文件失败：", err);
  } else {
    console.log(`数据已成功写入 ${outputPath}`);
  }
});

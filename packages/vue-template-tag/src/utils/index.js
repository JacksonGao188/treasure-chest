import fs from 'fs'

/**
 * 插入到 Html 标签到 key 名称
*/
const tagKeyName = "vue-template-tag"

/**
 * 需要过滤的标签名称
*/
const filterLabels = ['template', 'router-view', 'transition']

/**
 * 匹配 原生或者非原生HTML 标签的正则表达式
*/
const htmlTagRegex = /<([a-zA-Z][a-zA-Z0-9-]*)\s*([^>]*)>/g;

/**
 * 检查是否已经有 key 属性
*/
const onHasKey = (key, content) => new RegExp(`\\b${key}="[^"]*"`).test(content);


/**
 * 匹配包含插入 key和value 的字符正则表达式
*/
const onIncludeTagKeyRegex = (key) => new RegExp(`\\s${key}="[^"]*"`, 'gi');

/**
 * 默认需要扫描的文件夹名称数组
*/
const defaultScanDirs = ['src'];

/**
 * 获取当前指令执行绝对路径
*/
const getCwdPath = () => fs.realpathSync(process.cwd());

/**
 * 说明文档地址
*/
const illustrateDocumentAddress = '暂无'

/**
 * 将 attributes 字符串解析成对象
*/
const parseAttributesToObj = (inputString) => {
  const pattern = /(\S+)=["']([^"']+)["']/g;
  let match;
  const attributesObj = {};

  while ((match = pattern.exec(inputString)) !== null) {
    attributesObj[match[1]] = match[2];
  }
  return attributesObj;
}

export {
  tagKeyName,
  filterLabels,
  htmlTagRegex,
  onHasKey,
  onIncludeTagKeyRegex,
  defaultScanDirs,
  getCwdPath,
  illustrateDocumentAddress,
  parseAttributesToObj
}
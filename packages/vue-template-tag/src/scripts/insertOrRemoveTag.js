import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import { parse } from '@vue/compiler-sfc'
import { v4 as uuidv4 } from 'uuid';
import {
  tagKeyName,
  onIncludeTagKeyRegex,
  filterLabels,
  htmlTagRegex,
  onHasKey,
  getCwdPath,
  parseAttributesToObj
} from '@/utils'

// 插入 tag 计数
let iNum = 0

// 检测是否有插入的tag
const tagSet = new Set()
const repeatedTags = []

/**
 * 为所有 HTML 标签分配唯一键属性的函数
*/
const insertUniqueKeysToTags = (templateContent, key = tagKeyName) => {
  return templateContent.replace(htmlTagRegex, (match, tagName, attributes) => {
    if (!onHasKey(key, attributes) && !filterLabels.includes(tagName)) {
      const uniqueKey = `${key}="${uuidv4()}"`;
      iNum += 1;
      if (!attributes.trim()) return `<${tagName} ${uniqueKey}>`;
      return `<${tagName} ${uniqueKey} ${attributes}>`;
    }
    return match;
  });
}

/**
 * 删除所有 HTML 标签中的 tagKeyName 属性的函数
*/
const removeUniqueKeysFromTags = (templateContent, key = tagKeyName) => {
  return templateContent.replace(onIncludeTagKeyRegex(key), () => '');
}

/**
 * 测试是否有重复 tag
*/
const onHasDuplicateTagTest = (templateContent, key = tagKeyName) => {
  return templateContent.replace(htmlTagRegex, (match, tagName, attributes) => {
    if (onHasKey(key, attributes) && !filterLabels.includes(tagName)) {
      const attributesObj = parseAttributesToObj(attributes)
      const targetKey = attributesObj[key]
      if (targetKey && !tagSet.has(targetKey)) {
        tagSet.add(targetKey, targetKey)
      } else {
        repeatedTags.push(targetKey)
      }
    }
    return match;
  });
}

/**
 * 处理 Vue 文件的函数
*/
const processVueFile = (filePath, type, tagName) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { descriptor } = parse(content);

  if (descriptor.template) {
    const templateContent = descriptor.template.content;
    if (type === 'hasDuplicateTagTest') {
      onHasDuplicateTagTest(templateContent, tagName)
    } else {
      const modifiedTemplateContent = type === 'insert' ?
        insertUniqueKeysToTags(templateContent, tagName) :
        removeUniqueKeysFromTags(templateContent, tagName);

      const modifiedContent = content.replace(templateContent, () => modifiedTemplateContent);
      fs.writeFileSync(filePath, modifiedContent, 'utf-8');
    }
  }
}

/**
 * 递归扫描目录中的 Vue 文件的函数
*/
const insertOrRemoveTag = (needScanDirs, type = 'insert', tagName) => {
  const cwd = getCwdPath()

  const onDir = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const isNeedScan = needScanDirs.find(item => filePath.indexOf(item) > -1)
      const isDir = fs.statSync(filePath).isDirectory()
      if (isDir && !!isNeedScan) {
        onDir(filePath);
      } else if (file.endsWith('.vue')) {
        processVueFile(filePath, type, tagName);
      }
    });
  }

  onDir(cwd)

  if (type === 'insert') console.log(chalk.green(`🎉 执行插入命令完毕，共插入 ${iNum} 个标记。`));
  else if (type === 'remove') console.log(chalk.green(`🎉 执行移除命令完毕。`));
  else if (type === 'hasDuplicateTagTest') {
    const repeatedTagsLen = repeatedTags.length
    if (repeatedTags.length) {
      console.log(chalk.red.bgRed.bold(`💥 检测到如下有 ${repeatedTagsLen} 个重复的 tag, 请手动修改！\n`));
      console.log(repeatedTags)
    } else {
      console.log(chalk.green(`🎉 恭喜你暂时未发现重复的tag`))
    }
  }
}

export default insertOrRemoveTag

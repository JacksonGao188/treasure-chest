#!/usr/bin/env node

import meow from 'meow'
import insertOrRemoveTag from '@/scripts/insertOrRemoveTag.js'
import { defaultScanDirs, illustrateDocumentAddress } from '@/utils'
import chalk from 'chalk'


const cli = meow(`
  Usage
    $ vue-template-tag <option>

  Options
    --insert-tag, -i      插入 tag 到 html 代码中
    --remove-tag, -r      移除插入到 html 的 tag
    --test-tag, -t        检测插入到 tag 有没有重复值的
    --tag-name, -n        插入的 tag 名称
    --scan-dirs, -d       需要扫描的文件夹名称, 使用“,” 逗号隔开,默认扫描 src 文件夹下所有的 .vue 结尾的文件
    --version, -v         获取 vue-template-tag 项目的版本号
    --help, -h            获取 vue-template-tag 项目的使用方法介绍

  Examples
    $ vue-template-tag --insert-tag
    $ vue-template-tag --remove-tag
    $ vue-template-tag --test-tag
    $ vue-template-tag --tag-name
    $ vue-template-tag --scan-dirs
    $ vue-template-tag --version
    $ vue-template-tag --help
`, {
  importMeta: import.meta,
  booleanDefault: false,
  flags: {
    insertTag: {
      shortFlag: 'i',
      type: 'boolean',
    },
    removeTag: {
      shortFlag: 'r',
      type: 'boolean',
    },
    testTag: {
      shortFlag: 't',
      type: 'boolean',
    },
    tagName: {
      shortFlag: 'n',
      type: 'string',
      default: 'jacksongao188-tag'
    },
    scanDirs: {
      shortFlag: 'd',
      type: 'string',
      default: 'src'
    },
    version: {
      shortFlag: 'v',
      type: 'boolean',
    },
    help: {
      shortFlag: 'h',
      type: 'boolean',
    }
  },
});

const flags = cli.flags

const { scanDirs, tagName } = flags
const { insertTag, removeTag, testTag, version, help } = flags

if ([insertTag, removeTag, testTag].includes(true)) {
  const _scanDirs = scanDirs.split(',')
  const needScanDirs = [...new Set([..._scanDirs, ...defaultScanDirs])]

  let orderName = ''
  if (insertTag) orderName = 'insert'
  else if (removeTag) orderName = 'remove'
  else if (testTag) orderName = 'hasDuplicateTagTest'

  insertOrRemoveTag(needScanDirs, orderName, tagName)
}

if (help) {
  console.log(chalk.green(`${cli.help}`));
  console.log(chalk.green(`
  您也可以查看 vue-template-tag 使用说明文档 (${illustrateDocumentAddress})
`));
}

const isAllFalse = [insertTag, removeTag, testTag, version, help].every(item => !item)
if (isAllFalse) {
  console.log(chalk.red(`
    未知脚本命令
    请查看 vue-template-tag 使用说明文档 (${illustrateDocumentAddress})
  `));
}

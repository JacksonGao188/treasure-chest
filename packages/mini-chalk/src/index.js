/**
 * 设置文本颜色
*/
export const colorMap = {
  black: '\x1b[30m', // 黑色
  red: '\x1b[31m', // 红色
  green: '\x1b[32m', // 绿色
  yellow: '\x1b[33m', // 黄色
  blue: '\x1b[34m', // 蓝色
  magenta: '\x1b[35m', // 品红 (Magenta)
  cyan: '\x1b[36m', // 青色 (Cyan)
  white: '\x1b[37m', // 白色
  // 30 + 60
  brightBlack: '\x1b[90m',
  brightRed: '\x1b[91m',
  brightGreen: '\x1b[92m',
  brightYellow: '\x1b[93m',
  brightBlue: '\x1b[94m',
  brightMagenta: '\x1b[95m',
  brightCyan: '\x1b[96m',
  brightWhite: '\x1b[97m'
}

/**
 * 设置文本背景色
*/
export const bgColorMap = {
  black: '\x1b[40m', // 黑色
  red: '\x1b[41m', // 红色
  green: '\x1b[42m', // 绿色
  yellow: '\x1b[43m', // 黄色
  blue: '\x1b[44m', // 蓝色
  magenta: '\x1b[45m', // 洋红色 (Magenta)
  cyan: '\x1b[46m', // 青色 (Cyan)
  white: '\x1b[47m', // 白色
  // 40 + 60
  brightBlack: '\x1b[100m',
  brightRed: '\x1b[101m',
  brightGreen: '\x1b[102m',
  brightYellow: '\x1b[103m',
  brightBlue: '\x1b[104m',
  brightMagenta: '\x1b[105m',
  brightCyan: '\x1b[106m',
  brightWhite: '\x1b[107m'
}

/**
 * 设置文本样式
*/
export const ctyleMap = {
  resetAllStyle: '\x1b[0m', // 重置所有样式，记得要放在最后面才有效果
  bold: '\x1b[1m', // 粗体/高亮（Bold/Bright）
  dim: '\x1b[2m', // 淡色/暗淡（Dim/Faint）
  italics: '\x1b[3m', // 斜体（Italic）（有些终端不支持）
  underline: '\x1b[4m', // 下划线（Underline）
  blink: '\x1b[5m', // 闪烁（Blink）（有些终端不支持或被禁用）
  reverse: '\x1b[7m', // 反显（Reverse/Inverse，背景色和前景色互换）
  hidden: '\x1b[8m', // 隐藏（Hidden）（有些终端不支持）
  strikethrough: '\x1b[9m' // 删除线（Strikethrough）（有些终端不支持）
}

export const miniChalk = (text, options = [], isNeedReset) => {
  options = options.join('')
  const reset = isNeedReset ? '\x1b[0m' : ''
  return `${options}${text}${reset}`
}

/**
 * https://zh.wikipedia.org/wiki/ANSI%E8%BD%AC%E4%B9%89%E5%BA%8F%E5%88%97
 *
 *  256色使用方法
*/
// miniChalk('Msun-Code-Pack', ['\x1b[38;5;34m', '\x1b[48;5;255m'])

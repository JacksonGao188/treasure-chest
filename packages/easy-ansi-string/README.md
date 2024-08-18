# 欢迎使用终端简单字符串样式定义工具方法 easy-ansi-string （Welcome to the terminal simple string style definition tool method easy-ansi-string）
代码只有大概1kb，使用非常简单且可靠，支持常用字体颜色（8+8种），背景色（8+8种），样式（8种）的选择定义。

## 安装（Install）
```sh
npm i easy-ansi-string
# 或者 (Or)
pnpm add easy-ansi-string
```

## 使用（Usage）
```javascript
import easyAnsiString, { color, bgColor, style } from 'easy-ansi-string'

/**
 * 比如打印一个 白色字体，红色背景色，斜体的 log
*/
console.log(easyAnsiString('欢迎使用 easy-ansi-string', [color.white, bgColor.red, style.italics]))
```

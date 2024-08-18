# 简单 ANSI
代码只有大概1kb，使用非常简单可靠，支持常用字体颜色（8+8种），背景色（8+8种），样式（8种）的选择。

## 安装
pnpm add simple-ansi

## 使用
```javascript
import simpleAnsi, { color, bgColor, style } from 'simple-ansi'

/**
 * 举个🌰：比如打印一个 白色字体，红色背景色，斜体的 log
*/
console.log(simpleAnsi('欢迎使用 mini-chalk', [color.white, bgColor.red, style.italics]))

```

# 简单ansi
代码只有1kb，非常可靠，支持常用字体颜色，背景色，样式的选择。

## 安装
pnpm add simple-ansi

## 使用
```javascript
import simpleAnsi, { color } from 'simple-ansi'

console.log(simpleAnsi('欢迎使用 mini-chalk', [color.red]))
```

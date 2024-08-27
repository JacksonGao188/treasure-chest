
<h1 align="center">
	<br>
    <img width="388" src="https://github.com/JacksonGao188/treasure-chest/blob/e2d016ad6edb0fdba9740b9114c5564ba64d2fd8/packages/easy-chalk/assets/easy-chalk.png" alt="Chalk">
  </br>
</h1>

![](https://github.com/JacksonGao188/treasure-chest/blob/e2d016ad6edb0fdba9740b9114c5564ba64d2fd8/packages/easy-chalk/assets/effect.jpg)

## 说明（Illustrate） 
- 欢迎使用终端简单字符串样式定义工具方法 easy-chalk （Welcome to the terminal easy string style definition tool method easy-chalk）

- 代码只有大概1kb，使用非常简单且可靠，支持常用字体颜色（8+8种），背景色（8+8种），样式（8种）的选择定义。

## 安装（Install）
```sh
npm i easy-chalk
# 或者 (Or)
pnpm add easy-chalk
```

## 使用（Usage）
```javascript
import easyChalk, { color, bgColor, style } from 'easy-chalk'

/**
 * 比如打印一个 白色字体，红色背景色，斜体的 log
*/
console.log(easyChalk(
  '欢迎使用 easy-chalk',
  [color.white, bgColor.red, style.italics])
)
```

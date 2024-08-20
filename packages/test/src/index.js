import easyChalk, { color, bgColor, style } from 'easy-chalk'
console.log('\n');
console.log(easyChalk('black', [color.black]), easyChalk('red', [color.red]), easyChalk('green', [color.green]), easyChalk('yellow', [color.yellow]), easyChalk('blue', [color.blue]), easyChalk('magenta', [color.magenta]), easyChalk('cyan', [color.cyan]), easyChalk('white', [color.white]));
console.log(easyChalk('black', [bgColor.black]), easyChalk('red', [bgColor.red]), easyChalk('green', [bgColor.green]), easyChalk('yellow', [bgColor.yellow]), easyChalk('blue', [bgColor.blue]), easyChalk('magenta', [bgColor.magenta]), easyChalk('cyan', [bgColor.cyan]), easyChalk('white', [bgColor.white]));
console.log(easyChalk('bold', [style.bold]), easyChalk('dim', [style.dim]), easyChalk('italics', [style.italics]), easyChalk('underline', [style.underline]), easyChalk('blink', [style.blink]), easyChalk('reverse', [style.reverse]), easyChalk('strikethrough', [style.strikethrough]), easyChalk('hidden', [style.hidden]));
console.log('\n');

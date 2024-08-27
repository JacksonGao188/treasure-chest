## Install
```shell
pnpm add beauty-html-log
```

## Usage
```javascript
import beautyHtmlLog from 'beauty-html-log'

const { setBeautyHtmlLog } = beautyHtmlLog()

let result = ''

const transLine = (lineText) => {
  return setBeautyHtmlLog(lineText, (target) => {
    const eventMap = {
      'Finished: SUCCESS': '成功',
      'Finished: ABORTED': '已终止',
      'Finished: UNSTABLE': '不稳定版本',
      'Finished: FAILURE': '失败'
    }
    result = eventMap[target] || ''
  })
}
```
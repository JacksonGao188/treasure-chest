import { defaultMatchList, DEFAULT_STYLE } from '@/common'
import { MatchItem, CallBackParam } from '@/common/types'

const beautyHtmlLog = (options: {
  addMatchList?: MatchItem[],
  redefineMatchList?: MatchItem[]
} = {}) => {
  const {
    addMatchList = [], // 添加匹配数组
    redefineMatchList = [] // 重新定义匹配数组
  } = options

  const hasRedefineMatchList = !!redefineMatchList.length

  /**
   * 最后执行的匹配数组
   * Tips: 当重新定义匹配数组长度大于0则采用该匹配数组不与默认匹配数组进行 merge 处理
  */
  const executeMatchList = hasRedefineMatchList ? redefineMatchList : [...defaultMatchList, ...addMatchList]

  const getCodeByText = (text: string, callBack: (value: CallBackParam) => void) => {
    executeMatchList.forEach(item => {
      const {
        regex,
        styleObj,
        cLabel,
        onFormat = (val: any) => val,
        cAttributes
      } = item

      text = text.replace(regex, (match: string) => {
        callBack(regex)
        const formatText = onFormat(match);
        return getCodeByTextChild(formatText, { styleObj, cLabel, cAttributes })
      })
    })

    return text
  }

  const getCodeByTextChild = (text: string, options: Omit<MatchItem, 'regex' | 'onFormat'>) => {
    const { fCLabel } = DEFAULT_STYLE
    const { cLabel = fCLabel, styleObj = {}, cAttributes = {} } = options

    const styles = Object.keys(styleObj).reduce((res, key) => res + `${key}: ${styleObj[key]};`, '')

    const attributes = Object.keys(cAttributes).reduce((res, key) => res + `${key}="${cAttributes[key]}" `, '')

    if (cLabel === 'a') {
      return `<${cLabel} href="${text}" ${attributes} style="${styles}">${text}</${cLabel}>`
    } else {
      return `<${cLabel} style="${styles}">${text}</${cLabel}>`
    }
  }

  const setBeautyHtmlLog = (text: string, callBack = (value: CallBackParam) => value) => {
    const { fLabel, fStyleObj } = DEFAULT_STYLE
    const endText = getCodeByText(text, callBack)

    const styles = Object.keys(fStyleObj).reduce((res, key) => res + `${key}: ${fStyleObj[key]};`, '')

    return `<${fLabel} style="${styles}">${endText}</${fLabel}>`
  }

  return {
    setBeautyHtmlLog,
    addMatchList,
    redefineMatchList,
    defaultMatchList,
    executeMatchList
  }
}

export default beautyHtmlLog
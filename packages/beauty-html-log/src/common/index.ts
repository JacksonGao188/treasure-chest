import dayjs from 'dayjs'
import { MatchItem, KeyValueObj, DefaultStyle } from '@/common/types'

const COLORS: KeyValueObj = {
  black: '#000000',
  success: '#67C23A',
  warning: '#E6A23C',
  danger: '#F56C6C',
  info: '#909399',
  primary: '#409EFF',
}

export const defaultMatchList: MatchItem[] = [
  {
    regex: /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/g,
    styleObj: { color: COLORS.primary, 'font-weight': 'bold' },
  }, {
    regex: /\[Pipeline\]|hostname|port/g,
    styleObj: { color: COLORS.black, 'font-weight': 'bold' },
  }, {
    regex: /\[INFO\]|\[信息\]|HttpMethod:|Commit message|currentBuild\.result/g,
    styleObj: { color: COLORS.info, 'font-weight': 'bold' },
  }, {
    regex: /\[WARNING\]|\[提示\]|退出状态码|WARNING/g,
    styleObj: { color: COLORS.warning, 'font-weight': 'bold' },
  }, {
    regex: /Success:|成功|Progress|OK|"SUCCESS"|BUILD SUCCESS/g,
    styleObj: { color: COLORS.success, 'font-weight': 'bold' },
  }, {
    regex: /timeout|ERROR|\[错误\]/g,
    styleObj: { color: COLORS.danger, 'font-weight': 'bold' },
  }, {
    regex: 'Finished: SUCCESS',
    styleObj: { color: COLORS.success, 'font-size': '20px', 'font-weight': 'bold' },
  }, {
    regex: 'Finished: ABORTED',
    styleObj: { color: COLORS.danger, 'font-size': '20px', 'font-weight': 'bold' },
  }, {
    regex: 'Finished: UNSTABLE',
    styleObj: { color: COLORS.warning, 'font-size': '20px', 'font-weight': 'bold' },
  }, {
    regex: 'Finished: FAILURE',
    styleObj: { color: COLORS.danger, 'font-size': '20px', 'font-weight': 'bold' },
  }, {
    styleObj: { color: COLORS.black },
    regex: /\[(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)\]/,
    onFormat: (target: string) => `[${dayjs(target.replace(/\[|\]/g, '')).format('YYYY-MM-DD HH:mm:ss')}]`
  }, {
    cLabel: 'a',
    cAttributes: { target: '_blank' },
    styleObj: { color: 'blue', cursor: 'pointer', 'text-decoration': 'underline' },
    regex: /https?:\/\/[^\s/$.?#].[^\s]*/g,
  }
]

export const DEFAULT_STYLE: DefaultStyle = {
  fLabel: 'span',
  fCLabel: 'span',
  fStyleObj: { color: 'gray' }
}
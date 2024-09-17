import androidSvg from '@/assets/android.svg'
import iosSvg from '@/assets/ios.svg'
import windowsSvg from '@/assets/windows.svg'
import macOSSvg from '@/assets/macos.svg'
import transformSvg from '@/assets/transform.svg'
import watchSvg from '@/assets/watch.svg'
import carSvg from '@/assets/car.svg'
import inputSvg from '@/assets/input.svg'

const platformIcons = new Map([
  ['Android', androidSvg],
  ['iOS', iosSvg],
  ['Windows', windowsSvg],
  ['macOS', macOSSvg],
  ['文件传输助手', transformSvg],
  ['儿童手表版', watchSvg],
  ['车载版', carSvg],
  ['微信输入法', inputSvg],
])

export default platformIcons

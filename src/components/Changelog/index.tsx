import React from 'react'
import LogItem from '@components/LogItem'
import mockData from '@/pages/index/mockData.json'
import cls from 'classnames'
import styles from './index.module.scss'

const Changelog: React.FC = () => {
  const changelog = mockData.data.banner.changelog
  return (
    <>
      <div className={cls(styles.wrapper, 'relative')}>
        <div className={cls(styles.logWrapper, 'flex', 'flex-col')}>
          {changelog.map((item, index) => (
            <LogItem key={`${index}_${item.id}`} {...item} />
          ))}
        </div>
        <a className={cls(styles.more, 'block', 'relative', 'cursor-pointer')}>
          更多日志
        </a>
      </div>
    </>
  )
}

export default Changelog

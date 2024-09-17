import React from 'react'
import LoadItem from '@components/LoadItem'
import mockData from '@/pages/index/mockData.json'
import cls from 'classnames'
import platformIcons from '@/constants/platformIcons'
import styles from './index.module.scss'

const Download: React.FC = () => {
  const downloads = mockData.data.banner.download
  return (
    <>
      <div className={cls(styles.wrapper, 'flex')}>
        {downloads.map((item, index) => {
          return (
            <LoadItem
              key={`${item.id}_${index}`}
              {...item}
              icon={platformIcons.get(item.name)!}
            />
          )
        })}
      </div>
    </>
  )
}

export default Download

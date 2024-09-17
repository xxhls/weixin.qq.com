import React from 'react'
import OtherItem from '@components/OtherItem'
import mockData from '@/pages/index/mockData.json'
import platformIcons from '@/constants/platformIcons'
import cls from 'classnames'
import styles from './index.module.scss'

const Others: React.FC = () => {
  const downloads = mockData.data.banner.others
  return (
    <>
      <div className={cls(styles.wrapper, 'flex')}>
        {downloads.map((item, index) => {
          return (
            <OtherItem
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

export default Others

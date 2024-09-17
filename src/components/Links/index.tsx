import React from 'react'
import LinkItem from '@components/LinkItem'
import mockData from '@/pages/index/mockData.json'
import cls from 'classnames'
import styles from './index.module.scss'

const Links: React.FC = () => {
  const linksData = mockData.data.links
  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={cls(
            styles.linkWrapper,
            'box-content',
            'flex',
            'flex-wrap',
          )}
        >
          {linksData.map((item, index) => {
            return (
              <>
                <LinkItem key={`${item.id}_${index}`} {...item} />
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Links

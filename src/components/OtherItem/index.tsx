import React from 'react'
import cls from 'classnames'
import styles from './index.module.scss'

interface OtherItemProps {
  name: string
  icon: string
  link?: string
}

const OtherItem: React.FC<OtherItemProps> = ({ name, icon, link }) => {
  const handleClick = () => {
    if (link) {
      // window.open(link)
    }
  }
  return (
    <>
      <div className={styles.wrapper} onClick={handleClick}>
        <div className={cls(styles.btnWrapper, 'cursor-pointer')}>
          <div
            className={styles.icon}
            style={{
              backgroundImage: `url(${icon})`,
            }}
          ></div>
          <div className={styles.name}>{name}</div>
        </div>
      </div>
    </>
  )
}

export default OtherItem
export type { OtherItemProps }

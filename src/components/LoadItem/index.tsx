import React from 'react'
import cls from 'classnames'
import styles from './index.module.scss'

interface LoadItemProps {
  name: string
  icon: string
  link?: string
  popupNode?: React.ReactNode
}

const LoadItem: React.FC<LoadItemProps> = ({ name, icon, link, popupNode }) => {
  const handleClick = () => {
    if (link) {
      window.open(link)
    } else if (popupNode) {
      alert('Popup')
    }
  }
  return (
    <>
      <div
        className={cls(styles.wrapper, 'cursor-pointer')}
        onClick={handleClick}
      >
        <div
          className={styles.icon}
          style={{
            backgroundImage: `url(${icon})`,
          }}
        ></div>
        <div className={styles.name}>{name}</div>
      </div>
    </>
  )
}

export default LoadItem
export type { LoadItemProps }

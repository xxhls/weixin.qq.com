import React from 'react'
import Changelog from '@components/Changelog'
import Download from '@components/Download'
import Others from '@components/Others'
import cls from 'classnames'
import styles from './index.module.scss'

const Banner: React.FC = () => {
  return (
    <>
      <div className={cls(styles.wrapper, 'relative', 'overflow-hidden')}>
        <div className={cls(styles.bgImage, 'h-full')}></div>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}></div>
        </div>
        <Changelog />
        <Download />
        <Others />
      </div>
    </>
  )
}

export default Banner

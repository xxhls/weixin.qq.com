import React from 'react'
import styles from './index.module.scss'

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>{children}</div>
    </>
  )
}

export default Layout

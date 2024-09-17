import React from 'react'
import styles from './index.module.scss'

interface LinkItemProps {
  id: number
  url: string
  name: string
  logo?: string
}

const LinkItem: React.FC<LinkItemProps> = ({ url, name, logo }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <a href={url}>
          {!!logo && (
            <div className={styles.logo}>
              <img src={logo} />
            </div>
          )}
          <p className={styles.name}>{name}</p>
        </a>
      </div>
    </>
  )
}

export default LinkItem
export type { LinkItemProps }

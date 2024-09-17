import React from 'react'
import cls from 'classnames'
import styles from './index.module.scss'

interface LogItemProps {
  text: string
  link: string
  date: string
}

const LogItem: React.FC<LogItemProps> = ({ text, link, date }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <a className={cls(styles.text, 'grow')} href={link}>
          {text}
        </a>
        <span className={styles.date}>{date}</span>
      </div>
    </>
  )
}

export default LogItem

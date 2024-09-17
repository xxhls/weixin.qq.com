import React from 'react'
import styles from './index.module.scss'
import mockData from '@/pages/index/mockData.json'

const Footer: React.FC = () => {
  const footerData = mockData.data.footer
  return (
    <>
      <footer className={styles.wrapper}>
        <p className={styles.info}>
          {footerData.infoData.map((item, index) => {
            return (
              <>
                <a key={`${item.id}_${index}`} href={item.url}>
                  {item.name}
                </a>
                {index !== footerData.infoData.length - 1 && (
                  <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                )}
              </>
            )
          })}
        </p>
        <p className={styles.record}>
          <a href={footerData.recordData.url}>{footerData.recordData.name}</a>
        </p>
        <p className={styles.copyright}>
          <a href={footerData.copyrightData.url}>
            {footerData.copyrightData.name}
          </a>
        </p>
      </footer>
    </>
  )
}

export default Footer

import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.footerWrap}>
        <div className={styles.lhs}>© 2023 Company</div>
        <div className={styles.rhs}>
            <span className='link-btn mr-2'>About</span>
            <span className='link-btn mr-2'>Terms of Use</span>
            <span className='link-btn'>Contact</span>
        </div>
    </div>
  )
}

export default Footer
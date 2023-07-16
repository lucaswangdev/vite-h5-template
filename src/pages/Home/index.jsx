import React from 'react'
import styles from './index.module.less'
import { useAppStore } from '../../store'


export default function Home() {
  const bears = useAppStore((state) => state.bears)
  return <div className={styles.home}>
    Home Page
    <p>bears: {bears}</p>
  </div>
}
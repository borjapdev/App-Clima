import { ReactNode } from "react";
import styles from './alert.module.css'


export default function Alert({children}: {children : ReactNode}) {
  return (
    <div className={styles.alert}>{children}</div>
  )
}

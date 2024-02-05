import { twMerge } from 'tailwind-merge'
import styles from './Spinner.module.css'

interface SpinnerProps {
    className?: string
}

export default function Spinner({className}: SpinnerProps) {
  return (
    <span className={twMerge(styles.loader, className)} />
  )
}

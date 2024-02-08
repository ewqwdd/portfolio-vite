import styles from './FacebookLoader.module.css'

interface FacebookLoaderProps {
    className?: string
}

export default function FacebookLoader({className}: FacebookLoaderProps) {
  return (
    <div className={styles['lds-facebook'] + ' ' + className}><div></div><div></div><div></div></div>
  )
}

import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Aleksi Hannula - Portfolio</title>
      </Head>
      <div className={styles.description}>
        <h1>Aleksi Hannula - Portfolio</h1>
        <h2>This project is a work-in-progress portfolio built by using Next.js and React</h2>
      </div>
    </div>
  )
}

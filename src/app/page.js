import styles from './page.module.css'
import Head from 'next/head'
import ProfileSection from './components/ProfileSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Aleksi Hannula - Portfolio</title>
      </Head>
      <ProfileSection />
    </main>
  )
}

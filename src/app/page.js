//import styles from './page.module.css'
import ProfileSection from './components/ProfileSection'
import Navbar from './components/Navbar'

export const metadata = {
    title: 'Aleksi Hannula - Portfolio',
    description: 'Aleksi Hannula is a software developer from Finland. This is his W-I-P portfolio.',
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <ProfileSection />
    </main>
  )
}

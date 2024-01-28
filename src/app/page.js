import HomeAbout from '@/widgets/HomeAbout'
import HomeBanner from '@/widgets/HomeBanner'

export default function Home() {
  return (
    <main className='bg-secondary'>
      <HomeBanner />
      <HomeAbout/>
    </main>
  )
}

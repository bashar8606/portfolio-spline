import HomeAbout from '@/widgets/HomeAbout'
import HomeBanner from '@/widgets/HomeBanner'
import HomeProjects from '@/widgets/HomeProjects'
import HomeSkill from '@/widgets/HomeSkill'
import HomeStrip from '@/widgets/HomeStrip'

export default function Home() {
  return (
    <main className='bg-secondary'>
      <HomeBanner />
      <HomeAbout/>
      <HomeStrip/>
      <HomeProjects data={aboutData}/>
      <HomeSkill/>
    </main>
  )
}
const aboutData = {
  cards: [
    {
      img: {
        url: "/assets/images/icons/icon-about1.svg",
        alt: ""
      },
      title: "Expertise & Innovation",
      description: "Backed by a team of educational experts and technology innovators"
    }, {
      img: {
        url: "/assets/images/icons/icon-about2.svg",
        alt: ""
      },
      title: "Community-Centric Approach",
      description: "Join a thriving community of educators, learners, institutions collaborating to shape the future of education."
    }, {
      img: {
        url: "/assets/images/icons/icon-about3.svg",
        alt: ""
      },
      title: "Tailored Learning Journeys",
      description: "Our focus is on creating personalized learning experiences, engagement and understanding"
    },
  ]
}

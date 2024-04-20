import HomeAbout from '@/widgets/HomeAbout'
import HomeBanner from '@/widgets/HomeBanner'
import HomeProjects from '@/widgets/HomeProjects'
import HomeSkills from '@/widgets/HomeSkills'
import HomeVision from '@/widgets/HomeVision'
import HomeGlobe from '../../public/asd/src/widgets/HomeGlobe'

export default function Home() {
  return (
    <main className='bg-secondary'>
      <HomeBanner />
      <HomeGlobe/>
      <HomeAbout/>
      {/* <HomeVision/> */}
      <HomeProjects data={aboutData}/>
      <HomeSkills data={chooseData}/>
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


const chooseData =
{
  title: "Why Choose Us",
  title_sub: "EducationTechPlus",
  data: [{
    img: {
      url: "/assets/images/t1.png",
      alt: ""
    },
    title: "Frontend<br/> Development",
    description:"Backed by a team of educational experts and technology innovators, we continuously evolve to bring you the best in educational tools and resources."
  }, {
    img: {
      url: "/assets/images/t2.png",
      alt: ""
    },
    title: "Interaction<br/> Development",
    description:"Join a thriving community of educators, learners, and institutions collaborating to shape the future of education. Share insights, resources, and experiences to enhance learning outcomes."
  },{
    img: {
      url: "/assets/images/t3.png",
      alt: ""
    },
    title: "UI/UX<br/>Designing",
    description:"Our focus is on creating personalized learning experiences, ensuring engagement, understanding, and success for every student."
  }]
}


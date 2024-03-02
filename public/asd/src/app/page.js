import HomeAbout from '@/widgets/HomeAbout'
import HomeApp from '@/widgets/HomeApp'
import HomeBanner from '@/widgets/HomeBanner'
import HomeChoose from '@/widgets/HomeChoose'
import HomeFeatures from '@/widgets/HomeFeatures'
import HomeJoin from '@/widgets/HomeJoin'
import HomePrograms from '@/widgets/HomePrograms'
import HomeTab from '@/widgets/HomeTab'
import HomeTestimonials from '@/widgets/HomeTestimonials'

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <HomeAbout  data={aboutData} />
      <HomeFeatures  id="whatweoffer" />
      <HomePrograms  id="ourprograms" data={programData} />
      <HomeTab id="aboutus"  />
      <HomeChoose  id="whychooseus" data={chooseData} />
      <HomeApp   />
      {/* <HomeTestimonials  id="testimonials" data={testimonialData} /> */}
      <HomeJoin />
    </main>
  )
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
    title: "Expertise & Innovation",
    description:"Backed by a team of educational experts and technology innovators, we continuously evolve to bring you the best in educational tools and resources."
  }, {
    img: {
      url: "/assets/images/t2.png",
      alt: ""
    },
    title: "Community-Centric Approach",
    description:"Join a thriving community of educators, learners, and institutions collaborating to shape the future of education. Share insights, resources, and experiences to enhance learning outcomes."
  },{
    img: {
      url: "/assets/images/t3.png",
      alt: ""
    },
    title: "Tailored Learning Journeys",
    description:"Our focus is on creating personalized learning experiences, ensuring engagement, understanding, and success for every student."
  }]
}


const programData = {
  title: "Our Programs",
  title_sub: "Comprehensive Learning Progams",
  programs: [
    {
      title: "Personalised learning app to learn anytime, anywhere",
      category: "Class 4 - 12",
      img: {
        url: "/assets/images/shape_3d1.png",
        alt: ""
      }
    }, {
      title: "Specially crafted early learning program for young minds ",
      category: "Class LKG - 3",
      img: {
        url: "/assets/images/shape_3d2.png",
        alt: ""
      }
    }, {
      title: "Comprehensive learning program for JEE / NEET preparation",
      category: "JEE / NEET",
      img: {
        url: "/assets/images/shape_3d3.png",
        alt: ""
      }
    },
  ]
}

const testimonialData = {
  title: "Testimonials",
  testimonials: [
    {
      title: "“ Personalized learning path “",
      description: "Our focus is on creating personalized learning experiences, ensuring engagement, understanding, and success for every student.",
      person: {
        name: "Tidiyo Carls",
        designation: "Student",
        img: {
          url: "/assets/images/p1.png",
          alt: ""
        }
      }
    }, {
      title: "“ Personalized learning path “",
      description: "Our focus is on creating personalized learning experiences, ensuring engagement, understanding, and success for every student.",
      person: {
        name: "Tidiyo Carls",
        designation: "Student",
        img: {
          url: "/assets/images/p1.png",
          alt: ""
        }
      }
    }, {
      title: "“ Personalized learning path “",
      description: "Our focus is on creating personalized learning experiences, ensuring engagement, understanding, and success for every student.",
      person: {
        name: "Tidiyo Carls",
        designation: "Student",
        img: {
          url: "/assets/images/p1.png",
          alt: ""
        }
      }
    },
  ]
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
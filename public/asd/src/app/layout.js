import { Red_Hat_Display } from 'next/font/google';
import Header from "@/widgets/Header";
import Footer from '@/widgets/Footer';
import '../style/global.scss';
import GlobalProviders from '@/components/GlobalProviders';
import { WebVitals } from '@/components/WebVitals';

const fontPrimary = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--ff-primary',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  title: 'EducationTechPlus',
  description: 'Join a thriving community of educators, learners, institutions collaborating to shape the future of education.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontPrimary.variable}>
      <WebVitals />
        <GlobalProviders>
          <Header />
          {children}
          <Footer />
        </GlobalProviders>
      </body>
    </html>
  )
}


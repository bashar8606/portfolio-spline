import { Red_Hat_Display , DM_Sans } from 'next/font/google';
import Script from 'next/script';
import Header from "@/widgets/Header";
import Footer from '@/widgets/Footer';
import '../style/global.scss';
import GlobalProviders from '@/components/GlobalProviders';

const fontPrimary = DM_Sans({
  subsets: ['latin'],
  variable: '--ff-primary',
  weight: ['300', '400', '600', '700'],
  display: "swap",
  adjustFontFallback: false
})

export const metadata = {
  title: 'Bashar Ahammed | Frontend Developer , Interactive Developer, UI Designer ',
  description: 'Bashar Ahammed is a skilled Frontend Developer, Interactive Developer, and UI Designer, specializing in creating visually stunning and highly interactive web experiences. With a keen eye for design and a passion for user-friendly interfaces, Bashar brings creativity and technical expertise to every project.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-M4YJ9N2XYJ`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M4YJ9N2XYJ');
          `}
        </Script>
      </head>
      <body className={fontPrimary.className} style={{'--ff-primary' : fontPrimary.variable}}>
        <GlobalProviders>
          <Header />
          {children}
          <Footer />
        </GlobalProviders>
      </body>
    </html>
  )
}


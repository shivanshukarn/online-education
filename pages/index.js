import Head from 'next/head'
import Header from './Header'
import Imaging from './Imaging'
import Services from './Services'
import Courses from './Courses'
import FAQ from './FAQ'
import Contact from './Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Online Education</title>
        <meta name="description" content="Online Education" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header/>
      <Imaging/>
      <Services/>
      <Courses/>
      <FAQ/>
      <Contact/>

    </div>
  )
}

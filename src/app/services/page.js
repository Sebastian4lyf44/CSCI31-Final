import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../footer'
export default function About() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Services" />
        <PageContent>If you are looking to make your website more Interactive and bring more clients from all over the globe please head over to our contact page, Wondering what we have to offer Please check out our Product page.</PageContent>
      </div>
      <Footer />
    </div>
  )
}

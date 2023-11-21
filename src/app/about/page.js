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
        <PageTitle title="About" />
        <PageContent>This Website is all about making the impossible turned possible; While making coding fun and Interactive and showing that hard work really does pay off.</PageContent>
      </div>
      <Footer />
    </div>
  )
}

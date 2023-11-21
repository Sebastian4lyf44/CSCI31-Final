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
        <PageTitle title="Products" />
        <PageContent>Ideas are Still Flowing Please check back Soon. Thank you for your patients.</PageContent>
      </div>
      <Footer />
    </div>
  )
}

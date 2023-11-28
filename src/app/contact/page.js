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
        <PageTitle title="Contact" />
        <PageContent>
          <p>
            Call us at:{' '}
            <a href="tel:+17075304674" className="text-blue-300 hover:text-blue-500">
              707-530-4674
            </a>{' '}
          </p>
          <p>
            {' '}
            Any other Inquires Please Email us at:{' '}
            <a href="mailto:Stimpsonsebastian094@Icloud.com" className="text-blue-300 hover:text-blue-500">
              Stimpsonsebastian094@Icloud.com
            </a>{' '}
          </p>
        </PageContent>
      </div>
      <Footer />
    </div>
  )
}

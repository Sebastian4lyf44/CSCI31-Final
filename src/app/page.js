import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'

export default function Home() {
  return (
  <div>
    <Navbar />
    <div className="m-12">
    <PageTitle title="Home" />
    <PageContent>
      
    </PageContent>
    <Card />
    </div>
  </div>
    )
}

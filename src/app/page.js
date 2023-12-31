import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'
import { createClient } from '@supabase/supabase-js'
import Footer from './footer'
import { findCards } from './utils/supabase-client'

export const revalidate = 0

export default async function Home() {
  const Cards = await findCards()
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />

        <div className="bg-gray-400 flex flex-col items-center p-8">
          <h1 className="text-3xl font-bold mb-4">Life is too short to cry</h1>
          <p className="text-gray-700 mb-8">Below are some beautiful moments in life.</p>
          <div className="flex space-x-4">
            {Cards.map((Card_Data, idx) => (
              <Card
                key={idx}
                title={Card_Data.title}
                description={Card_Data.description}
                img={Card_Data.img}
                alt={Card_Data.subtitle}
              />
            ))}
          </div>
          <div className="additional-element mt-12 text-center prose">
            <h2 className="text-2xl font-bold mb-2">At Dawn&rsquo;s First Light (A Journey Through Day)</h2>
            <p className="text-black">
              In tender morning&rsquo;s tender light, a tale begins to unfold,
              <br />
              A narrative knit with threads of gold, as the sun heralds a newborn world.
              <br />
              The sun, a radiant maiden, rises with hopeful gleam,
              <br />
              Lending life a gentle touch, a canvas for our dream.
              <br />
              <br />
              As daylight yawns and stretches out into the high noon,
              <br />
              Life&rsquo;s pace quickens beneath the sun, the resolute afternoon.
              <br />
              Our hopes, now bold, bask in the relentless, beaming light,
              <br />
              We forge ahead, our paths aflame with day&rsquo;s pure, potent might.
              <br />
              <br />
              But as the sun inches towards a softer, gentle hue,
              <br />
              The world dons a quiet calm, as if it too, bids adieu.
              <br />
              In the tender bosom of dusk, our memories nestle tight,
              <br />
              As the sun casts long shadows, a prelude to tranquil night.
              <br />
              <br />
              The sunset, a wise old sage, paints skies with stories spun,
              <br />
              Of love and loss, of battles fought, of victories won.
              <br />
              In the muted whispers of twilight, life&rsquo;s truths are softly spun,
              <br />
              As we bask in the glow of a journey, with grace, so beautifully done.
              <br />
              <br />
              As night enfolds the tired world in its soft, gentle sweep,
              <br />
              We, now wise with whispered truths, in tender silence, sleep.
              <br />
              Ready to dream once more beneath stars&rsquo; soft, silver light,
              <br />
              Awaiting the promise of dawn, and life&rsquo;s beautiful flight.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

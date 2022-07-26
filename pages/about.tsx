import H1 from 'components/elements/H1'
import Image from 'next/image'

function about() {
  return (
    <main className='xl:px-12 xl:pt-12 max-w-8xl mx-auto'>
      <article>
        <div className='relative w-full mb-16'>
          <Image src={'/img/NECR_TitleCard.jpeg'} layout='responsive' width={1200} height={630} />
        </div>
        <section>
          <H1>About the Project</H1>
          <p>
            <strong>The Nebraska Creative</strong> is your go-to resource for discovering design,
            advertising, and creative agencies in the heart of the Midwest – aka good ol’ Nebraska.
            With the mindset of collaboration over competition, The Nebraska Creative embraces a
            diverse range of creative shops to showcase the assets and skills each has to offer –
            helping you find the perfect team of individuals ready to refresh your business and
            bring new ideas to life.
          </p>
          <p>
            Aside from helping you elevate your business, The Nebraska Creative exists to encourage
            agencies and shops to stand together so we can collectively put ourselves on the map
            alongside other cities and states that are well-known creative hubs. Nebraska may be
            known as the Cornhusker State and as a prominent player in Silicon Prairie, but it’s
            also home to a hell of a lot of creative studios that can hold their own against the big
            guys.
          </p>
          <p>We’re better together. It’s time to make our mark on the map.</p>
        </section>
      </article>
    </main>
  )
}

export default about

import H1 from 'components/elements/typography/H1'
import Image from 'next/image'
import faq from '@data/faq'
import Main from '@modules/Main'
import H2 from 'components/elements/typography/H2'
import Section from '@modules/Section'
import NECR_TitleCard from 'public/img/NECR_TitleCard.jpeg'
function about() {
  return (
    <Main>
      <div>
        <div className='relative w-full mb-16'>
          <Image
            src={NECR_TitleCard}
            alt={
              'Nebraska Creative is a resource for discovering design, advertising, and creative agencies in Nebraska'
            }
          />
        </div>
        <Section id={'about-project'}>
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
        </Section>
      </div>
      <Section id={'faq'}>
        <H2>FAQ</H2>
        <div className='grid grid-cols-1 gap-y-6'>
          {faq.map((faq, index) => {
            return (
              <div key={index}>
                <h3 className='text-lg font-semibold max-w-2xl'>{faq.q}</h3>
                <p
                  className='mt-4 max-w-2xl'
                  dangerouslySetInnerHTML={{
                    __html: faq.a,
                  }}
                />
              </div>
            )
          })}
        </div>
      </Section>
    </Main>
  )
}

export default about

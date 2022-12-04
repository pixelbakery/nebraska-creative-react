import { NextSeo } from 'next-seo'

const Section_NextSeo = ({ name, description, slug }) => {
  return (
    <NextSeo
      title={`${name}`}
      description={`${description}`}
      canonical={`https://nebraska-creative.com/studios/${slug}`}
      openGraph={{
        url: `https://nebraska-creative.com/studios/${slug}`,
        title: `${name}`,
        description: `${description}`,
        images: [
          {
            url: 'https://nebraska-creative.com/img/NECR_TitleCard.jpeg',
            width: 1200,
            height: 630,
            alt: `Read all about why ${name} is a great creative studio.`,
            type: 'image/jpeg',
          },
        ],
        siteName: 'Nebraska Creative',
      }}
      twitter={{
        handle: '@pixelbakerylnk',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
  )
}

export default Section_NextSeo

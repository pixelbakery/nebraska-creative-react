import Image from 'next/image'

const Headshot = ({ l, name }) => {
  return (
    <>
      {l.headshot ? (
        <Image
          width={500}
          height={500}
          className={'object-cover filter grayscale'}
          src={l.headshot}
          alt={`${l.name} is the ${l.title} for ${name}`}
        />
      ) : (
        <Image
          width={500}
          height={500}
          className={'object-cover filter grayscale'}
          src={'/img/placeholder_square.jpg'}
          alt={`${l.name} is the ${l.title} for ${name}`}
        />
      )}
    </>
  )
}
export default Headshot

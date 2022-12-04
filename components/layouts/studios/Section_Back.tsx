import Section from '@modules/Section'
import Button_Filled_Back from '@ui/Button_Filled_Back'

const Section_Back = () => {
  return (
    <Section id={'back'}>
      <Button_Filled_Back href={'/studios'} text={'Creative Shops'} />
    </Section>
  )
}

export default Section_Back

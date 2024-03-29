import H1 from 'components/elements/typography/H1'
import Section from '@modules/Section'
import { Main } from '@modules'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useState } from 'react'
import { SendEmail_Contact } from '@lib/helpers'

import {
  ContactForm_NotInterested,
  ContactForm_ThankYou,
  ContactForm_Newsletter,
  ContactForm_TextInput,
  ContactForm_TextAreaInput,
  ContactForm_EmailInput,
  ContactForm_Errors,
  ContactForm_Submit,
  ContactForm_Solicitation,
} from '@forms/ContactForm_Parts'

interface FormInputs {
  name: string
  entity: string
  multipleErrorInput: string
  newsletter: boolean
  message: string
  soliciting: any
  subject: boolean
  phone: string
  email: string
}

const yupValidation = Yup.object().shape({
  name: Yup.string()
    .required(`Please enter your name, stranger.`)
    .min(5, `Your name is absolutely not that short`)
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Name can only contain Latin letters.',
    )
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, 'Please enter your full name.'),
  subject: Yup.string()
    .required('Please enter a subject line.')
    .min(12, `That's a pretty short subject line.`),
  message: Yup.string()
    .required('Please enter a message, you goose.')
    .min(100, `Please write something a bit more... in-depth.`),
  phone: Yup.string().test('len', 'Please enter a valid phone number', (val) => {
    if (val === undefined) {
      return true
    }
    return val.length === 0 || val.length === 10
  }),
  email: Yup.string()
    .email(`There's no way that's an acutal email address.`)
    .required(`We can't really do much without your email.`)
    .min(6, `C'mon man that's not your email.`)
    .max(255, `There's no way your email address is that long.`),
  soliciting: Yup.string().required('Please select a solicitation answer.').nullable(),
})

const onSubmit = (data, setHideForm, setSubmitted) => {
  // SendToMonday_ContactForm(data)
  if (data.soliciting === 'false') {
    SendEmail_Contact(data)
    // SendToMailchimp(data, 'Contact Form')
    setSubmitted(true)
  } else {
    //tell them to fuck off if they're trying to sell us SEO bullshit
    setHideForm(true)
  }
}

const Form = ({ register, errors, control, hideForm, handleSubmit, setSubmitted, setHideForm }) => {
  return (
    <form
      noValidate
      className='my-12 max-w-2xl  grid grid-cols-2 gap-4'
      onSubmit={handleSubmit((data) => onSubmit(data, setHideForm, setSubmitted))}
    >
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName={'name'}
        placeHolder={'name'}
        className='col-span-2'
      />
      <ContactForm_EmailInput
        register={register}
        errors={errors}
        fieldName={'email'}
        placeHolder={'email'}
        className='col-span-2'
      />

      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName={'entity'}
        placeHolder={`company / entity`}
        className={'col-span-2 lg:col-span-1'}
      />
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName={'subject'}
        placeHolder={`what's this all about?`}
        className={'col-span-2'}
      />
      <ContactForm_TextAreaInput
        register={register}
        errors={errors}
        fieldName={'message'}
        className='col-span-2'
        placeHolder='sup?'
        rows={5}
      />
      <ContactForm_Newsletter register={register} />
      <ContactForm_Solicitation register={register} errors={errors} />
      <ContactForm_Submit valueText='Submit' disabled={hideForm} />
      <ContactForm_Errors className={'col-span-2'} errors={errors} />
    </form>
  )
}

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [hideForm, setHideForm] = useState(false)

  const setFormOptions = {
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver(yupValidation),
    shouldFocusError: true,
    shouldUnregister: false,
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm<FormInputs>(setFormOptions as any)

  return (
    <Main>
      <Section id='contact'>
        <H1>Contact</H1>
        <p>
          Reach out to us and let us know if there's anything you need. Here you can request changes
          to your listing, request removal, or request to have your studio added.
        </p>
        <p>
          If you are wanting to add your studio, please be sure to include as much information as
          you can in your message. Take a look at other studios on our list and use that as a
          template for the info you should provide. Giving us this info helps us make your listing
          as accurate as possible.
        </p>
        <p>
          Want your creative shop to be on this list? Make sure you meet the requirements below.
        </p>
        <p className='font-semibold'>Requirements:</p>
        <ul>
          <li>
            – Your shop must primarily focus on some form of design. We do not accept marketing or
            SEO agencies
          </li>
          <li> – Your shop must have been founded more than one year ago </li>
          <li>
            – You must have more than two people on your team. Otherwise, we consider you a
            freelancer
          </li>
          <li> – Your shop must be held in good standing within the Nebraska community. </li>
          <li> – Your shop must have a website</li>
        </ul>
        <div>
          {submitted ? (
            <ContactForm_ThankYou />
          ) : !hideForm ? (
            <Form
              register={register}
              errors={errors}
              control={control}
              hideForm={hideForm}
              handleSubmit={handleSubmit}
              setSubmitted={setSubmitted}
              setHideForm={setHideForm}
            />
          ) : (
            <ContactForm_NotInterested />
          )}
        </div>
      </Section>
    </Main>
  )
}
export default Contact

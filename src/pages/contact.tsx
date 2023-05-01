// Components
import Button from '@/components/input/core/Button'
import Tagline from '@/components/data-display/core/Tagline'
// React
import { useRef } from 'react'
// Services
import emailjs from '@emailjs/browser'
// Type
import type { FormEvent } from 'react'

/**
* The contact section of application
* @returns The Contact section component
*/
export default function ContactPage () {
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const node = formRef.current

    if (node) {
      emailjs.sendForm(
        String(process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY),
        String(process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY),
        formRef.current,
        String(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
      ).then(() => {
        alert('Hemos recibido tu mensaje')
      }, () => {
        alert('Lo sentimos, hubo un problema al intentar enviar el mensaje')
      })
    }
  }

  return (
    <section className='max-w-4xl px-[4%] my-32 mx-auto'>
      <div className='px-10 md:px-[9%] space-y-12'>
        <div className='space-y-3'>
          <Tagline>
            ¿Tomamos un café?
          </Tagline>
          <h1 className='text-5xl md:text-6xl'>
            Pongamosnos en contacto
          </h1>
        </div>
        <form
          className='space-y-8'
          onSubmit={sendEmail}
          ref={formRef}
        >
          <div>
            <input
              className='w-full px-4 py-3 bg-zinc-200 rounded-xl resize-none'
              type='text'
              name='contact_name'
              id='contact_name'
              placeholder='Tu nombre'
              required
            />
          </div>
          <div>
            <input
              className='w-full px-4 py-3 bg-zinc-200 rounded-xl resize-none'
              type='email'
              name='contact_email'
              id='contact_email'
              placeholder='Tu Email'
              required
            />
          </div>
          <div>
            <textarea
              className='w-full px-4 py-3 bg-zinc-200 rounded-xl resize-none'
              name='contact_description'
              id='contact_description'
              rows={1}
              placeholder='Cuentanos sobre tu proyecto'
              defaultValue=''
              required
            />
          </div>
          <div className='pt-6 flex justify-center'>
            <Button type='submit'>
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

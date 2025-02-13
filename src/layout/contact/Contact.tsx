import { FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';
import SectionHeader from '../components/section-header/SectionHeader';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Contact = () => {
  const [ response, setResponse ] = useState<string>('unsent');
  const [ isValid, setIsValid ] = useState<boolean | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs.sendForm('service_nzb16q8', 'template_sdcvvpi', e.currentTarget, 'CwuWBhkep40JC8Sn0')
      .then(() => {
        setResponse('sent');
      }, (error) => {
        setResponse(`error: ${error}`);
      });
      e.currentTarget.reset();
  };

  const responseDisplay = () => {
    if ( response === 'error' ) return ( <div className='response response__error'>An error Occured</div> );
    else if ( response === 'sent' ) return ( <div className='response response__sent'>Message Sent</div> );
    else return ( <></> );
  };


  const validateEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const email: string = event.target.value;
    const regex: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    setIsValid(regex.test(email));
  };

  return (
    <div className='content__screen'>
      <SectionHeader title='Contact'/>

      <div className="contact__grid">

        <div className='contact__info'>
          <article>
            I'm always open to new opportunities, collaborations, and conversations. Whether you have a project idea, a job opportunity, or just want to connect, feel free to reach out!
          </article>
          <div className='contact__info--buttons-wrapper'>
            <a
              className='contact__info--button linkedin'
              href='https://www.linkedin.com/in/michaelslatondev/'
              target='_blank'
            >
              <span>
                <FontAwesomeIcon data-testid='phone signal' icon={faLinkedin as IconProp}/>
              </span>
              LinkedIn
            </a>
            <a
              className='contact__info--button github'
              href='https://github.com/michaelslaton'
              target='_blank'
            >
              <span>
                <FontAwesomeIcon data-testid='phone signal' icon={faGithub as IconProp}/>
              </span>
              GitHub
            </a>
          </div>
        </div>

        <div className='contact__form-wrapper'>
          <div className={`contact-response__wrapper ${response}`}>
            {responseDisplay()}
          </div>
          <span>Email</span>
          <form
            className='contact__form'
            onSubmit={(e) => sendEmail(e)}
          >
            <label>Name</label>
            <input
              className='contact__input'
              type='text'
              name='user_name'
              required
            />

            <label>Email</label>
            <input
              className='contact__input'
              type='email'
              name='user_email'
              onChange={validateEmail}
              required
              style={{ borderColor: isValid === null ? '' : isValid ? '#00ff44' : '#ff0000' }}
            />

            <label>Message</label>
            <textarea
              className='contact__input'
              name='message'
              rows={8}
              required
            />

            <div className='contact__form--buttons-wrapper'>
              <button
                className='contact__form-submit'
                type='submit'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
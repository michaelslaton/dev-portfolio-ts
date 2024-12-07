import { FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';
import Divider from '../components/divider/Divider';
import './contact.css';

const Contact: React.FC = () => {
  const [response, setResponse] = useState<string>('unsent');
  const [isValid, setIsValid] = useState<boolean | null>(null);

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

  const responseDisplay = (): JSX.Element => {
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
      <div className='page-title__wrapper'>
        <h1 className='page-title reveal'>
            Contact
        </h1>
      </div>
      <Divider/>

      <div className='contact-response-wrapper'>
        {responseDisplay()}
      </div>

      <div className='contact__grid'>
        <div>
          <p>Lets work together!</p>
        </div>

        <div className='contact__form-wrapper'>
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
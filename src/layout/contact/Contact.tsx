import { FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import Divider from '../components/divider/Divider';

const Contact: React.FC = () => {

  const [response, setResponse] = useState('unsent');

  function sendEmail(e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    emailjs.sendForm('service_nzb16q8', 'template_sdcvvpi', e.currentTarget, 'CwuWBhkep40JC8Sn0')
      .then(() => {
        setResponse('sent');
      }, (error) => {
        setResponse(`error: ${error}`);
      });
      e.currentTarget.reset();
  };

  function responseDisplay(){
    if ( response === 'error' ) return ( <div className='response response__error'>An error Occured</div> );
    else if ( response === 'sent' ) return ( <div className='response response__sent'>Message Sent</div> );
    else return ( '' );
  }

  return (
    <div className='content__screen'>
      <div className='center'>
        <h1 className='page-title'>
          <div className="reveal">
            Contact
          </div>
        </h1>
      </div>
      <Divider/>

      <div className='contact-response-wrapper'>
        {responseDisplay()}
      </div>

      <form
        className='contact__form'
        onSubmit={(e) => sendEmail(e)}
      >
        
        <label>Name</label>
        <input className='contact__input' type='text' name='user_name' required/>

        <label>Email</label>
        <input className='contact__input' type='email' name='user_email' required/>

        <label>Message</label>
        <textarea className='contact__input' name='message' rows={8} required/>

        <button className='contact__form-submit' type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Contact;
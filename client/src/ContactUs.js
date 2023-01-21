import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Scale from './Images/Scale-rocket.png';
const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2pvzo7v', 'template_mb9joit', form.current, 'OS61Ph3027D8gJnTL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section className="mx-2 lg:mx-10 mt-44">
        <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:justify-center ">
                <div className="basis-1/2">
                    <div className="newsletter-inner">
                        <div className="newsletter-title">
                            <h1 className='text-6xl'>
                Scale <br /> with us <span className='pinky text-6xl'>.</span>
            </h1>
                            <p className='text-gray-400'>want to scale your tool with us &#127919; ? we make it right for you </p>
                        </div>
                        <div className="newsletter-form">                                                              
                            <form  ref={form} onSubmit={sendEmail}>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="&#128233; Enter your email address"
                                className="form-input py-2 pl-10 md:w-full lg:w-2/4 my-4 border bg-black border-solid border-pink-500 block leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:outline-none focus:shadow-outline-blue focus:border-pink-300 placeholder-gray-500 text-gray-200 rounded-md"
                                
                            />
                            <input type="text" name="user_message" className='p-4 w-full lg:w-2/4 border bg-black border-solid border-pink-500 block leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:outline-none focus:shadow-outline-blue focus:border-pink-300 placeholder-gray-500 text-gray-200 rounded-md' placeholder="Message"  />
                            <br />
                            <button type="submit" className='mx-6 Categorie'>Get in touch</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='basis-1/3'>
                    <div className="newsletter-image">
                      <img src={Scale} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactUs;

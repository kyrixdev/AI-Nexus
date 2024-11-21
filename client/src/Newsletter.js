import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // validate email
      if (!email.includes('@')) {
        throw new Error('❗Invalid email address.');
      }

      // send email to server
      const res = await fetch('http://66.11.118.4:5000/api/submit-email', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }

      // show success message
      setError(data.message);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="mx-2 lg:mx-10 mt-44">
        <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:justify-center ">
                <div className="basis-1/2">
                    <div className="newsletter-inner">
                        <div className="newsletter-title">
                            <h1 className='text-4xl lg:text-6xl'>
                Join our <br /> Newsletter<span className='pinky text-6xl'>.</span>
            </h1>
                            <p className='text-gray-400'>Want to stay updated on the latest tools and tutorials 📣? Sign up for our newsletter and never miss an update!</p>
                        </div>
                        <div className="newsletter-form">                                                              
                            <form onSubmit={handleSubmit} method='POST'>
                            <input
                                type="email"
                                placeholder="&#128233; Enter your email address"
                                className="form-input py-2 lg:pl-10 px-5 md:w-full lg:w-2/4 my-4 border bg-black border-solid border-pink-500 block leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:outline-none focus:shadow-outline-blue focus:border-pink-300 placeholder-gray-500 text-gray-200 rounded-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <button type="submit" className='lg:mx-6 Btn-color block mx-auto'>Subscribe</button>
                            {error && <p className='bg-stone-900 w-fit p-2 rounded-lg font-medium my-4 px-6 py-2 text-base'>{error}</p>}
                            </form>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
    </section>
  );
};

export default NewsletterForm;

import React from 'react'
import PinkHole from './Images/PinkHole.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faRobot} from '@fortawesome/free-solid-svg-icons'

const WhoAreWe = () => {
  return (
    <section className='flex mx-8 items-center'>
        <div className='w-1/2'>
            <h1 className='text-4xl'>
                WHO ARE WE <span className='pinky text-6xl'>.</span>
            </h1>
            <p className='ml-6 text-lg text-gray-400'>
            At AI Nexus, we believe in the power of artificial intelligence to transform the way we work and live. That's why we've created a platform that brings together all the resources you need to harness the power of AI for increased productivity. Whether you're a developer, researcher, or business professional, our platform offers a wide range of AI-based tools, resources, and information to help you improve your workflow, automate tasks, and gain insights from data. With AI Nexus, you'll have everything you need in one convenient place, making it the ultimate destination for all your AI needs. Join us on our mission to make AI accessible and understandable for everyone.  
            </p> 
            <div className='flex justify-center my-8'>
              <div className='Info__Card mx-4'>
                <div className='Info__Card__Icon'>
                  <FontAwesomeIcon icon={faUsers} size='2x' />
                </div>
                <div className='Info__Card__Text'>
                  <h1 className='text-xl'>1000+</h1>
                  <p className='text-lg text-gray-400'>Users/Month</p>
                </div>
              </div>
              <div className='Info__Card mx-4'>
              <div className='Info__Card__Icon'>
                  <FontAwesomeIcon icon={faUsers} size='2x' />
                </div>
                <div className='Info__Card__Text'>
                  <h1 className='text-xl'>1000+</h1>
                  <p className='text-lg text-gray-400'>Tools</p>
                </div>
              </div>
              <div className='Info__Card mx-4'>
              <div className='Info__Card__Icon'>
                  <FontAwesomeIcon icon={faRobot} size='2x' />
                </div>
                <div className='Info__Card__Text'>
                  <h1 className='text-xl'>100+</h1>
                  <p className='text-lg text-gray-400'>Tools</p>
                </div>
              </div>
            </div>
        </div>
        <div className='w-1/2'>
            <img src={PinkHole} alt="PinkHole" width={600} className='m-auto' />
        </div>
    </section>
  )
}

export default WhoAreWe
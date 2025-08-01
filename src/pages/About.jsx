import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewslatterBox from '../components/NewslatterBox'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
                <div className='flex gap-6 md:2/4 flex-col justify-center'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, quibusdam modi. Tempore dolore, sunt similique unde a laborum. Qui nemo, aspernatur nesciunt accusantium impedit odio labore modi accusamus eveniet consectetur.
                        Nulla, excepturi earum. Nulla debitis eius id, inventore ad optio, labore ut veniam numquam dolorum quo praesentium iste eligendi laboriosam aperiam sequi quam obcaecati sunt? Tempora, corrupti labore? Nihil, magni?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae amet exercitationem sit omnis inventore explicabo eius ab odio ipsum nulla impedit, alias facere, fuga molestias optio reprehenderit aliquid, tenetur neque!
                        Fugit similique quos maxime laborum aspernatur. Expedita reiciendis molestias explicabo ut dolor blanditiis dolorum rerum architecto ipsum nesciunt voluptatum sequi amet exercitationem est eligendi, eum inventore eaque. Illo, eos a.</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit explicabo ratione est ab reiciendis ut, quibusdam repudiandae earum neque esse iure, quidem aut blanditiis dolore unde sit, vero optio modi?
                        Aliquid sed possimus ipsa perferendis dolor corporis vel impedit molestias laborum! Beatae consequuntur rerum, ut dignissimos laboriosam a sed ad pariatur cum debitis quaerat fugiat explicabo molestias. Aperiam, non consectetur.</p>
                </div>
            </div>
            <div className='text-xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ducimus ipsa labore veniam, quidem, perferendis aliquid enim blanditiis, corporis neque expedita sit nesciunt nostrum placeat harum fugiat. Minus, porro officiis?
                    </p>
                </div>
                <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ducimus ipsa labore veniam, quidem, perferendis aliquid enim blanditiis, corporis neque expedita sit nesciunt nostrum placeat harum fugiat. Minus, porro officiis?
                    </p>
                </div>
                <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
                    <b>Exeptional customer service:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis pariatur omnis fugiat maxime totam quisquam nam porro, voluptate nobis vitae accusamus. Dolore veniam nihil omnis veritatis cupiditate nemo quis.</p>
                </div>
            </div>
            <NewslatterBox/>
        </div>
    )
}

export default About
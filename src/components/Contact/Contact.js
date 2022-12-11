import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const form = useRef();

    const handleMessage = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_murwu68', 'template_0tyhxbp', form.current, 'YuYw3IIM08me6DE2_')
            .then((result) => {
                console.log(result.text);
                toast.success("Succesfull send message")
            }, (error) => {
                console.log(error.text);
            });


    }

    return (
        <div className='flex justify-center items-center w-full h-2/4'>
            <div className=' px-10 py-8 lg:w-5/12 md:w-1/2 w-full'>
                <h1 className='font-bold text-3xl text-center mb-5'>Contact me</h1>
                <form ref={form} className='' onSubmit={handleMessage}>
                    <input required name="user_name" type="text" placeholder="Your Name" className="mb-3 input input-bordered input-primary w-full text-black" />
                    <input required name="user_email" type="email" placeholder="Your Email" className="mb-3 input input-bordered input-primary w-full text-black" />
                    <textarea required name="message" className="textarea textarea-primary mb-3 w-full text-black" placeholder="Message"></textarea>
                    <button className='w-full button' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
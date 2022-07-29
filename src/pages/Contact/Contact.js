import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, } = useForm(); 
    

    return (
        <div className=' '>
            <div className="lg:max-w-[1100px] mx-auto py-20 px-8">
                <h1 className='font-["Aclonica"] text-4xl text-center mb-4'>Get In Touch</h1>
                <div class="hero place-items-stretch">
                    <div class="hero-content flex-col-reverse lg:items-start lg:flex-row-reverse gap-y-16">
                        <div class="flex flex-col gap-4 text-center lg:w-2/5 lg:text-left lg:pl-20">
                            <div className="">
                                <h1 class="text-2xl text-primary font-bold font-[Oswald]">Contact With Us</h1>
                                <p class="subtitle ">
                                    Fell free to contact us 
                                </p>
                            </div>
                            <div className="">
                                <h1 className='font-bold text-lg'>Email</h1>
                                <p className=' text-[16px]'>fakegmail@gmail.com</p>
                            </div>
                            <div className="">
                                <h1 className='font-bold text-lg'>Phone</h1>
                                <p className='  text-[16px]'>8878573485802858</p>
                            </div>
                            <div className="">
                                <h1 className='font-bold text-lg'>Address</h1>
                                <address className=' text-[16px]'>Gulshan, Dhaka <br/> Bangladesh</address>
                            </div>
                        </div>
                        <div class="card flex-shrink-0 gap-5 rounded-none w-full lg:w-3/5 text-center lg:text-left">
                            <div className="">
                                <h1 className='text-primary text-2xl font-bold font-[Oswald]'>Fill out the form</h1>
                                <p class="subtitle ">
                                  We’ll get back to you shortly 
                                </p>
                            </div>
                            <div class="card-body p-0">
                                <form className="flex flex-col" >
                                    <div className="flex flex-col lg:flex-row w-full gap-4">
                                        <input type="email" placeholder="Your Email" class="input border-0 border-b border-black focus:border-primary focus:outline-0 rounded-none bg-transparent w-full px-0" {...register("user_email", { required: true})} />
                                        <input type="text" placeholder="Your Name" class="input border-0 border-b border-black focus:border-primary focus:outline-0 rounded-none bg-transparent w-full px-0" {...register("user_name", { required: true})} />            
                                    </div>
                                    <textarea type="text" placeholder="Your Massage" class="input border-0 border-b border-black focus:border-primary focus:outline-0  rounded-none bg-transparent my-6 py-2 px-0 h-[120px]" {...register("message", { required: true})} />
                                    <button type="submit" className='btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary w-[150px]'>submit </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
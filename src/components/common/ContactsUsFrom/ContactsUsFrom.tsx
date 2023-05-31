import React from 'react';
import Input from "../Input/Input";
import Button from "../Button/Button";

const ContactsUsFrom = () => {
    return (
        <form className='px-[50px] py-[52px] flex flex-col gap-[45px] justify-center text-center max-w-[453px] w-full rounded-[20px] border border-[#DDDDDD] shadow-form'>
            <p className='font-bold text-xl'>Contact Us</p>
            <Input placeholder='Your Name'/>
            <Input placeholder='Your Email'/>
            <textarea className='px-5 py-[23px] h-[193px] w-full bg-input-bg border border-input-border resize-none' placeholder='Your Message'/>
            <Button classNames='text-white px-[48px] py-[18px] max-w-[145px]'>Send</Button>
        </form>
    );
};

export default ContactsUsFrom;
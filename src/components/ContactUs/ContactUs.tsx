import React from 'react';
import TitleSubtitle from "../common/TitleSubtitle/TitleSubtitle";
import ContactsUsFrom from "../common/ContactsUsFrom/ContactsUsFrom";
import ContactsUsInfo from "../common/ContactsUsInfo/ContactsUsInfo";

const contactData = {
    title: 'Contact Us',
    subtitle: 'Most calendars are designed for teams. Slate is designed for freelancers',
}

const ContactUs = () => {
    return (
        <div className='mx-auto max-w-[1228px] w-full pt-[60px] pb-[102px] mt-[153px] flex justify-center items-center flex-col'>
            <TitleSubtitle title={contactData.title} subtitle={contactData.subtitle} centered/>
            <div className='w-full flex flex-col-reverse sm:flex-row justify-items-start mt-[60px] gap-[60px]'>
                <div className='px-[20px] mx-auto w-full max-w-[493px]'>
                    <ContactsUsFrom/>
                </div>
                <ContactsUsInfo/>
            </div>
        </div>
    );
};

export default ContactUs;
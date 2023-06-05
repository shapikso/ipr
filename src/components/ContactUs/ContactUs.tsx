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
        <div className='mx-auto max-w-[1228px] w-full pt-[160px] sm:pt-[213px] pb-[149px] sm:pb-[102px] pt-[153px] flex justify-center items-center flex-col'>
            <div className='w-full px-[20px]'>
                <TitleSubtitle title={contactData.title} subtitle={contactData.subtitle} centered/>
            </div>
            <div className='w-full flex flex-col-reverse sm:flex-row justify-items-start mt-[60px] gap-[25px]'>
                <div className='px-[20px] sm:px-0 mx-auto w-full max-w-[453px]'>
                    <ContactsUsFrom/>
                </div>
                <ContactsUsInfo/>
            </div>
        </div>
    );
};

export default ContactUs;
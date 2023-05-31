import React from 'react';
import {ReactComponent as MailIcon}  from '../../../assets/ant-design_mail-outlined.svg';
import {ReactComponent as PhoneIcon} from '../../../assets/ic_baseline-phone-android.svg';
import {ReactComponent as MapIcon} from '../../../assets/bx_bx-map.svg';
import MapScreen from '../../../assets/map_screen.png';
import SocialList from "../SocialList/SocialList";

const contactsUsInfoData = {
    info: [
        {
            text: '6386 Spring St undefined Anchorage, Georgia 12473 United States',
            icon: <MapIcon/>,
        },
        {
            text: '(843) 555-0130',
            icon:  <PhoneIcon/>,
        },
        {
            text: 'willie.jennings@example.com',
            icon: <MailIcon/>,
        },
    ],
}

const ContactsUsInfo = () => {
    return (
        <div className='mt-[18x] flex-col-reverse sm:flex-col flex gap-[70px] px-[34px]'>
            <div className='flex flex-col gap-[30px] sm:flex-row sm:gap-[35px] justify-center sm:items-center'>
                {contactsUsInfoData.info.map( ({text, icon}, index) => (
                    <div key={index} className='flex flex-row justify-items-start gap-5 sm:flex-col sm:text-center sm:items-center text-button-bg'>
                        {icon}
                        <p className='leading-[23px] max-w-[293px] text-black'>{text}</p>
                    </div>
                ) )}
            </div>
            <div className='justify-center items-center hidden sm:flex'>
                <img src={MapScreen} alt="Map"/>
            </div>
            <SocialList className='text-button-bg justify-center sm:justify-start'/>
        </div>
    );
};

export default ContactsUsInfo;
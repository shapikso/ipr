import React from 'react';
import FooterList from "../common/FooterList/FooterList";
import {ReactComponent as PhoneIcon} from '../../assets/ic_baseline-phone-android.svg';
import {ReactComponent as MapIcon} from '../../assets/bx_bx-map.svg';
import SocialList from "../common/SocialList/SocialList";

const footerData = {
    tabs: [
        {
            title: 'Pages',
            list: [
                'Home',
                'Product',
                'Pricing',
                'About',
                'Contact',
            ],
        },
        {
            title: 'Tomothy',
            list: [
                'Eleanor Edwards',
                'Ted Robertson',
                'Annette Russell',
                'Jennie Mckinney',
                'Gloria Richards',
            ],
        },
        {
            title: 'Jane Black',
            list: [
                'Philip Jones',
                'Product',
                'Colleen Russell',
                'Marvin Hawkins',
                'Bruce Simmmons',
            ],
        }
    ],
    info: [
        {
            icon: <MapIcon/>,
            text: '7480 Mockingbird Hill undefined',
        },
        {
            icon: <PhoneIcon/>,
            text: '(239) 555-0108',
        }
    ],
}

const Footer = () => {
    return (
        <footer className=' py-[117px] sm:py-[150px] flex flex-col items-center sm:items-start sm:flex-row justify-center w-full bg-pricing-bg gap-y-[85px] gap-x-[132px] font-graphik'>
            <div className='flex flex-col gap-y-[83px] text-center sm:text-left sm:justify-between max-w-[186px] sm:max-w-[582px] sm:flex-row w-full items-center'>
                {
                  footerData.tabs.map((tab, index) => <FooterList key={index} {...tab}/>)
                }
            </div>
            <div className='flex flex-col gap-[10px] text-white justify-items-start max-w-[284px] w-full'>
                {footerData.info.map( ({text, icon}, index) => (
                    <div key={index} className='flex gap-[10px] items-center'>
                        {icon}
                        <p className='leading-[27px] max-w-[240px] w-full'>{text}</p>
                    </div>
                ) )}
                <SocialList className='h-[81px] justify-center sm:justify-start'/>
            </div>
        </footer>
    );
};

export default Footer;
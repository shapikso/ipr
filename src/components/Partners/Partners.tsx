import React from 'react';
import TitleSubtitle from "../common/TitleSubtitle/TitleSubtitle";
import googleIcon from "../../assets/google.png";
import amazonIcon from "../../assets/amazon.png";
import uberIcon from "../../assets/uber.png";
import microsoftIcon from "../../assets/microsoft.png";
import dropboxIcon from "../../assets/dropbox.png";
import PartnerCard from "../common/PartnerCard/PartnerCard";
import Button from "../common/Button/Button";

const partnersData = {
    title: 'Partners',
    subtitle: 'Most calendars are designed for teams. Slate is designed for freelancers',
    partnersInfo: [
        {
            partnerIcon: googleIcon,
        },
        {
            partnerIcon: amazonIcon,
        },
        {
            partnerIcon: microsoftIcon,
        },
        {
            partnerIcon: uberIcon,
        },
        {
            partnerIcon: dropboxIcon,
        },
        {
            partnerIcon: googleIcon,
        },
        {
            partnerIcon: uberIcon,
        },
        {
            partnerIcon: amazonIcon,
        },
    ],
}
const Partners = () => {
    return (
        <div className='px-[20px] pt-[60px] pb-[60px] sm:pt-[98px] sm:pb-[80px] flex flex-col justify-center items-center w-full'>
            <TitleSubtitle title={partnersData.title} subtitle={partnersData.subtitle} centered/>
            <div className='flex flex-col gap-[30px] max-h-[559px] overflow-hidden max-w-[1092px] flex-wrap mt-[91px] justify-center sm:max-h-max sm:flex-row sm:gap-0'>
                {
                    partnersData.partnersInfo.map( (info, index) =>
                        <PartnerCard key={index} {...info}/>
                    )
                }
            </div>
            <Button classNames='mt-[87px] text-white py-[16px] px-[60px] font-bold leading-[28px]'>Try For Free</Button>
        </div>
    );
};

export default Partners;
import React from 'react';
import TitleSubtitle from "../common/TitleSubtitle/TitleSubtitle";
import ibmIcon from "../../assets/IBM.svg"
import Button from "../common/Button/Button";
import TestimonialUser from "../common/TestimonialUser/TestimonialUser";
import userIcon from "../../assets/bale.jpg"

const testimonialsData = {
    title: 'Testimonials',
    testimonialText: 'Most calendars are designed for teams. Slate is designed for freelancers \n' +
        'who want a simple way to plan their schedule.',
    user: {
        imgSrc: userIcon,
        userPersonaData: 'Organize across',
        userPosition: 'Ui designer',
    }
}
const Testimonials = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center pt-[121px] sm:pt-[111px] px-[20px] pb-[100px]'>
            <TitleSubtitle title={testimonialsData.title} centered/>
            <img className='mt-[88px]' src={ibmIcon} alt="IBM"/>
            <h4 className='mt-[60px] font-bold sm:font-normal mb-[62px] tex-[14px] leading-[17px] spaci max-w-[280px] sm:text-[28px] sm:leading-[40px] sm:max-w-[957px]'>{testimonialsData.testimonialText}</h4>
            <TestimonialUser {...testimonialsData.user}/>
            <Button classNames='mt-[86px] py-[18px] px-[48px] font-bold text-white'>More Testimonials</Button>
        </div>
    );
};

export default Testimonials;
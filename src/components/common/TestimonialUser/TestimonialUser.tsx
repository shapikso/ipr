import React from 'react';

interface ITestimonialUser {
    imgSrc: string;
    userPersonaData: string;
    userPosition: string;
}

const TestimonialUser = ({imgSrc, userPersonaData, userPosition}: ITestimonialUser) => {
    const textClassName = 'sm:text-[16px] sm:leading-[23px]';
    return (
        <div className='flex gap-[13px] text-start'>
            <img className='rounded-full w-[42px] h-[42px] sm:w-[50px] sm:h-[50px]' src={imgSrc} alt="User"/>
            <div>
                <div className={`text-[10px] font-bold ${textClassName}`}>{userPersonaData}</div>
                <div className={`text-[13px] ${textClassName}`}>{userPosition}</div>
            </div>
        </div>
    );
};

export default TestimonialUser;
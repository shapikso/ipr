import React from 'react';

interface IFeatureInfo {
    title: string,
    text: string,
    imgSrc: string
}

const FeatureInfo = ({title, text, imgSrc}: IFeatureInfo) => {
    return (
        <div className='flex flex-col items-center gap-[20px] text-center px-[12px]'>
            <img src={imgSrc} alt="feature icon"/>
            <h3 className='text-[20px] font-bold leading-[28px] max-w-[207px]'>{title}</h3>
            <p className='max-w-[231px] text-[18px]'>{text}</p>
        </div>
    );
};

export default FeatureInfo;
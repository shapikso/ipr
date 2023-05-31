import React from 'react';
import TitleSubtitle from "../common/TitleSubtitle/TitleSubtitle";
import FeatureInfo from "../common/FeatureInfo/FeatureInfo";
import roundSquareIcon from '../../assets/mdi_drawing.svg';
import drawIcon from '../../assets/mdi_draw.svg';
import brushIcon from '../../assets/mdi_brush.svg';
import playButton from '../../assets/play_button.svg';
import videoPreview from '../../assets/screen.png';

const featureData = {
    title: 'Features',
    subtitle: 'Most calendars are designed for teams. Slate is designed for freelancers',
    featureInfo: [
        {
            title: 'OpenType features Variable fonts',
            text: 'Slate helps you see how many more days you need to work to reach your financial goal.',
            imgSrc: roundSquareIcon,
        },
        {
            title: 'Design with real data',
            text: 'Slate helps you see how many more days you need to work to reach your financial goal.',
            imgSrc: drawIcon,
        },
        {
            title: 'Fastest way to take action',
            text: 'Slate helps you see how many more days you need to work to reach your financial goal.',
            imgSrc: brushIcon,
        },
    ],
}

const Features = () => {
    return (
        <div className='px-[20px] mt-[136px] flex flex-col justify-center items-center w-full'>
            <TitleSubtitle title={featureData.title} subtitle={featureData.subtitle} centered/>
            <div className='flex gap-[75px] sm:gap-[52px] sm:flex-row flex-col mt-[90px] '>
                {
                    featureData.featureInfo.map( (info, index) =>
                        <FeatureInfo key={index} {...info}/>
                    )
                }
            </div>
            <div className='mt-[132px] relative flex items-center justify-center'>
                <img src={videoPreview} alt="video"/>
                <img src={playButton} className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-1/4 cursor-pointer hover:opacity-95' alt="play"/>
            </div>
        </div>
    );
};

export default Features;
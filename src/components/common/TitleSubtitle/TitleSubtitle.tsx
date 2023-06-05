import React from 'react';

interface ITitleSubtitle {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

const TitleSubtitle = ({title, subtitle, centered = false}:ITitleSubtitle) => {
    return (
        <div className={ `flex flex-col items-center text-center sm:text-left sm:items-start justify-center ${centered && 'sm:text-center sm:items-center'}`}>
            <h2 className='text-[48px] leading-[55px] sm:max-w-[335px] sm:w-full break-all'>
                {title}
            </h2>
            {subtitle &&
                <h4 className='mt-[27px] text-[28px] leading-[40px] max-w-[532px] break-all'>
                {subtitle}
            </h4>}
        </div>
    );
};

export default TitleSubtitle;
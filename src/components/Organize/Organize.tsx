import React from 'react';
import TitleSubtitle from "../common/TitleSubtitle/TitleSubtitle";
import Button from "../common/Button/Button";
import macbook from "../../assets/Macbook.png";

const organizeData = {
    title: 'Fastest way to \n organize',
    subtitle: 'Most calendars are designed for teams. Slate is designed for freelancers',
}

const Organize = () => {
    return (
        <div className='flex mt-[340px] px-[20px] pb-[58px] gap-[65px] sm:gap-[50px] sm:flex-row flex-col items-center justify-center '>
            <div className='text-center items-center justify-center sm:text-left sm:items-start sm:justify-items-start'>
                <TitleSubtitle title={organizeData.title} subtitle={organizeData.subtitle} />
                <Button classNames='mt-[70px] px-[60px] py-[16px] text-white mx-auto '>Try For Free</Button>
            </div>
            <div className='p-[11px]'>
                <img src={macbook} alt="computer"/>
            </div>

        </div>
    );
};

export default Organize;
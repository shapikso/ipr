import React from 'react';
import TitleSubtitle from "../common/TitleSubtitle/TitleSubtitle";
import PricingTab from "../common/PricingTab/PricingTab";

const pricingFeature = ['Pricing Feature','Pricing Feature','Pricing Feature','Pricing Feature','Pricing Feature']
const pricingData = {
    title: 'Pricing',
    subtitle: 'Most calendars are designed for teams. Slate is designed for freelancers',
    cards: [
        {
            pricingType: 'FREE',
            pricingFeature: pricingFeature,
            price: 0,
        },
        {
            pricingType: 'STANDARD',
            pricingFeature: pricingFeature,
            price: 10,
            bigCard: true,
        },
        {
            pricingType: 'BUSINESS',
            pricingFeature: pricingFeature,
            price: 99,
        }
    ],
}

const Pricing = () => {
    return (
        <div className='text-white px-[20px] pt-[121px] pb-[118px] sm:pt-[111px] sm:pb-[100px] w-full bg-pricing-bg'>
            <TitleSubtitle title={pricingData.title} subtitle={pricingData.subtitle} centered/>
            <div className='flex flex-col gap-[50px] justify-center items-center pt-[90px] sm:flex-row'>
                {pricingData.cards.map((card,index) =>  <PricingTab key={index} {...card}/>)}
            </div>
        </div>
    );
};

export default Pricing;
import React from 'react';
import Button from "../Button/Button";

interface IProps {
    pricingType: string;
    pricingFeature: string[];
    price: number;
    bigCard?: boolean;
}

const cardClasses = 'pt-[40px] pb-[43px] bg-white text-black';
const bigGardClasses = 'pt-[92px] pb-[83px] bg-button-bg text-white';

const PricingTab = ({pricingType, pricingFeature, price, bigCard}: IProps) => {
    return (
        <div className={`flex flex-col justify-center items-center max-w-[335px] px-[10px] rounded-[10px] w-full ${bigCard ? bigGardClasses : cardClasses }`}>
            <div className='max-w-[148px] text-center'>
                <h3 className='font-bold text-xl'>{pricingType}</h3>
                <h6 className='w-full leading-[23px] mt-[3px]'>
                    Organize across all apps by hand
                </h6>
            </div>
            <div className='flex gap-[10px] justify-center items-center '>
                <h1 className='text-[74px] font-bold'>{price}</h1>
                <div>
                    <h3 className='font-bold text-xl'>$</h3>
                    <h6 className='leading-[23px]'>
                        Per Month
                    </h6>
                </div>
            </div>
            <div className='flex flex-col gap-[20px] justify-center items-center mt-[17px]'>
                {pricingFeature.map((item,index) => <p className='leading-[28px]' key={index}>{item}</p>)}
            </div>
            <Button classNames={`mt-[40px] py-[18px] px-[75px]  ${bigCard ? 'bg-white text-button-bg' : 'text-white'}`}>Order Now</Button>
        </div>
    );
};

export default PricingTab;
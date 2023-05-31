import React from 'react';
import prototype from '../../assets/prototyping.png';
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";

const Prototyping = () => {

    const returnSubscribeBlock = (className?: string) => (
        <div className={`ml-[10px] text-center sm:text-left ${className}`}>
            <h3 className='text-xl font-bold ml-[10px] mt-[35px]'>
                Subscribe to our Newsletter
            </h3>
            <h3 className='text-xl ml-[10px]'>
                Available exclusivery on Figmaland
            </h3>
            <div className='mt-[36px] flex flex-col gap-y-[12px] gap-x-[3px] w-full sm:flex-row'>
                <Input placeholder='Your Email'/>
                <Button classNames='text-white px-[38px] py-[19px]'>Subscribe</Button>
            </div>
        </div>
    )

    return (
        <div className='px-[20px] flex flex-col-reverse gap-[95px] sm:flex-row sm:gap-[50px] sm:mt-[385px]  justify-center items-center'>

            {returnSubscribeBlock('block sm:hidden')}

            <div>
                <img src={prototype} alt="ups"/>
            </div>

            <div className='pt-[121px] max-w-[520px] w-full text-center sm:text-left sm:pl-[63px]'>

                <h3 className='text-xl font-bold'>
                    At your fingertips
                </h3>
                <h2 className='text-5xl leading-[55px] mt-[17px] sm:max-w-[324px]'>
                    Lightning fast prototyping
                </h2>

                {returnSubscribeBlock('hidden sm:block')}

            </div>
        </div>
    );
};

export default Prototyping;
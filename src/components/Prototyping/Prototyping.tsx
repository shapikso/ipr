import React from 'react';
import prototype from '../../assets/prototyping.png';
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";

const Prototyping = () => {

    const returnSubscribeBlock = (className?: string) => (
        <div className={`ml-[10px] text-center sm:text-left ${className}`}>
            <h3 className='text-xl font-bold ml-[5px] mt-[35px] break-all leading-[28px]'>
                Subscribe to our Newsletter
            </h3>
            <h3 className='text-xl ml-[5px] break-all leading-[25px]'>
                Available exclusivery on Figmaland
            </h3>
            <div className='mt-[36px] flex flex-col gap-y-[12px] gap-x-[12px] w-full sm:flex-row'>
                <Input placeholder='Your Email'/>
                <Button classNames='text-white px-[38px] py-[17px]'>Subscribe</Button>
            </div>
        </div>
    )

    return (
        <div className='px-[20px] pt-[81px] pb-[114px] sm:pb-[91px] flex flex-col-reverse gap-[95px] sm:flex-row sm:gap-[95px] sm:pt-[192px] justify-center items-center'>

            {returnSubscribeBlock('block sm:hidden')}

            <div>
                <img src={prototype} alt="ups"/>
            </div>

            <div className='max-w-[520px] w-full text-center sm:text-left sm:pl-[63px]'>

                <h3 className='text-xl font-bold break-all leading-[28px]'>
                    At your fingertips
                </h3>
                <h2 className='text-5xl leading-[55px] mt-[17px] sm:max-w-[324px] break-all'>
                    Lightning fast prototyping
                </h2>

                {returnSubscribeBlock('hidden sm:block')}

            </div>
        </div>
    );
};

export default Prototyping;
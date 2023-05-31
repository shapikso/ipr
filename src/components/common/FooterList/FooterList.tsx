import React from 'react';

interface IProps {
    list: string[];
    title: string;
}

const FooterList = ({list, title}: IProps) => {
    return (
        <div className='flex flex-col gap-[16px] justify-center text-white'>
            <h3 className='font-bold mb-[9px] text-xl'>{title}</h3>
            {
                list.map((listItem, index) =>
                    <div className='tex-[15px] leading-[28px] cursor-pointer hover:opacity-80' key={index}>{listItem}</div>
                )
            }
        </div>
    );
};

export default FooterList;
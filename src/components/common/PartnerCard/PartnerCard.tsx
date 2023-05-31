import React from 'react';

interface IPartnerCard {
    partnerName?: string;
    partnerIcon: string;
}

const PartnerCard = ({partnerName = 'Client Name', partnerIcon}: IPartnerCard) => {
    return (
        <div className='flex flex-col gap-[15px] items-center justify-center max-w-[273px] w-full h-[163px] border-[#D8D8D8] border'>
            <p className='text-base'>{partnerName}</p>
            <img src={partnerIcon} alt="Partner Icon"/>
        </div>
    );
};

export default PartnerCard;
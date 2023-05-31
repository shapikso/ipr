import React from 'react';
import {ReactComponent as FacebookIcon}  from '../../../assets/ant-design_facebook-filled.svg';
import {ReactComponent as TwitterIcon} from '../../../assets/ant-design_twitter-outlined.svg';
import {ReactComponent as LinkedinIcon} from '../../../assets/ant-design_linkedin-filled.svg';

const socialsData = [
    <TwitterIcon/>,
    <FacebookIcon/>,
    <LinkedinIcon/>,
];

interface IProps {
    className?: string
}

const SocialList = ({className}: IProps) => {
    return (
        <div className={`flex gap-[28px] items-center ${className}`}>
            {
                socialsData.map((image) =>
                    <div className='cursor-pointer hover:opacity-80'>{image}</div>
                )
            }
        </div>
    );
};

export default SocialList;
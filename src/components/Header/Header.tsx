import React from 'react';
import logo from '../../assets/logo.png';
import Button from "../common/Button/Button";
import SocialList from "../common/SocialList/SocialList";
import {ReactComponent as Burger} from "../../assets/burger.svg";

const navList = [
    'Home',
    'Product',
    'Pricing',
    'About',
    'Contact'
];

const Header = () => {
    return (
        <header className='bg-header-image bg-cover bg-center bg-no-repeat h-[847px] sm:h-[930px] relative font-graphik'>
            <div className='max-w-[1210px] w-full h-[156px] mx-auto flex justify-between sm:justify-center lg:justify-between items-center p-l-[50px] p-r-[45px] flex-wrap '>
                <nav className='flex items-center justify-between w-full sm:w-max'>
                    <ul className='hidden gap-[41px] text-white sm:flex'>
                        {navList.map(item =>
                            <li key={item} className='cursor-pointer hover:opacity-80'>
                                {item}
                            </li>
                        )}
                    </ul>
                    <img alt='logo' src={logo} className='ml-[25px] sm:ml-[35px] h-fit'/>
                    <Burger className='block sm:hidden mr-[15px] cursor-pointer hover:opacity-80'/>
                </nav>
                <SocialList className='h-[33px] gap-[33px] text-white hidden sm:flex '/>
            </div>
            <div className='mt-[90px] sm:mt-[110px] mx-auto text-white text-center flex flex-col justify-center items-center'>
                <h1 className='text-[48px] leading-[55px] sm:text-[74px] max-w-[333px] sm:max-w-[672px] sm:font-bold sm:leading-[84px]'>
                    The best products start with Figma
                </h1>
                <p className='max-w-[265px] sm:max-w-[766px] mt-[27px] font-normal text-[28px]'>Most calendars are designed for teams. Slate is designed for freelancers</p>
                <Button classNames='mt-[69px] sm:mt-[90px] py-[16px] px-[62px]'>
                    Try For Free
                </Button>
            </div>
            <div className='absolute bottom-0 right-0 w-0 h-0 border-l-[50vw] border-l-transparent border-b-[150px] border-b-white'></div>
            <div className='absolute bottom-0 left-0 w-0 h-0 border-r-[50vw] border-r-transparent border-b-[150px] border-b-white'></div>
        </header>
    );
};

export default Header;
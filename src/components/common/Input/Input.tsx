import React from 'react';

interface IProps {
    placeholder: string,
}

const Input = ({placeholder}: IProps) => {
    return (
        <input className='px-[38px] py-[19px] text-sm bg-input-bg rounded-[39px] border border-input-border w-full' placeholder={placeholder} type="text"/>
    );
};

export default Input;
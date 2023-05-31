import React, {ReactNode} from 'react';

interface IButton {
    classNames: string,
    children: ReactNode,
}


const Button = ({classNames, children}: IButton) => {
    return (
        <button className={`rounded-[35px] text-[20px] bg-button-bg leading-[20px] ${classNames} hover:opacity-95 `}>
            {children}
        </button>
    );
};

export default Button;
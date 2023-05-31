import React, {FC, ReactNode} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => (
    <>
        <Header/>
        <main className='overflow-hidden text-text-color font-graphik'>
           <div className='max-w-[1440px] mx-auto'>
               {children}
           </div>
        </main>
        <Footer/>
    </>
);

export default Layout;
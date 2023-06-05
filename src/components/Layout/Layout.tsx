import React, {FC, ReactNode} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => (
    <>
        <Header/>
        <main className='text-text-color font-graphik'>
            {children}
        </main>
        <Footer/>
    </>
);

export default Layout;
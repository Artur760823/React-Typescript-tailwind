import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '../assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '../shared/types';
import useMediaQuery from '../hooks/useMediaQuery';
import ActionButton from '../components/ActionButton';


type Props = {
    selectedPage: SelectedPage;
    setSelecetedPage: (value: SelectedPage) => void;
    isTopOfpage: boolean;
}

const Navbar = ({isTopOfpage, selectedPage, setSelecetedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfpage ? "" : "bg-primary-100 drop-shadow";

    

    return (
        <nav>
            <div
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img src={Logo} alt="logo" />
                        { isAboveMediumScreens ? <div className={`${flexBetween} w-full `}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link page="Home" selectedPage={selectedPage} setSelecetedPage={setSelecetedPage} />
                                <Link page="Benefits" selectedPage={selectedPage} setSelecetedPage={setSelecetedPage} />
                                <Link page="Our Calsses" selectedPage={selectedPage} setSelecetedPage={setSelecetedPage} />
                                <Link page="Contact Us" selectedPage={selectedPage} setSelecetedPage={setSelecetedPage} />
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign In</p>
                                <ActionButton setSelecetedPage={setSelecetedPage}>Become a Member</ActionButton>
                            </div>
                        </div>
                        : (
                            <button className='rounded-full bg-secondary-500 p-2'
                                onClick={()=> setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className='h-6 w-6 text-white'/>

                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className='fixed right-0 bottom-0 z-40 h-full min-w-[300px] bg-primary-100 drop-shadow-xl'>
                    {/* close icon */}
                    <div className='flex justify-end p-12'>
                        <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className='h-6 w-6 text-gray-400'/>
                        </button>
                    </div>
                    {/* MenuItems */}
                        <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                            <Link page="Home" selectedPage={selectedPage} setSelecetedPage={setSelecetedPage} />
                            <Link page="Benefits" selectedPage={selectedPage} setSelecetedPage={setSelecetedPage} />
                            <Link page="Our Calsses" selectedPage={selectedPage} setSelecetedPage={setSelecetedPage} />
                            <Link page="Contact Us" selectedPage={selectedPage} setSelecetedPage={setSelecetedPage} />
                        </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar

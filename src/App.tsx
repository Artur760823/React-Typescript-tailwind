import React, {useEffect, useState} from 'react';
import Navbar from './scenes/Navbar';
import { SelectedPage } from './shared/types';
import Home from './scenes/Home';

function App() {

    const [selectedPage, setSelecetedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.screenY === 0){
                setIsTopOfPage(true);
                setSelecetedPage(SelectedPage.Home)
            }
            if(window.scrollY !== 0){
                setIsTopOfPage(false);
            }
            window.addEventListener('scroll', handleScroll);
            return ()=> window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="app bg-gray-20">
            <Navbar selectedPage={selectedPage} setSelecetedPage={setSelecetedPage}
                isTopOfpage={isTopOfPage}
            />
            <Home setSelecetedPage={setSelecetedPage}/>
        </div>
    );
}

export default App;
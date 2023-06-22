import React, {useState} from 'react';
import Navbar from './scenes/Navbar';

function App() {

    const [selectedPage, setSelecetedPage] = useState<string>('home');

    return (
        <div className="app bg-gray-20">
            <Navbar selectedPage={selectedPage} setSelecetedPage={setSelecetedPage}/>
        </div>
    );
}

export default App;
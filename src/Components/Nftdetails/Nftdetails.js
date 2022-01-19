import React from 'react';
import bandanapunk from '../../assets/5.jpg'

function Nftdetails() {
    return (
        <div className='bg-black h-screen px-16 py-2 flex gap-16'>
            <div>
                <img src={bandanapunk} className='w-[18rem] rounded-3xl' alt="punk"></img>
            </div>
            <div>
                <p className='text-8xl text-white py-8 font-extrabold'>Bandana Punk<span className="text-gray-400 text-7xl">#0</span></p>

            </div>
        </div>
    )
}

export default Nftdetails;

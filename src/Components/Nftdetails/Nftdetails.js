import React from 'react';
import bandanapunk from '../../assets/5.jpg'
import acc from '../../assets/acc.png'

function Nftdetails() {
    return (
        <div className='bg-black h-screen px-16 py-2 flex gap-16'>
            <div>
                <img src={bandanapunk} className='w-[18rem] rounded-3xl' alt="punk"></img>
            </div>
            <div>
                <p className='text-8xl text-white py-8 font-extrabold'>Bandana Punk<span className="text-gray-400 text-7xl">#0</span></p>
                <div className='flex gap-2 pt-[10vh]'>
                    <img className=" rounded-full w-12" src={acc} alt="acc" />

                    <div className='flex flex-col justify-center items-start'>
                        <p className='text-white'>0x91eedc8077da7ee81b76ffe482257040f5cfa025</p>
                        <p className='text-btn'>sanskargupta0901@gmail.com</p>
                    </div>
                    <div>
                        <div className='rounded-full w-24'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nftdetails;

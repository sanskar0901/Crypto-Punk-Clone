import React from 'react';
import bandanapunk from '../../assets/5.jpg'
import solidity from '../../assets/weth.png'
import acc from '../../assets/acc.png'
import { BsTwitter, BsInstagram, BsThreeDots } from 'react-icons/bs';


function Nftdetails() {
    return (
        <div className='bg-black px-16 py-2 flex  flex-col'>
            <div className='flex gap-12 h-[44vh]'>
                <div>
                    <img src={bandanapunk} className='w-[18rem]  rounded-3xl' alt="punk"></img>
                </div>
                <div>
                    <p className='text-8xl text-white pb-8 font-extrabold flex justify-start items-baseline'>Bandana Punk<span className="text-gray-400 text-7xl">#0</span></p>
                    <div className='flex gap-2 pt-[1vh] h-[20vh] items-end'>
                        <img className=" rounded-full w-12 h-12" src={acc} alt="acc" />

                        <div className='flex flex-col justify-center items-start'>
                            <p className='text-white'>0x91eedc8077da7ee81b76ffe482257040f5cfa025</p>
                            <p className='text-btn'>sanskargupta0901@gmail.com</p>
                        </div>
                        <div className="flex gap-4  pl-[29rem] justify-end">

                            <div className='rounded-full w-16 h-16 border-2 flex justify-center items-center'>
                                <BsTwitter className="text-white text-4xl" />
                            </div>
                            <div className='rounded-full w-16 border-2 flex justify-center items-center'>
                                <BsInstagram className="text-white text-4xl" />
                            </div>
                            <div className='rounded-full w-16 border-2 flex justify-center items-center'>
                                <BsThreeDots className="text-white text-4xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='h-4 w-[92vw]' />
            <div className="flex gap-8 pb-4">
                <div className="bg-txtbg h-[70vh] w-80 rounded-3xl">
                    <img src={bandanapunk} alt="1stpunk" className='w-80  rounded-t-3xl' />
                    <div className='flex flex-col justify-start items-start pl-4 gap-1 pt-2'>
                        <p className="text-white text-2xl font-bold">Bandana Punk</p>
                        <p className="text-gray-600 font-bold text-lg">#0</p>
                        <div className='flex gap-1'>
                            <img src={solidity} alt="solidity" className='w-4' />
                            <p className="text-white font-bold text-lg">13</p>
                        </div>
                    </div>
                </div>
                <div className="bg-txtbg h-[70vh] w-80 rounded-3xl">
                    <img src={bandanapunk} alt="1stpunk" className='w-80  rounded-t-3xl' />
                    <div className='flex flex-col justify-start items-start pl-4 gap-1 pt-2'>
                        <p className="text-white text-2xl font-bold">Bandana Punk</p>
                        <p className="text-gray-600 font-bold text-lg">#1</p>
                        <div className='flex gap-1'>
                            <img src={solidity} alt="solidity" className='w-4' />
                            <p className="text-white font-bold text-lg">33</p>
                        </div>
                    </div>
                </div>
                <div className="bg-txtbg h-[70vh] w-80 rounded-3xl">
                    <img src={bandanapunk} alt="1stpunk" className='w-80  rounded-t-3xl' />
                    <div className='flex flex-col justify-start items-start pl-4 gap-1 pt-2'>
                        <p className="text-white text-2xl font-bold">Bandana Punk</p>
                        <p className="text-gray-600 font-bold text-lg">#2</p>
                        <div className='flex gap-1'>
                            <img src={solidity} alt="solidity" className='w-4' />
                            <p className="text-white font-bold text-lg">43</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='h-4 w-[92vw]' />
        </div>
    )
}

export default Nftdetails;

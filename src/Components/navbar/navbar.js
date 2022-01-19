import '../../index.css'
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsSunFill } from 'react-icons/bs';
const logo = require('../../assets/header/logo.png')
function Navbar() {
    return (
        <div className='bg-black flex py-4 items-center gap-4 justify-center'>
            <img src={logo} className='w-52' alt="logo"></img>
            <div className='bg-txtbg h-12 flex  items-center rounded-full p-4 gap-4  w-[51vw]'>
                <BiSearchAlt2 className='text-gray-500 text-2xl ' />
                <input type='text' placeholder='Collection, item or user' className=' bg-txtbg h-12 rounded-full w-3/4 placeholder:text-white'></input>
            </div>
            <div className="flex gap-4">

                <a href="#" className='text-gray-400 text-base hover:text-lg'>Drops</a>
                <a href="#" className='text-gray-400 text-base hover:text-lg'>Marketplace</a>
                <a href="#" className='text-gray-400 text-base hover:text-lg'>Create</a>
            </div>
            <div className="flex gap-4">
                <div className='rounded-full w-12 bg-txtbg flex items-center justify-center' ><BsSunFill className='text-white text-2xl' /></div>
                <button className='bg-btn w-32 h-12 rounded-full text-xl'>GETIN</button>
            </div>
        </div >



    );
}

export default Navbar;
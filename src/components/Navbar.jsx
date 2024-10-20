
import Logo from '../assets/Logo.png'
import {FaGithub} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={Logo} className='w-10 mx-2'/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaGithub />
            <FaInstagram />
            <FaTwitter />
        </div>
    </nav>
  )
}

export default Navbar
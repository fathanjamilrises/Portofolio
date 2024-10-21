
import Logo from '../assets/Logo.png'
import {FaGithub, FaTiktok} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={Logo} className='w-10 mx-2'/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href='https://github.com/fathanjamilrises' className='hover:text-purple-500'><FaGithub/></a>
            <a href="https://www.instagram.com/fthbnvc/" className='hover:text-pink-500'><FaInstagram /></a>
            <a href="https://www.tiktok.com/@fathh.php" className='hover:text-blue-700'><FaTiktok /></a>
        </div>
    </nav>
  )
}

export default Navbar
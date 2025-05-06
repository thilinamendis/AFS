import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {

  const [nav,setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  const navItems = [
    {id:1, text: 'Home'},
    {id:2, text: 'About'},
    {id:3, text: 'Services'},
    {id:4, text: 'Projects'},
    {id:5, text: 'Contact'}
  ]



  return (
    <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      {/* logo */}
      
    </div>
  )
}

export default Navbar
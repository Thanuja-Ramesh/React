import {Link} from 'react-router-dom'
import logo from '../assets/react.svg'

const NavBar = () => {
  return (
   <>
   <div className="bg-indigo-300 text-black p-2 flex justify-around items-center">
      <div className='mx-2 bg-amber-100 p-2 text-center text-black w-10 rounded-2xl'>
        <img src={logo} />
      </div>
      <div className='flex gap-20 mx-5'>
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About</Link>
   </div>
   </div>
   </>
  )
}

export default NavBar

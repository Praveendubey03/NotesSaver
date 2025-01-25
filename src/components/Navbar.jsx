import { NavLink } from "react-router-dom"
import '../styles.css';

const Navbar = () => {
  return (
    <div className= 'fixed top-0 left-0 w-[100%] z-1000 bg-blue-900 mt-.5 p-2 shadow-lg shadow-black-500/50 ...  border-solid hover:bg-blue-950'>
    <div className='flex flex-row gap-4 place-content-evenly top-4 mt:top-6 font-bold'>
        <div>
          <NavLink className='text-bold'
            to="/">
            Home
          </NavLink></div>
        <div>
          <NavLink to="/paste">
            Pastes
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar

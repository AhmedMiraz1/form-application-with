import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const {user, logOut}= useContext(AuthContext)
  const  handelLoggedOut =()=>{
    logOut()
    .then( () => console.log("user logged out successfully"))
    .catch( error => console.error(error))
  };

    const navLinks =
    <>
     <li><NavLink  to= '/'>Home</NavLink></li>
     <li><NavLink to= '/login'>Log In</NavLink></li>
     <li><NavLink to= '/register'>Register</NavLink></li>
   
     {
      user && 
      <> 
      <li><NavLink to= '/orders'>Orders</NavLink></li>
     <li><NavLink to= '/profile'>Profile</NavLink></li>
     <li><NavLink to= '/dashboard'>Dashboard</NavLink></li>
      
      </>
     }
     
    
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-3xl font-bold ">Form</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1 font-semibold text-xl">

            {navLinks}
           
          </ul>
        </div>
        <div className="navbar-end ">
          {
            user ?<>
             <span>{user.email}</span>
             <a  onClick={handelLoggedOut} className="btn btn-sm">SingOut</a>
              </>
              : <Link to ='/login'> <button className="btn btn-sm"> LOGIN </button> </Link>
          }
         
        </div>
      </div>
    );
};

export default Navbar;
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { auth, logout } from "../../firebase";
import { toast } from 'react-hot-toast';

const Menu = () => (
  <>
    <p><a href="#home"></a></p>
    <p><a href="#wkudara"></a>What is Kudara</p>
    <p><a href="#data"></a>Data list</p>
    <p><a href="#posibility"></a>Posibilitas</p>
    <p><a href="#future"></a>Future Improvements</p>

  </>
)

const logoutAcc = () => {
  toast.error('Telah logout');
  logout();
}


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className='kudara__navbar'>
      <div className='kudara__navbar-links'>
        <div className="kudara__navbar-links_logo">
          
          <h1 className='gradient__text'>Kudara</h1>
        </div>
        <div className="kudara__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className='kudara__navbar-sign'>
        {user ? (
          <><p>Welcome, {user.displayName}</p>
            <button onClick={logout}>Logout</button></>) : (
          <>
            <Link to="/login"><button>Login dengan Google</button></Link>
            {error ? <p>{error}</p> : null}</>
        )}
      </div>

      <div className="kudara__navbar-menu">
        {toggleMenu}
        {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='kudara__navbar-menu_container scale-up-center'>
            <div className='kudara__navbar-menu-container-links'>
              <Menu />
              <div className='kudara__navbar-menu_container-links-sign'>
                {user ? (
                  <><p>Welcome, {user.displayName}</p>
                    <button onClick={logoutAcc}>Logout</button></>) : (
                  <>
                    <Link to="/login"><button>Login dengan Google</button></Link>
                    {error ? <p>{error}</p> : null}</>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
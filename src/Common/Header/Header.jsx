import React, { useEffect, useState, useMemo, useContext } from 'react';
import './Header.scss';
import { IoSearchOutline } from "react-icons/io5";
import MyContext from '../Context/MyContext';
import { MdLogin } from "react-icons/md";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Login from '../Login/Login';

const Header = () => {
  const{Navigate,location,isOpen, setIsOpen}= useContext(MyContext)
  const items = useMemo(() => ['passport','student visa','visitor visa','work permit','ielts','pte', 'aadhar card', 'pan card','election card','driving license'], []); 
  const [right, setRight] = useState(items[0]);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const searchmatch= location.pathname.match('/search')

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1600);

    return () => clearInterval(interval); 
  }, [items.length]);

  useEffect(() => {
    setRight(items[index]);
    setAnimate(true);

    const timeout = setTimeout(() => setAnimate(false), 700); 

    return () => clearTimeout(timeout); 
  }, [index, items]);

  return (
    <>
    <div className='header'>
     
   <div className='left' onClick={() =>Navigate('/')}>Veer Consultancy</div>
     <div className='left' onClick={() =>Navigate('/')}>Veer<br/> Consultancy</div>


     {!searchmatch &&<div className='center' onClick={()=>Navigate('/search')}>
        <span className='icon'><IoSearchOutline /></span>
        <span className={`search ${animate ? 'animate' : ''}`}>
          search for "{right}"
        </span>
      </div>}

     {searchmatch && <div className='centers'>
     <input type='text' autoFocus placeholder='search for student visa and more...'/>
     <IoSearchOutline />  
    </div>
  }

      <div className='right'>
        <button className='btn1' onClick={()=>setIsOpen(true)}><MdLogin />Login</button>

       {!searchmatch && <button className='btn2'>Explore</button>}
      </div>
    </div>

    {/*for search bar in mobile */}

    { !searchmatch && <div className='centerm' onClick={()=>Navigate('/search')}>
  <IoSearchOutline />
    <span className={`search ${animate ? 'animate' : ''}`}>
      search for "{right}"
    </span>
  </div>
}

{searchmatch && <div className='centermo'>
  <input type='text' autoFocus placeholder='search for student visa and more...'/>
  <IoSearchOutline />  
 </div>
}



{/*for login */}

<Drawer
                open={isOpen}
                onClose={()=>setIsOpen(false)}
                direction='right'
                className='bla bla bla'
                overlayOpacity={0.1}
                size={400}
                
                
            >
                <Login/>
            </Drawer>
    </>
  );
};

export default Header;

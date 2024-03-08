import {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import NavLinks from './NavLinks';
import '../component-css/nav.css';

function Nav(){
    const [ toggleMenu, setToggleMenu ] = useState(false);

    return(
        <div className='Nav-El'>
            <div className='logo'>Qash Teknologies</div> 

            <div className='mobile-menu'>
            { toggleMenu ? 
               <RiCloseLine className='menu-btn' onClick = {() => setToggleMenu(false)} /> : 
               <RiMenu3Line className='menu-btn' onClick = {() => setToggleMenu(true)} /> 
            }

            {
                toggleMenu && (
                    <NavLinks>
                        <li>
                            <a href='#' className='menu-links'>About me</a>
                        </li>
                        <li>
                            <a href="#" className='menu-links'>My Projects</a>
                        </li>
                        <li>
                            <a href="#" className='menu-links'>Testimonials</a>
                        </li>
                        <li>
                            <a href="#" className='menu-links'>Contact</a>
                        </li>

                    </NavLinks>
                )
            }
            </div>
        </div>
    )
}

export default Nav;




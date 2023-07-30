import { Link } from 'react-router-dom';
import navStyle from './Navbar.module.css';
import Register from '../../Register page/Register';
import { useState } from 'react';

export default function Navbar () {

    const[isModalOpen, setIsModalOpen] = useState(false)
    
    const openModal = () => {
      setIsModalOpen(true)
    }

    const closeModal = () => {
      setIsModalOpen(false)
    }

    const navOption = [
        {lable:'Home', path:'/'},
        {lable:'About Us', path:'/about'},
        {lable:'Classes', path:'/classes'},
        {lable:'Blogs', path:'/blogs'}
    ]
    return(
        <>
        <div className={navStyle.container}>
        <nav className={navStyle.navBar}>
            {
                navOption.map((option,index) => (
                  <Link key={index} to={option.path} className={navStyle.options}> 
                    <p>{option.lable}</p>
                  </Link>   
                ))
            }
        </nav>
        <div className={navStyle.button}>
        <button onClick={openModal}>Join Us</button>
        </div>
        </div>
        <Register isOpen={isModalOpen} onclose={closeModal}/>
        </>
    )
}
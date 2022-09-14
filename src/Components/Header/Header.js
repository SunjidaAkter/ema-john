import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../Components/images/Logo.svg'
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <nav className='nav-container'>
            <div className='container d-flex justify-content-between align-items-center'>
                <img src={logo} alt="" />
                <div className='d-flex justify-content-between align-items-center'>
                    <CustomLink className='link' to="/">Shop</CustomLink>
                    <CustomLink className="link" to="/orderReview">Order Review</CustomLink>
                    <CustomLink className="link" to="/manageInventory">Manage Inventory</CustomLink>
                    <CustomLink className="link" to="/signUp">Sign Up</CustomLink>
                    {
                        user ?
                            <Button className="link" onClick={handleSignOut}>Sign out</Button>
                            :
                            <CustomLink className="link" to="/login">Login</CustomLink>}
                </div>
            </div>
        </nav>
    );
};

export default Header;
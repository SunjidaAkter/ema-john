import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    // useRef holo ekti hook ja akti mutable reference object return kore

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    const navigateSignUp = () => {
        navigate('/logIn');
    }

    return (
        <div className='container '>
            <div className=' form-container mx-auto'>
                <h1 className='text-center'>Sign Up</h1>
                <Form onSubmit={handleCreateUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" name="email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label >Email Address</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" name="password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" required />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button className='w-100 d-block m-auto text-dark' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>Already have an account? <span onClick={navigateSignUp} className='sweet'>Please Log In.</span></p>
                <div>

                    <p className='text-center'>or</p>

                </div>
            </div>
        </div>

    );
};

export default SignUp;
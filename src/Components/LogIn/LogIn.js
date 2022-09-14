import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const navigate = useNavigate();



    const handleLogIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

    }

    const navigateLogIn = () => {
        navigate('/signUp')
    }

    return (
        <div className='container '>
            <div className=' form-container mx-auto'>
                <h1 className='text-center'>Log In</h1>
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button className='w-100 d-block m-auto text-dark' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>New to Ema-John? <span onClick={navigateLogIn} className='sweet'>Please Sign Up.</span></p>
            </div>
        </div>
    );
};

export default LogIn;
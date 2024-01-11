import React from 'react';
import { Button } from 'react-bootstrap';

function Welcome() {
  return (
    <>
        <div className='p-3 rounded-3 d-flex flex-column align-items-center justify-content-center text-center' style={{ width: "300px", height: "300px", backgroundColor: "white" }}>
            <h2>Let's save and calculate your salary!</h2>
            <p>North Haven Spa calculator is made to help my fellow therapist calculate their weekly paycheck with ease!</p>
            <Button className='btn btn-success btn-lg'>Get Started</Button>
        </div>
    </>
  )
};

export default Welcome;

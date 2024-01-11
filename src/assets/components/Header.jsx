import React from 'react';
import nhslogo from "../static/images/NHSlogo.png";

function Header() {
  return (
    <>
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div>
                <img src={nhslogo} width={150} alt="" />
            </div>
            <div>
                <h1>Sahod Calculator</h1>
            </div>
        </div>
    </>
  )
};

export default Header;

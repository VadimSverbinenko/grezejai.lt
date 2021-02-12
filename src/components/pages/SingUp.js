import React, { useState, useEffect } from 'react'
import '../../App.css';
import transperent from '../../img/images/transperent.png';


function SignUp() {

let changing = window.innerWidth <= 960 ? 'sizing' : 'sizing1'



  return(
    <div className='sign-up'>
      
      <div>
      <img className='contacts-img2' src={transperent} alt="Logo"  />
      </div>
      <div className={changing}>
      
      <ul>
        <li>Paulius +37067311326</li>
        <li>Deimantas +37067474129</li>
        <li><p>El. paštas: info@grezejai.lt</p></li>
        <li><p>FB: facebook.com/DeimantasPaulius</p></li>
      </ul>
      
      </div>
    </div>
  ) 
}



export default SignUp
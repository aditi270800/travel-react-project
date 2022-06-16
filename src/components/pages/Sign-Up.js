import React, {useState} from 'react';
import '../../App.css';
import { ReactComponent as ArrowRightIcon } from '../../Assets/keyboardArrowRightIcon.svg'

function Signup() {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='sign-up'>
      <header>SIGN-UP YOURSELF!</header>
      <div>
        <form>
          <input
            type='text'
            className='nameInput'
            placeholder='Name'
            id='name' />
            {/* value={name} */}
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'/>
            {/* value={email} */}
          <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password' />
              {/* value={password} */}
          </div>
          <div className='signUpBar'>
            <p className='signUpText'>Sign Up</p>
            <button className='signUpButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup

import React, { useState} from 'react';
import styles from './Register.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import MailIcon from '@mui/icons-material/Mail';
import Modal from 'react-modal';

function Register({ isOpen, onclose }) {

  const [showNameField, setShowNameField] = useState(true);
  const [signInButtonClicked, setSignInButtonClicked] = useState(false);
  const [signInBtnClass, setSignInBtnClass] = useState('');

  const[input, setInput] = useState({
    name:"",
    email:"",
    password:""
  })

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background:
        'grey url(https://t4.ftcdn.net/jpg/01/48/06/53/240_F_148065353_DeovUXEhy5vOMTpacPAibjGkmc6gZ5rd.jpg)',
      backgroundBlendMode: 'darken',
      backgroundSize: '15rem 25rem',
    },
  };

  const handleSignInClick = () => {
    setShowNameField(false);
    setSignInButtonClicked(true);
    setSignInBtnClass(styles.disable);

     }

  function handleSignUpClick(e) {
    setShowNameField(true);
    setSignInButtonClicked(false);
    setSignInBtnClass('');

    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
  }

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onclose} style={customStyles}>
        <div className={styles.formBox}>
          <h1 id='title'>{showNameField ? 'Sign Up' : 'Sign In'}</h1>
          <form>
            <div className={styles.inputGroup}>
              {showNameField && (
                <div className={styles.inputField} id='nameField'>
                  <AccountCircleIcon className={styles.icon} />
                  <input 
                  type='text' 
                  placeholder='Name' 
                  name='name' 
                  value={input.name}
                  onChange={(e) => setInput({...input, [e.target.name]:e.target.value})}
                  />
                </div>
              )}

              <div className={styles.inputField}>
                <MailIcon className={styles.icon} />
                <input 
                type='email' 
                placeholder='Email'
                name='email' 
                value={input.email}
                onChange={(e) => setInput({...input,email:e.target.value})}

                />
              </div>

              <div className={styles.inputField}>
                <KeyIcon className={styles.icon} />
                <input 
                type='password' 
                placeholder='Password'
                name='password' 
                value={input.password}
                onChange={(e) => setInput({...input, password:e.target.value})} />
              </div>
            </div>
            <div className={styles.btnField}>
              <button
                type='button'
                id='signupBtn'
                onClick={handleSignUpClick}
                className={signInButtonClicked ? styles.disable : signInBtnClass}
              >
                Sign Up
              </button>
              <button
                type='button'
                id='signinBtn'
                className={styles.disable}
                onClick={handleSignInClick}
                disabled={signInButtonClicked}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default Register;

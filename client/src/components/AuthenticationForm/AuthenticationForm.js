// React imports / type imports
import React, { useState } from 'react';

import classnames from 'classnames';

// Material UI imports
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import { Button, Input, InputLabel, FormControl, FormHelperText, Paper } from '@material-ui/core';

// import SocialFabs from './SocialFabs';
// CSS imports
import './AuthenticationForm.css';

// Import our validators
import { validateEmail, validatePassword } from '../../utils/validators';

const styles = theme =>
  createStyles({
    auth: {
      display: 'flex',
      justifyContent: 'space-around',
      alignContent: 'center',
      flexDirection: 'column',
      flexWrap: 'wrap',
      marginTop: '5%',
    },
    authForm: {
      display: 'flex',
      width: 'fit-content',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: 'whitesmoke',
      padding: theme.spacing(3, 2),
      boxShadow: '0 0 15px 10px #30324a',
    },
    button: {
      background: 'white',
      color: '#444',
      width: 'auto',
      minWidth: '300px',
      borderRadius: '5px',
      border: 'thin solid #888',
      boxShadow: '1px 1px 1px grey',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: '#d5d5d5',
        transform: 'scale(1.05)',
      },
    },
    submit: {
      marginTop: 15,
    },
  });

let AuthenticationForm = props => {
  const { classes } = props;
  // The auth component type defaults to login
  const formType = props.type || 'login';
  // Width defaults to 400px
  const width = props.width || '400px';

  // useState for all field values and setters
  const [firstName, setFirstName] = useState('');
  const [nameError, setNameError] = useState('');

  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: '' });

  const handleInputChange = (event, field) => {
    const { value } = event.target;

    validate(field, value);
    switch (field) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        console.log('Unhandled set state switch case...');
        break;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (formType === 'signup') {
      if (
        nameError === 'valid' &&
        lastNameError === 'valid' &&
        emailError === 'valid' &&
        passwordError === 'valid' &&
        confirmPasswordError === 'valid'
      ) {
        const result = props.submitHandler({ firstName, lastName, email, username, password });
        setSubmitResult(result);
        setSubmitted(true);
      } else {
        // Replace with toast / modal later
        alert('You have errors in some fields.');
      }
    } else if (formType === 'login') {
      if (username.length !== 0 && password.length !== 0) {
        const result = props.submitHandler({ username, password });
        setSubmitResult(result);
        setSubmitted(true);
      }
    }
  };

  const validate = (field, value) => {
    let error;
    switch (field) {
      case 'firstName':
        error = value ? 'valid' : 'invalid';
        setNameError(error);
        return error;
      case 'lastName':
        error = value ? 'valid' : 'invalid';
        setLastNameError(error);
        return error;
      case 'email':
        error = validateEmail(value) ? 'valid' : 'invalid';
        setEmailError(error);
        return error;
      case 'password':
        // If it's a login form, son't set password errors, or validate falsely
        error = validatePassword(value) ? 'valid' : 'invalid';
        formType === 'signup' && setPasswordError(error);
        return formType === 'signup' ? 'valid' : error;
      case 'confirmPassword':
        error = validatePassword(value) && password === value ? 'valid' : 'invalid';
        setConfirmPasswordError(error);
        return error;
      default:
        // Handle validating username in real time... Needs realtime database checking
        console.log('Realtime username validation hasnt been implemented');
        break;
    }
  };

  return (
    <div className={classnames(classes.auth, 'animated', 'fadeIn')}>
      <Paper className={classes.authForm}>
        {/* <SocialFabs /> */}
        <form noValidate={true} className='form' style={{ width }} onSubmit={handleFormSubmit}>
          {formType === 'signup' && (
            <>
              <FormControl>
                <InputLabel htmlFor='first-name' className={nameError}>
                  First Name
                </InputLabel>
                <Input
                  id='first-name'
                  type='text'
                  placeholder='First Name'
                  name='firstName'
                  onChange={event => handleInputChange(event, 'firstName')}
                  value={firstName}
                  aria-describedby='first-name-helper-text'
                  required
                />
                <FormHelperText className='info' id='first-name-helper-text'></FormHelperText>
              </FormControl>

              <FormControl>
                <InputLabel htmlFor='last-name' className={lastNameError}>
                  Last Name
                </InputLabel>
                <Input
                  id='last-name'
                  type='text'
                  placeholder='Last Name'
                  name='lastName'
                  onChange={event => handleInputChange(event, 'lastName')}
                  value={lastName}
                  aria-describedby='last-name-helper-text'
                  required
                />
                <FormHelperText className='info' id='last-name-helper-text'></FormHelperText>
              </FormControl>

              <FormControl>
                <InputLabel htmlFor='email' className={emailError}>
                  Email address
                </InputLabel>
                <Input
                  id='email'
                  type='email'
                  placeholder='Email'
                  name='email'
                  onChange={event => handleInputChange(event, 'email')}
                  value={email}
                  aria-describedby='email-helper-text'
                  required
                />
                <FormHelperText className='info' id='email-helper-text'>
                  We'll never share your email with anyone
                </FormHelperText>
              </FormControl>
            </>
          )}

          <FormControl>
            <InputLabel htmlFor='username'>Username {formType === 'signup' && '(optional)'}</InputLabel>
            <Input
              id='username'
              type='text'
              placeholder='username'
              name='username'
              onChange={event => handleInputChange(event, 'username')}
              value={username}
              aria-describedby='username-helper-text'
            />
            <FormHelperText className='info' id='email-helper-text'></FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor='password' className={passwordError}>
              Password
            </InputLabel>
            <Input
              id='password'
              type='password'
              placeholder='password'
              name='password'
              onChange={event => handleInputChange(event, 'password')}
              value={password}
              aria-describedby='password-helper-text'
            />
            {formType === 'signup' && (
              <FormHelperText className='error' id='password-helper-text'>
                {passwordError === 'valid'
                  ? ''
                  : 'Password must contain a number, special character, upper and lower case letter, and be between 8-64 characters long'}
              </FormHelperText>
            )}
          </FormControl>

          {formType === 'signup' && (
            <FormControl>
              <InputLabel htmlFor='confirmPassword' className={confirmPasswordError}>
                Confirm password
              </InputLabel>
              <Input
                id='confirmPassword'
                type='password'
                placeholder='confirm password'
                name='confirmPassword'
                onChange={event=> handleInputChange(event, 'confirmPassword')}
                value={confirmPassword}
                aria-describedby='confirm-password-helper-text'
              />
              <FormHelperText className={confirmPasswordError} id='confirm-password-helper-text'>
                {confirmPasswordError === 'valid' ? 'Passwords match!' : 'Passwords dont match'}
              </FormHelperText>
            </FormControl>
          )}

          <Button
            className={classnames(classes.submit, classes.button)}
            type='submit'
            disabled={submitted && submitResult.success}
            variant='outlined'
          >
            {formType === 'login' ? 'Log In' : 'Sign Up'}
          </Button>

          {submitted && (
            <div className='row'>
              <span className={submitResult.success ? 'submit-success' : 'submit-failure'}>{submitResult.message}</span>
            </div>
          )}
        </form>
      </Paper>
    </div>
  );
};

export default AuthenticationForm = withStyles(styles)(AuthenticationForm);

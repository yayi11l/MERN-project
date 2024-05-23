import React, { useContext, useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false);

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login()
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData({
        ...formState.inputs,
        name: undefined
      }, formState.inputs.email.isValid && formState.inputs.password.isValid)
    } else {
      setFormData({
        ...formState.inputs,
        name: {
         value:'',
         isValid: false
        }
      }, false)
    }
    setIsLoginMode(prevMode => !prevMode);
  }

  return (
    <Card className='authentication'>
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && 
        <Input 
          id='name'
          element='input'
          type='text'
          lable='Your Name'
          validators={[VALIDATOR_REQUIRE()]}
          errorText='Please enter a valid name'
          onInput={inputHandler}
        />}
        <Input
          id='email'
          element='input'
          type='email'
          lable='E-Mail'
          validators={[VALIDATOR_EMAIL()]}
          errorText='Please enter a valid email address.'
          onInput={inputHandler}
        />
        <Input
          id='password'
          element='input'
          type='password'
          lable='Password'
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText='Please enter a valid password at lease 5 characters.'
          onInput={inputHandler}
        />
        <Button type='submit' disabled={!formState.isValid} >
          {isLoginMode ? 'Login' : 'Sign Up'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler} >
        Switch To {isLoginMode ? 'Sign Up' : 'Login'}
      </Button>
    </Card>)
}
 
export default Auth;
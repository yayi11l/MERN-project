import React from "react";

import './PlaceForm.css';
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button"
import { useForm } from "../../shared/hooks/form-hook";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title:{
        value: '',
        isValid: false
      },
      description:{
        value: '',
        isValid: false
      },
      address:{
        value: '',
        isValid: false
      }
    }, 
    false
  );

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  }

  return (<form className="place-form" onSubmit={placeSubmitHandler}>
    <Input 
      id="title"
      element="input" 
      type="text" 
      lable="Title" 
      validarors={[VALIDATOR_REQUIRE()]} 
      errorText='Please enter a valid title.' 
      onInput={inputHandler}
    />
    <Input 
      id='description'
      element="textarea" 
      lable="Description" 
      validarors={[VALIDATOR_MINLENGTH(5)]} 
      errorText='Please enter a valid descriptions (at least 5 characters).' 
      onInput={inputHandler}
    />
    <Input 
      id='address'
      element="input" 
      lable="Address" 
      validarors={[VALIDATOR_REQUIRE()]} 
      errorText='Please enter a valid address.' 
      onInput={inputHandler}
    />
    <Button type="submit" disabled={!formState.isValid}>Add Place</Button>
  </form>
  );
}
 
export default NewPlace;
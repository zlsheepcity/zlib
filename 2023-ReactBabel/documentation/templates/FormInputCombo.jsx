import React from 'react';
import {Stack, TextField, Button} from '@mui/material';

const txt = {
  InputLabel: 'Input label',
  ButtonText: 'Action',
};

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Component = ({
  value   = '',
  action  = () => false,
}={} )=>{
  const [
    inputValue,
    inputValueSet,
  ] = React.useState('');

  const inputAction = React.useCallback(
    () => inputValue && action(inputValue)
    ,[inputValue] // watchers
  );

  const inputEvent = {
    onChange:event => {
      const valueRaw = event.target.value;
      const valueOut = valueRaw.replace(/[^\d]/g, ''); // only digits
      inputValueSet(valueOut);
    },
    onKeyDown:event => {
      const actionKey = event.keyCode === 13; // 'enter'
      if (actionKey) inputAction();
    },
  };

  // Runtime

  React.useEffect(() => { // initial inputValue
    inputValueSet(value);
  },[value]);

  return (
    <Stack spacing={1} direction="row" alignItems="start">
      <TextField
        label = {txt.InputLabel}
        value = {inputValue}
        onChange  = {inputEvent.onChange}
        onKeyDown = {inputEvent.onKeyDown}
        />
      <Button
        variant  = "contained"
        disabled = {!inputValue}
        onClick  = {inputAction}
        children = {txt.ButtonText}
        />
    </Stack>
  );
};
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export const   FormInputCombo = Component;
export default FormInputCombo ;

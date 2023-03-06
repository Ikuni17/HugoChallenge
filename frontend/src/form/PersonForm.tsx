import React from 'react';
import {useController} from 'react-hook-form';
import {HugoDatePicker, HugoStack, HugoTextInput} from '../components';

export const PersonForm: React.FC<SubFormProps> = ({control}) => {
  const {
    field: firstNameField,
    fieldState: {error: firstNameError}
  } = useController({name: 'firstName', control});

  const {
    field: lastNameField,
    fieldState: {error: lastNameError}
  } = useController({name: 'lastName', control});

  const {
    field: dateOfBirthField,
    fieldState: {error: dateOfBirthError}
  } = useController({name: 'dateOfBirth', control});

  return (
    <HugoStack pb="md">
      <HugoTextInput
        {...firstNameField}
        error={firstNameError?.message}
        withAsterisk
        label={'First Name'}
      />
      <HugoTextInput
        {...lastNameField}
        error={lastNameError?.message}
        withAsterisk
        label={'Last Name'}
      />
      <HugoDatePicker
        value={dateOfBirthField.value}
        onChange={dateOfBirthField.onChange}
        error={dateOfBirthError?.message}
        withAsterisk
        label={'Date of Birth'}
        clearable={false}
      />
    </HugoStack>
  );
};

import React from 'react';
import {useController, Control} from 'react-hook-form';
import {HugoDatePicker, HugoStack, HugoTextInput} from '../components';

interface PersonFormProps {
  control: Control<PersonFormFields>;
}

export const PersonForm: React.FC<PersonFormProps> = ({control}) => {
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
    <HugoStack pb="xl">
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
      />
    </HugoStack>
  );
};

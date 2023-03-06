import React from 'react';
import {useController, Control} from 'react-hook-form';
import {HugoStack, HugoTextInput} from '../components';

interface AddressFormProps {
  control: Control<PersonFormFields>;
}

export const AddressForm: React.FC<AddressFormProps> = ({control}) => {
  const {
    field: streetField,
    fieldState: {error: streetError}
  } = useController({name: 'address.street', control});

  const {
    field: cityField,
    fieldState: {error: cityError}
  } = useController({name: 'address.city', control});

  const {
    field: stateField,
    fieldState: {error: stateError}
  } = useController({name: 'address.state', control});

  const {
    field: zipcodeField,
    fieldState: {error: zipcodeError}
  } = useController({name: 'address.zipcode', control});

  return (
    <HugoStack pb="xl">
      <HugoTextInput
        {...streetField}
        error={streetError?.message}
        withAsterisk
        label={'Street'}
      />
      <HugoTextInput
        {...cityField}
        error={cityError?.message}
        withAsterisk
        label={'City'}
      />
      <HugoTextInput
        {...stateField}
        error={stateError?.message}
        withAsterisk
        label={'State'}
      />
      <HugoTextInput
        {...zipcodeField}
        error={zipcodeError?.message}
        withAsterisk
        label={'Zipcode'}
      />
    </HugoStack>
  );
};

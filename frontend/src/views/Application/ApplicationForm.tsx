import React, {useCallback} from 'react';
import {SubmitHandler, useForm, useController} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  HugoButton,
  HugoStack,
  HugoTextInput,
  HugoTitle
} from '../../components';
import {applicationFormSchema} from '../../form';
import {PersonForm} from '../../form/PersonForm';

interface ApplicationFormProps {
  application: Application;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  application
}) => {
  // const {mutate} = useApplicationCreate();
  const {id, person} = application;
  const {control, formState, handleSubmit} = useForm<PersonFormFields>({
    // resolver: yupResolver(applicationFormSchema),
    defaultValues: {...person, dateOfBirth: new Date(person.dateOfBirth)}
  });
  const onSubmit: SubmitHandler<PersonFormFields> = useCallback(
    person => console.log(person),
    []
  );

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonForm control={control} />
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
      </HugoStack>
      <HugoButton type="submit" fullWidth disabled={!formState.isDirty}>
        {'Submit'}
      </HugoButton>
    </form>
  );
};

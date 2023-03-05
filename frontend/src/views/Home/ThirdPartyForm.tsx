import React, {useCallback} from 'react';
import {SubmitHandler, useForm, useController} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  HugoButton,
  HugoCalendar,
  HugoStack,
  HugoTextInput,
  HugoTitle
} from '../../components';
import {thirdPartyFormSchema} from '../../form';
import {useApplicationCreate} from '../../api';

export const ThirdPartyForm: React.FC = () => {
  const {mutate} = useApplicationCreate();
  const {control, formState, handleSubmit} = useForm<ThirdPartyFormFields>({
    resolver: yupResolver(thirdPartyFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: undefined
    }
  });

  const onSubmit: SubmitHandler<ThirdPartyFormFields> = useCallback(
    person => mutate({person}),
    [mutate]
  );

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
      <HugoTitle order={3} align="center">
        {'Start New Application'}
      </HugoTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HugoStack>
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
          <HugoCalendar
            value={dateOfBirthField.value}
            onChange={dateOfBirthField.onChange}
            fullWidth
            wrapperProps={{
              error: dateOfBirthError?.message,
              withAsterisk: true,
              label: 'Date of Birth'
            }}
          />
          <HugoButton type="submit" fullWidth disabled={!formState.isDirty}>
            {'Submit'}
          </HugoButton>
        </HugoStack>
      </form>
    </HugoStack>
  );
};

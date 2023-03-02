import React, {useCallback} from 'react';
import {SubmitHandler, useForm, useController} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  HugoButton,
  HugoStack,
  HugoTextInput,
  HugoTitle
} from '../../components';
import {thirdPartyFormSchema} from '../../form';

type ThirdPartyFormFields = Pick<
  Person,
  'firstName' | 'lastName' | 'dateOfBirth'
>;

export const ThirdPartyForm: React.FC = () => {
  const {control, formState, handleSubmit} = useForm<ThirdPartyFormFields>({
    resolver: yupResolver(thirdPartyFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: ''
    }
  });

  const onSubmit: SubmitHandler<ThirdPartyFormFields> = useCallback(
    data => console.log(data),
    []
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
    <>
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
          <HugoTextInput
            {...dateOfBirthField}
            error={dateOfBirthError?.message}
            withAsterisk
            label={'Date of Birth'}
          />
          <HugoButton type="submit" disabled={!formState.isDirty}>
            {'Submit'}
          </HugoButton>
        </HugoStack>
      </form>
    </>
  );
};

import React, {useCallback} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {HugoButton, HugoStack, HugoTitle} from '../../components';
import {personFormSchema} from '../../form';
import {useApplicationCreate} from '../../api';
import {PersonForm} from '../../form/PersonForm';

export const ThirdPartyForm: React.FC = () => {
  const {mutate} = useApplicationCreate();
  const {control, formState, handleSubmit} = useForm<PersonFormFields>({
    resolver: yupResolver(personFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: undefined
    }
  });

  const onSubmit: SubmitHandler<PersonFormFields> = useCallback(
    person => mutate({person}),
    [mutate]
  );

  return (
    <HugoStack pb="xl">
      <HugoTitle order={3} align="center">
        {'Start New Application'}
      </HugoTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PersonForm control={control} />
        <HugoButton type="submit" fullWidth disabled={!formState.isDirty}>
          {'Submit'}
        </HugoButton>
      </form>
    </HugoStack>
  );
};

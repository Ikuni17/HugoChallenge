import React, {useCallback} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {HugoButton, HugoStack, HugoTitle} from '../../components';
import {personFormSchema} from '../../form';
import {useApplicationCreate} from '../../api';
import {PersonForm} from '../../form/PersonForm';
import {useHistory} from 'react-router-dom';
import {Routes} from '../../routes';

export const ThirdPartyForm: React.FC = () => {
  const history = useHistory();
  const {mutateAsync} = useApplicationCreate();
  const {control, formState, handleSubmit} = useForm<PersonFormFields>({
    resolver: yupResolver(personFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: undefined
    }
  });

  const onSubmit: SubmitHandler<PersonFormFields> = useCallback(
    person =>
      mutateAsync({person}).then(({status, data}) => {
        if (status === 201) {
          // Redirect to resume route
          history.push(`${Routes.Application}/${data.id}`);
        }
      }),
    [mutateAsync, history]
  );

  return (
    <HugoStack pb="xl">
      <HugoTitle>{'Start New Insurance Application'}</HugoTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PersonForm control={control} />
        <HugoButton type="submit" fullWidth disabled={!formState.isDirty}>
          {'Submit'}
        </HugoButton>
      </form>
    </HugoStack>
  );
};

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
    resolver: yupResolver(applicationFormSchema),
    defaultValues: {...person, dateOfBirth: new Date(person.dateOfBirth)}
  });
  // const onSubmit: SubmitHandler<ThirdPartyFormFields> = useCallback(
  //   person => mutate({person}),
  //   [mutate]
  // );

  return <PersonForm control={control} />;
};

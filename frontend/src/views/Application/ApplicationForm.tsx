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

interface ApplicationFormProps {
  application: Application;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  application
}) => {
  // const {mutate} = useApplicationCreate();
  const {id, person} = application;
  const {address, vehicles} = person;
  const {control, formState, handleSubmit} = useForm<ApplicationFormFields>({
    resolver: yupResolver(applicationFormSchema)
    // defaultValues: {
    // firstName: person.firstName,
    // lastName: person.lastName,
    // dateOfBirth: person.dateOfBirth,
    // person,
    // address,
    // vehicles
    // }
  });
  // const onSubmit: SubmitHandler<ThirdPartyFormFields> = useCallback(
  //   person => mutate({person}),
  //   [mutate]
  // );

  // const {
  //   field: firstNameField,
  //   fieldState: {error: firstNameError}
  // } = useController({name: 'firstName', control});

  // const {
  //   field: lastNameField,
  //   fieldState: {error: lastNameError}
  // } = useController({name: 'lastName', control});

  // const {
  //   field: dateOfBirthField,
  //   fieldState: {error: dateOfBirthError}
  // } = useController({name: 'dateOfBirth', control});

  return null;
};

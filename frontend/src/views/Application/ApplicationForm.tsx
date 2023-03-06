import React, {useCallback} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  HugoButton,
  HugoStack,
  HugoTextInput,
  HugoTitle
} from '../../components';
import {applicationFormSchema} from '../../form';
import {PersonForm} from '../../form/PersonForm';
import {AddressForm} from '../../form/AddressForm';
import {VehicleForm} from '../../form/VehicleForm';

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
    defaultValues: {
      ...person,
      dateOfBirth: new Date(person.dateOfBirth),
      address: person.address ?? {street: '', city: '', state: '', zipcode: ''},
      vehicles: person.vehicles?.length
        ? person.vehicles
        : [{make: '', model: '', year: undefined, vin: ''}]
    }
  });
  const onSubmit: SubmitHandler<PersonFormFields> = useCallback(
    person => console.log(person),
    []
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HugoTitle order={3} color="indigo">
        {'Insurance Application'}
      </HugoTitle>
      <PersonForm control={control} />
      <AddressForm control={control} />
      <VehicleForm control={control} />
      <HugoButton type="submit" fullWidth disabled={!formState.isDirty}>
        {'Submit'}
      </HugoButton>
    </form>
  );
};

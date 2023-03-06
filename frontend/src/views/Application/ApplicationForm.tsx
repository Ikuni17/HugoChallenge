import React, {useCallback} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {HugoButton, HugoTitle} from '../../components';
import {applicationFormSchema} from '../../form';
import {PersonForm} from '../../form/PersonForm';
import {AddressForm} from '../../form/AddressForm';
import {VehicleForm} from '../../form/VehicleForm';
import {MIN_VEHICLE_YEAR} from '../../constants';
import {useApplicationUpdate} from '../../api';

interface ApplicationFormProps {
  application: Application;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  application
}) => {
  const {id, person} = application;
  const {mutateAsync} = useApplicationUpdate();
  const {control, formState, handleSubmit, reset} = useForm<PersonFormFields>({
    resolver: yupResolver(applicationFormSchema),
    defaultValues: {
      ...person,
      dateOfBirth: new Date(person.dateOfBirth),
      address: person.address ?? {street: '', city: '', state: '', zipcode: ''},
      vehicles: !!person.vehicles?.length
        ? person.vehicles
        : [{make: '', model: '', year: MIN_VEHICLE_YEAR, vin: ''}]
    }
  });
  const onSubmit: SubmitHandler<PersonFormFields> = useCallback(
    async person => {
      await mutateAsync({id, person}).then(({data}) =>
        reset({...data.person, dateOfBirth: new Date(person.dateOfBirth)})
      );
    },
    [id, mutateAsync, reset]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HugoTitle order={3} color="indigo" align="center">
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

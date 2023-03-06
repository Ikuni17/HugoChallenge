import React, {useCallback} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {HugoButton, HugoStack, HugoTitle} from '../../components';
import {applicationFormSchema} from '../../form';
import {PersonForm} from '../../form/PersonForm';
import {AddressForm} from '../../form/AddressForm';
import {VehicleForm} from '../../form/VehicleForm';
import {MIN_VEHICLE_YEAR} from '../../constants';
import {useApplicationUpdate, useApplicationValidate} from '../../api';

interface ApplicationFormProps {
  application: Application;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  application
}) => {
  const {id, person} = application;

  const {mutateAsync: updateAsync, isLoading: updateIsLoading} =
    useApplicationUpdate();

  const {mutateAsync: validateAsync, data: priceData} =
    useApplicationValidate();

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
      await updateAsync({id, person})
        .then(({data}) => {
          validateAsync(data);

          return data;
        })
        .then(data =>
          reset({...data.person, dateOfBirth: new Date(person.dateOfBirth)})
        );
    },
    [id, updateAsync, validateAsync, reset]
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HugoTitle>{'Insurance Application'}</HugoTitle>
        <PersonForm control={control} />
        <AddressForm control={control} />
        <VehicleForm control={control} />
        <HugoButton
          type="submit"
          fullWidth
          disabled={!formState.isDirty || updateIsLoading}
        >
          {'Update Insurance Application'}
        </HugoButton>
      </form>
      {priceData && (
        <HugoStack pt="xl" spacing={0}>
          <HugoTitle order={4} align="start">
            Price
          </HugoTitle>
          {`$${priceData?.data.price}`}
        </HugoStack>
      )}
    </>
  );
};

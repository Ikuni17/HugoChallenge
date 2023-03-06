import React, {useCallback} from 'react';
import {
  SubmitHandler,
  useForm,
  useController,
  useFieldArray
} from 'react-hook-form';
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

interface ApplicationFormProps {
  application: Application;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  application
}) => {
  // const {mutate} = useApplicationCreate();
  const {id, person} = application;
  const {control, formState, handleSubmit, register} =
    useForm<PersonFormFields>({
      // resolver: yupResolver(applicationFormSchema),
      defaultValues: {...person, dateOfBirth: new Date(person.dateOfBirth)}
    });
  const onSubmit: SubmitHandler<PersonFormFields> = useCallback(
    person => console.log(person),
    []
  );

  const {
    fields: vehicleFields,
    append,
    remove
  } = useFieldArray({control, name: 'vehicles'});

  // const {
  //   field: makeField,
  //   fieldState: {error: makeError}
  // } = useController({name: 'vehicle.make', control});

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonForm control={control} />
      <AddressForm control={control} />
      <HugoStack>
        {vehicleFields.map((vehicle, i) => {
          return (
            <HugoTextInput
              key={vehicle.id}
              {...register(`vehicles.${i}.make`)}
            />
          );
        })}
      </HugoStack>
      <HugoButton type="submit" fullWidth disabled={!formState.isDirty}>
        {'Submit'}
      </HugoButton>
    </form>
  );
};

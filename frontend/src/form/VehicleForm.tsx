import React from 'react';
import {useController, useFieldArray} from 'react-hook-form';
import {
  HugoButton,
  HugoGroup,
  HugoStack,
  HugoTextInput,
  HugoTitle
} from '../components';

interface VehicleFieldSetProps extends SubFormProps {
  name: string;
}

const VehicleFieldSet: React.FC<VehicleFieldSetProps> = ({name, control}) => {
  const {
    field: makeField,
    fieldState: {error: makeError}
  } = useController({name: `${name}.make`, control});
  const {
    field: modelField,
    fieldState: {error: modelError}
  } = useController({name: `${name}.model`, control});
  const {
    field: yearField,
    fieldState: {error: yearError}
  } = useController({name: `${name}.year`, control});
  const {
    field: vinField,
    fieldState: {error: vinError}
  } = useController({name: `${name}.vin`, control});

  return (
    <>
      <HugoTextInput
        {...makeField}
        error={makeError?.message}
        withAsterisk
        label={'Make'}
      />
      <HugoTextInput
        {...modelField}
        error={modelError?.message}
        withAsterisk
        label={'Model'}
      />
      <HugoTextInput
        {...yearField}
        error={yearError?.message}
        withAsterisk
        label={'Year'}
      />
      <HugoTextInput
        {...vinField}
        error={vinError?.message}
        withAsterisk
        label={'VIN'}
      />
    </>
  );
};

export const VehicleForm: React.FC<SubFormProps> = ({control}) => {
  const {
    fields: vehicleFields,
    append,
    remove
  } = useFieldArray({control, name: 'vehicles'});

  return (
    <HugoStack pb="md">
      <HugoTitle order={3} color="indigo">
        {'Vehicles'}
      </HugoTitle>
      <HugoButton
        onClick={() => append({make: '', model: '', year: 1, vin: ''})}
        disabled={vehicleFields.length > 2}
      >
        {'Add Vehicle'}
      </HugoButton>
      {vehicleFields.map((vehicle, i) => {
        return (
          <HugoGroup key={`${vehicle.id}-group`} align={'flex-end'} grow>
            <VehicleFieldSet
              key={vehicle.id}
              control={control}
              name={`vehicles.${i}`}
            />
            <HugoButton
              key={`${vehicle.id}-remove`}
              disabled={vehicleFields.length === 1}
              onClick={() => remove(i)}
            >
              {'Remove'}
            </HugoButton>
          </HugoGroup>
        );
      })}
    </HugoStack>
  );
};

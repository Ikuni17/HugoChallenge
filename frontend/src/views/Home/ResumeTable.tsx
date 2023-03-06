import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {HugoButton, HugoStack, HugoTable, HugoTitle} from '../../components';
import {Routes} from '../../routes';
import {useApplicationList} from '../../api';

export const ResumeTable: React.FC = () => {
  const {data} = useApplicationList();
  const rows = useMemo(() => {
    return data?.map(({id, person}) => {
      return (
        <tr key={id}>
          <td>{person.firstName}</td>
          <td>{person.lastName}</td>
          <td>{new Date(person.dateOfBirth).toLocaleDateString()}</td>
          <td>
            <HugoButton component={Link} to={`${Routes.Application}/${id}`}>
              Edit
            </HugoButton>
          </td>
        </tr>
      );
    });
  }, [data]);

  return (
    <HugoStack pt="xl">
      <HugoTitle>{'Resume Application'}</HugoTitle>
      <HugoTable>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows ?? []}</tbody>
      </HugoTable>
    </HugoStack>
  );
};

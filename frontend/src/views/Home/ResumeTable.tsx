import React, {useEffect, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import {HugoButton, HugoStack, HugoTable, HugoTitle} from '../../components';
import {Routes} from '../../routes';
import {listApplications} from '../../api';
import {useQuery} from 'react-query';

export const ResumeTable: React.FC = () => {
  const {data} = useQuery('applications', listApplications);
  const rows = useMemo(() => {
    // @ts-expect-error asdasd
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

  // // TODO: Fetching twice
  // useEffect(() => {
  //   fetch('http://localhost:8000/api/application', {
  //     mode: 'cors'
  //   })
  //     .then(r => {
  //       if (r.ok) {
  //         return r.json() as Promise<Application[]>;
  //       }
  //     })
  //     .then(data => {
  //       setApplications(data);
  //     });
  // }, []);

  return (
    <HugoStack pt="xl">
      <HugoTitle order={3} align="center">
        {'Resume Application'}
      </HugoTitle>
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

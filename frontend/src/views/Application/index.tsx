import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {useApplicationRead} from '../../api';
import {HugoContainer, HugoButton, HugoGroup} from '../../components';
import {ApplicationForm} from './ApplicationForm';
import {Routes} from '../../routes';

export const Application: React.FC = () => {
  const {id} = useParams<{id: string}>();
  const {data: application, isFetching: readIsFetching} =
    useApplicationRead(id);

  return (
    <HugoContainer>
      {application ? (
        <ApplicationForm application={application} />
      ) : readIsFetching ? (
        <HugoGroup position={'center'}>
          {'Loading Insurance Application'}
        </HugoGroup>
      ) : (
        <HugoGroup position={'center'}>
          {'Invalid Insurance Application ID'}
          <HugoButton ml="xl" component={Link} to={Routes.Home}>
            Return Home
          </HugoButton>
        </HugoGroup>
      )}
    </HugoContainer>
  );
};

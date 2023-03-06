import React from 'react';
import {useParams} from 'react-router-dom';
import {useApplicationRead} from '../../api';
import {HugoContainer} from '../../components';
import {ApplicationForm} from './ApplicationForm';

export const Application: React.FC = () => {
  const {id: applicationId} = useParams<{id: string}>();
  const {data: application} = useApplicationRead(applicationId);

  return (
    <HugoContainer>
      {/* TODO: Render something when !app or handle no application (empty form?) in comp */}
      {application && <ApplicationForm application={application} />}
    </HugoContainer>
  );
};

import React from 'react';
import {useParams} from 'react-router-dom';
import {useApplicationRead} from '../../api';

export const Application: React.FC = () => {
  const {id: applicationId} = useParams<{id: string}>();
  const {data} = useApplicationRead(applicationId);

  return null;
};

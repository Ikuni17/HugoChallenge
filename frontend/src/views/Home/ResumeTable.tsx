import React, {useEffect, useState} from 'react';
import {HugoStack, HugoTable, HugoTitle} from '../../components';

export const ResumeTable: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>();

  useEffect(() => {
    fetch('http://localhost:8000/api/application', {
      mode: 'cors'
    })
      .then(r => {
        if (r.ok) {
          return r.json() as Promise<Application[]>;
        }
      })
      .then(data => {
        setApplications(data);
      });
  }, []);

  return (
    <>
      <HugoTitle order={3} align="center">
        {'Resume Application'}
      </HugoTitle>
      <HugoStack>
        <HugoTable></HugoTable>
      </HugoStack>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import Title from '../layouts/Title';
import LegalService from '../../services/LegalService';

function Legal() {
  const [data, setData] = useState();

  const getData = async () => {
    const legalData = await LegalService.getData();
    setData(legalData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title title="Legal Notice and Terms" />
      <div className="container dv-main">
        {data
        && (
        <>
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="full-width title text-center">{data.title}</label>
          <p className="re-line">{data.description}</p>
          <ul>
            {data.names.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </>
        )}
      </div>
    </>
  );
}

export default Legal;

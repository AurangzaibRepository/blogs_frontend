import React, { useState, useEffect } from 'react';
import Title from '../layouts/Title';
import ContentsSection from '../About/ContentsSection';
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
      <div className="container dv-main" id="dv-legal">
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
          {data.terms.map((item) => (
            <>
              <div className="section-divider" />
              <ContentsSection
                titleClass="sub-title"
                title={item.title}
                contents={item.description}
              />
            </>
          ))}
        </>
        )}
      </div>
    </>
  );
}

export default Legal;

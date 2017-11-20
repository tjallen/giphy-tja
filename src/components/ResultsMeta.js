import React from 'react';

const ResultsMeta = ({ pagination }) => {
  const {
    count: c,
    total_count: t,
  } = pagination;
  return (
    <p>{`Displaying ${c} results of ${t} total`}</p>
  );
}

export default ResultsMeta;

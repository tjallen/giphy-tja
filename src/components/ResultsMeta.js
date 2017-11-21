import React from 'react';

const ResultsMeta = ({ pagination, query }) => {
  const {
    count: c,
    total_count: t,
  } = pagination
  return (
    <p>{`Displaying ${c} results for`} <b>{query}</b> {`of ${t} total`}</p>
  );
}

export default ResultsMeta;

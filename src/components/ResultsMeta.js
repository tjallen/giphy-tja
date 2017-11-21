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

ResultsMeta.defaultProps = {
  query: 'your search query',
};

export default ResultsMeta;

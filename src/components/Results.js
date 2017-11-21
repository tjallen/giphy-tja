import React, { Component } from 'react';
import Gif from './Gif';
import ResultsMeta from './ResultsMeta';

export default class Results extends Component {
  render() {
    const {
      results,
      onGifClick,
      pagination,
      query,
      isFetching,
    } = this.props;
    if (isFetching) return (
      <p>Loading...</p>
    )
    return (
      <div>
        {pagination &&
          <ResultsMeta pagination={pagination} query={query} />
        }
        {results.map((item) =>
          <Gif
            id={item.id}
            onGifClick={onGifClick}
            key={item.id}
            src={item.images.fixed_height.url}
            title={item.title}
            uploader={item.username}
            uploadDate={item.import_datetime}
          />
        )}
      </div>
    );
  }
}
import React from 'react';
import BigDataOne from 'src/bigData/bigDataOne';
import BigDataTwo from 'src/bigData/bigDataTwo';
import './bigData.scss';

export default function BigData() {
  return (
    <section className="BigData">
      <BigDataOne />
      <BigDataTwo />
    </section>
  );
}

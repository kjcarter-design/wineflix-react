import React from 'react';
import Wine from './Wine';

export default function Category({ title, wines }) {
  return (
    <section className="category">
      <h2>{title}</h2>
      <ul>
        {wines.map(wine => (
          <Wine key={wine.id} wine={wine} />
        ))}
      </ul>
    </section>
  );
};

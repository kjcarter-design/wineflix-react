import React from 'react';

export default function Wine({ wine }) {
  return (
    <li>
      <div className="wine">
        <img src={wine.imageUrl} alt={wine.label} />
        {wine.isNew && <span className="new-badge">New!</span>}
        {wine.isFinished && (
          <div className="amount-consumed">
            <progress min="0" max="100" value={wine.progress}></progress>
          </div>
        )}
      </div>
    </li>
  );
};

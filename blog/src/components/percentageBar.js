import React from 'react';

const percentageBar = (percentage) => {
  if (percentage > 0) {
    return (
      <div className="action-widget-row__percentage">
        <div className="action-widget-row__bar">
          <div
            className="action-widget-row__bar-level"
            style={{
              width: `${percentage}%`,
              backgroundColor: percentage > 60 ? 'green' : 'orange',
            }}
          >
            {' '}
          </div>
          <span className="action-widget-row__block"> </span>
          <span className="action-widget-row__block"> </span>
          <span className="action-widget-row__block"> </span>
          <span className="action-widget-row__block"> </span>
          <span className="action-widget-row__block"> </span>
        </div>
      </div>
    );
  }
  return null;
};

export default percentageBar;
